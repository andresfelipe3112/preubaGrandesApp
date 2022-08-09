import React, {useState, useEffect, useCallback} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  LogBox,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
  RTCView,
  mediaDevices,
  MediaTrackConstraints,
  MediaStream,
} from 'react-native-webrtc';
import {useSelector} from 'react-redux';

import {Api} from '../../axios';
import Chat from '../../components/Chat/chat';
import {CreateStreamsProps} from '../../Props/screensProps';
import {
  useDeleteMessageMutation,
  useSendMessagePhenixMutation,
} from '../../Redux/Api/api';
import {RootState} from '../../Redux/store';

import {CustomButton} from './components/ui';

// eslint-disable-next-line no-global-assign
global = Object.assign(global, {
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
});

LogBox.ignoreAllLogs();

const sdk = require('phenix-web-sdk/dist/phenix-web-sdk-react-native');

sdk.RTC.shim(); // Required

// authToken
const VIDEO_INPUT = 'videoinput';

enum FacingType {
  User = 'user',
  Environment = 'environment',
}
interface VideoDevicesProps {
  deviceId: string;
  facing: string;
  kind: string;
}

const CreateStream: React.FC<CreateStreamsProps> = ({route, navigation}) => {
  const {replace} = navigation;
  const webrtcSupported = sdk.RTC.webrtcSupported;
  const [videoDevices, setVideoDevices] = useState<VideoDevicesProps[]>([]);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [authToken, setAuthToken] = useState<string>('');
  const [publishToken, setPublishToken] = useState<string>('');
  const [channel, setChannel] = useState<Channel | null>(null);
  const [isPublishing, setIsPublishing] = useState<boolean>(false);
  const [facing, setFacing] = useState<MediaTrackConstraints['facingMode']>(
    FacingType.Environment,
  );
  console.log('renderizado');
  console.log(route.params.state);
  const {name, desc, img} = route.params.state;

  const user = useSelector((state: RootState) => state.auth.user);
  interface PublishOptions {
    authToken: string;
    publishToken: string;
    channel: Object;
    userMediaStream: MediaStream;
  }

  const [livestreamId, setLiveStreamId] = useState<string>('');
  const [aliasChannel, setAliasChannel] = useState<string>('');
  const [nameChannel, setNameChannel] = useState<string>('');
  const [reset, setReset] = useState<boolean>(false);

  interface Channel {
    publishToChannel: (
      a: PublishOptions,
      b: (
        error: any,
        response: {
          status: string | undefined;
          publisher: {getStreamId: () => string};
        },
      ) => Promise<void>,
    ) => void;
    dispose: () => void;
  }

  // hooks of RTK query

  // send message
  const [sendMessagePhenix] = useSendMessagePhenixMutation();

  const [deleteMessage] = useDeleteMessageMutation();

  const apiCall = useCallback(async () => {
    const dataCreateLiveStream = {
      creatorId: user?.id,
      name: name,
      description: desc,
      active: false,
      products: [{}],
      token: 'fasdfafdasdfa',
      urlImage: img,
    };

    const resp1 = await Api({
      endpoint: '/livestreams',
      method: 'POST',
      _data: dataCreateLiveStream,
      tokenUse: true,
    });
    if (resp1.status === 200) {
      setLiveStreamId(resp1.data.data._id);
      const resp = await Api({
        endpoint: '/phenix/' + resp1.data.data._id + '/publish',
        tokenUse: true,
      });
      console.log(resp);
      try {
        if (resp.status === 200) {
          setAuthToken(resp.data.authToken);
          setPublishToken(resp.data.publishToken);
          setAliasChannel(resp.data.channelAlias);
          setNameChannel(resp.data.email);
        }
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    }
  }, [
    desc,
    name,
    img,
    user,
    setLiveStreamId,
    setAuthToken,
    setPublishToken,
    setAliasChannel,
    setNameChannel,
  ]);

  useEffect(() => {
    mediaDevices
      .enumerateDevices()
      .then((devices: VideoDevicesProps[]) => {
        const videoDevs = devices.filter(val => val.kind === VIDEO_INPUT);
        setVideoDevices(videoDevs);

        const facingMode =
          videoDevs[0].facing === FacingType.Environment
            ? FacingType.Environment
            : FacingType.User;
        setFacing(facingMode);

        const sourceId =
          videoDevices.find(val => val.facing === facingMode)?.deviceId || '0';
        const video: MediaTrackConstraints = {
          facingMode,
          mandatory: {
            minWidth: 640,
            minHeight: 480,
            minFrameRate: 15,
          },
          optional: [{sourceId}],
        };

        mediaDevices
          .getUserMedia({
            video,
            audio: true,
          })
          .then(streamm => {
            if (streamm && streamm instanceof MediaStream) {
              setStream(streamm);
            }
          })
          .catch(() => {});
      })
      .catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (authToken === '' && publishToken === '') {
      console.log('hizo apicall');
      apiCall();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (channel && publishToken !== '' && stream) {
      const publishOptions = {
        authToken,
        publishToken,
        channel: {
          name: nameChannel,
          alias: aliasChannel,
        },
        userMediaStream: stream,
      };
      channel.publishToChannel(
        publishOptions,
        async (
          error: any,
          response: {
            status: string | undefined;
            publisher: {getStreamId: () => string};
          },
        ) => {
          if (error) {
            // stopPublisher();

            throw error;
          }

          if (
            response.status !== 'ok' &&
            response.status !== 'ended' &&
            response.status !== 'stream-ended'
          ) {
            // stopPublisher();

            throw new Error(response.status);
          }

          if (response.status === 'ok') {
            console.log('entro publisher ' + response.publisher.getStreamId());
            await sendMessagePhenix({
              type: 'start',
              message: '[ START ' + response.publisher.getStreamId() + ' ]',
              idStream: livestreamId,
            });
          }
        },
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channel]);

  useEffect(() => {
    stream?.getVideoTracks().forEach(track => {
      track._switchCamera();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [facing]);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      if (stream && authToken && publishToken && !isPublishing) {
        setIsPublishing(true);

        const channelExpress = new sdk.express.ChannelExpress({authToken});
        setChannel(channelExpress);
      }
    },
    [authToken, stream, publishToken, isPublishing],
  );

  const onCancel = useCallback(async () => {
    await deleteMessage({type: 'ended', idStream: livestreamId});
    if (channel) {
      channel.dispose();
    }
    setReset(true);

    if (isPublishing) {
      setIsPublishing(false);
    }
    replace('MyStreams');
  }, [channel, deleteMessage, livestreamId, isPublishing, replace]);

  const toggleCamera = () => {
    const newFacing =
      facing === FacingType.User ? FacingType.Environment : FacingType.User;
    setFacing(newFacing);
  };

  const videoURL = stream?.toURL() || '';
  const isSwitchCamera = videoDevices.length > 1;

  return (
    <View style={styles.wrapper}>
      <SafeAreaView style={styles.flex}>
        <ScrollView style={styles.flex}>
          <View style={styles.container}>
            <View
              style={{
                position: 'absolute',
                bottom: 100,
                left: 20,
                zIndex: 9999,
              }}>
              <Chat
                colorText="black"
                isCreator={true}
                liveStreamId={livestreamId}
                reset={reset}
                setReset={setReset}
              />
            </View>
            <RTCView style={styles.video} streamURL={videoURL} />
            <LinearGradient
              opacity={0.97}
              colors={['transparent', 'white', 'white']}
              style={{
                position: 'absolute',
                bottom: -5,
                width: '100%',
                height: Dimensions.get('window').height * 0.4,
              }}
            />

            <View style={styles.btns}>
              {isSwitchCamera && (
                <View style={styles.btn}>
                  <CustomButton
                    textStyle={{color: 'gray', fontSize: 11}}
                    styleProp={{borderRadius: 10, borderColor: 'gray'}}
                    title={
                      facing === FacingType.User
                        ? 'Rear Camera'
                        : 'Front Camera'
                    }
                    onPress={toggleCamera}
                  />
                </View>
              )}
              <View style={styles.btn}>
                <CustomButton
                  textStyle={{color: 'gray', fontSize: 11}}
                  styleProp={{borderRadius: 10, borderColor: 'gray', width: 90}}
                  title={isPublishing ? 'CANCEL' : 'PUBLISH'}
                  onPress={isPublishing ? onCancel : onSubmit}
                />
              </View>
            </View>

            <View style={styles.isPublishingWrapper}>
              <Text style={styles.isPublishing}>
                {isPublishing ? 'LIVE' : 'Not live'}
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default CreateStream;

const styles = StyleSheet.create({
  flex: {flex: 1},
  text: {color: 'black'},
  wrapper: {
    flex: 1,
    backgroundColor: '#ddd',
    width: '100%',
    positon: 'relative',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    color: 'black',
    width: '100%',
  },
  video: {
    height: 550,
    width: '100%',
  },
  inputWrapper: {
    flex: 1,
    width: '100%',
    marginTop: 8,
  },
  btns: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
  },
  btn: {
    minWidth: 100,
    margin: 16,
  },
  isPublishingWrapper: {
    position: 'absolute',
    top: 4,
    left: 8,
  },
  isPublishing: {color: 'red', fontWeight: 'bold', fontSize: 20},
});
