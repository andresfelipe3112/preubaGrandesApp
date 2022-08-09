/*
 * Copyright 2021 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 *
 * By using this code you agree to the Phenix Terms of Service found online here:
 * http://phenixrts.com/terms-of-service.html
 */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  LogBox,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
  RTCView,
} from 'react-native-webrtc';
import {Api} from '../../axios';
import Chat from '../../components/Chat/chat';
import {JoinStreamProps} from '../../Props/screensProps';

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

const TOKEN = '';

const JoinStream: React.FC<JoinStreamProps> = ({route, navigation}) => {
  const {id} = route.params.state;
  const webrtcSupported = sdk.RTC.webrtcSupported;
  const [videoURL, setVideoURL] = useState('');
  const [token, setToken] = useState(TOKEN);
  const [reset, setReset] = useState<boolean>(false);
  const [channel, setChannel] = useState<Channel>();
  const [onChannel, setOnChannel] = useState<boolean>(false);
  const apiCall = async () => {
    const resp = await Api({
      endpoint: `/phenix/${id}/view`,
      tokenUse: true,
    });
    try {
      if (resp.status === 200) {
        setToken(resp.data.authToken);
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
  useEffect(() => {
    apiCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  interface Channel {
    joinChannel: (
      a: {streamToken: string},
      b: () => void,
      c: (error: any, response: {status: string; mediaStream: any}) => void,
    ) => void;
    dispose: () => void;
  }
  useEffect(() => {
    if (token && channel) {
      if (channel) {
        channel.joinChannel(
          {streamToken: token},
          () => {},
          (error: any, response: {status: string; mediaStream: any}) => {
            if (response?.mediaStream) {
              const streamURL = response.mediaStream.getStream().toURL();
              setVideoURL(streamURL);
            }
            if (response.status !== 'ok') {
              setReset(true);
              return navigation.replace('Home');
            }
          },
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channel, token]);

  const onSubmit = () => {
    const channelExpress = new sdk.express.ChannelExpress({authToken: token});
    setChannel(channelExpress);
    setOnChannel(true);
  };

  const onCancel = () => {
    if (channel) {
      channel.dispose();
    }
    navigation.replace('Home');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={90}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.wrapper}>
          <SafeAreaView style={styles.flex}>
            <View
              style={{
                position: 'absolute',
                bottom: 75,
                left: 20,
                zIndex: 9999,
              }}>
              <Chat
                isCreator={false}
                liveStreamId={id}
                reset={reset}
                setReset={setReset}
              />
            </View>
            <View style={styles.container}>
              <Text>
                {'WebRTC is supported: ' + (webrtcSupported ? 'YES' : 'NO')}
              </Text>

              <RTCView style={styles.video} streamURL={videoURL} />
              <LinearGradient
                opacity={0.9}
                colors={['transparent', 'black', 'black']}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                  height: Dimensions.get('window').height * 0.5,
                }}
              />

              <View style={styles.inputWrapper} />

              <View style={styles.btns}>
                {!onChannel ? (
                  <View style={styles.btn}>
                    <CustomButton title={'JOIN'} onPress={onSubmit} />
                  </View>
                ) : (
                  <View style={styles.btn}>
                    <CustomButton
                      title={'LEAVE'}
                      onPress={onCancel}
                      color="#333"
                    />
                  </View>
                )}
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default JoinStream;

const styles = StyleSheet.create({
  flex: {flex: 1},
  wrapper: {
    flex: 1,
    backgroundColor: '#000',
    width: '100%',
    position: 'relative',
  },
  container: {
    flex: 1,
    alignItems: 'center',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 999,
    marginBottom: 8,
  },
  btn: {
    minWidth: 100,
    margin: 16,
  },
});
