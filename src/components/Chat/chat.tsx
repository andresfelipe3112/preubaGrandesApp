import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import {
  useGetMessagesQuery,
  useSendMessagePhenixMutation,
} from '../../Redux/Api/api';
import Make from './Products/make';
import Show, {Product} from './Products/show';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import {ContainerSvg, styles} from './styles';
import {useSelector} from 'react-redux';
import {RootState} from '../../Redux/store';
import {navigate} from '../../../RootNavigation';

type Props = {
  colorText?: string;
  isCreator: boolean;
  liveStreamId: string;
  reset: boolean;
  setReset: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface Message {
  messageId: string;
  timestamp: number;
  deletedTimestamp: number;
  from: {
    sessionId: string;
    screenName: string;
    role: string;
    lastUpdate: number;
  };
  mimeType: string;
  message: string;
  tags: Array<any>;
}
const Chat: React.FC<Props> = ({
  isCreator,
  liveStreamId,
  reset: resett,
  setReset,
  colorText = '#fff',
}) => {
  const user = useSelector((state: RootState) => state.auth.user);
  // states
  const [messages, setMessages] = useState<Array<Message>>([]);
  const [message, setMessage] = useState<string>('');
  const [prods, setProds] = useState<Array<Message>>([]);
  const [productsShow, setProductsShow] = useState<Array<Product>>([]);

  // hooks of RTK query

  // get messages
  const {data, refetch} = useGetMessagesQuery({
    idStream: liveStreamId,
  });

  // send message
  const [sendMessagePhenix, result] = useSendMessagePhenixMutation();

  // handle change chat input
  const handleChange = useCallback(
    (value: string) => {
      setMessage(value);
    },
    [setMessage],
  );

  // submit message in the chat
  const submit = (e: any) => {
    e.preventDefault();
    if (user?.potentialAction.includes('guest')) {
      navigate('Login');
    } else {
      send(message);
      setMessage('');
      refetch();
    }
  };

  // lasti message variable
  let lastMessageId = '';

  // send message
  const send = async (str: string) => {
    await sendMessagePhenix({message: str, idStream: liveStreamId});
    if (result.isSuccess) {
      console.log('sent');
    }
  };

  // get all messages
  const getMsgs = () => {
    // const resp = await getMessages();
    if (data) {
      const onlyMsgs = data.messages.messages.filter(
        msg =>
          !msg.message.startsWith('[ PRODUCT ') &&
          !msg.message.startsWith('[ START '),
      );
      // console.log(onlyMsgs);
      if (onlyMsgs.length > 0) {
        setMessages(onlyMsgs);
        lastMessageId = onlyMsgs[onlyMsgs.length - 1].messageId;
      }
      getProdsMsgs(data.messages.messages);
    }
  };

  // get all product messages
  const getProdsMsgs = (messagess: any) => {
    const productsMsgs: Message[] = messagess.filter((msg: any) =>
      msg.message.startsWith('[ PRODUCT '),
    );
    setProds(productsMsgs);
  };

  //reset all variables
  const reset = () => {
    setProds([]);
    setProductsShow([]);
    setMessages([]);
  };

  useEffect(() => {
    if (resett) {
      console.log('reseteo');
      reset();
      setReset(false);
    }
    refetch();
    getMsgs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  // console.log(productsShow);
  // console.log(data);

  const scrollViewRef = useRef<ScrollView | null>(null);

  return (
    <View>
      {/* creator use Make component and consumer show */}
      {!isCreator ? (
        <Show
          messages={prods}
          reload={refetch}
          setProductsShow={setProductsShow}
          productsShow={productsShow}
        />
      ) : (
        <View style={{marginBottom: 350}}>
          <Make
            messages={prods}
            reload={refetch}
            setProductsShow={setProductsShow}
            productsShow={productsShow}
            liveStreamId={liveStreamId}
          />
        </View>
      )}
      {/* example of loading in this case utilizing getMessages request
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text style={{color: '#fff'}}>TERMINO</Text>
      )}*/}
      <View style={{maxHeight: 200}}>
        <ScrollView
          style={{
            position: 'absolute',
            bottom: 30,
            maxHeight: 250,
            width: Dimensions.get('window').width * 0.6,
          }}
          ref={scrollViewRef}
          onContentSizeChange={(contentWidth, contentHeight) => {
            scrollViewRef?.current?.scrollToEnd({animated: true});
          }}>
          {messages
            .filter(msg => msg.messageId > lastMessageId)
            .map(msg => {
              return (
                <View
                  key={msg.messageId}
                  style={{flexDirection: 'column', marginVertical: 5}}>
                  <Text
                    style={{color: colorText, margin: 0, fontWeight: 'bold'}}>
                    {msg.from.screenName}:
                  </Text>
                  <Text style={{color: colorText, marginTop: 0}}>
                    {msg.message}
                  </Text>
                </View>
              );
            })}
        </ScrollView>
      </View>
      {/* only consumer can send messages, the creator only can send product messages */}
      {!isCreator && (
        <View style={styles.containerInput}>
          <TextInput
            onChangeText={text => handleChange(text)}
            value={message}
            style={styles.textInput}
            placeholder="Say something..."
            placeholderTextColor="#606060"
            multiline
          />
          <TouchableOpacity>
            <Image
              source={require('../../assets/Doint.png')}
              style={styles.imgDoint}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={submit}>
            <ContainerSvg>
              <Svg viewBox="0 0 20 20" fill="#A0A0A0" width={35} height={35}>
                <Path
                  fill-rule="evenodd"
                  d="M7.823.177L4.927 3.073a.25.25 0 00.177.427H7.25v5.75a.75.75 0 001.5 0V3.5h2.146a.25.25 0 00.177-.427L8.177.177a.25.25 0 00-.354 0zM3.75 6.5a.25.25 0 00-.25.25v6.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25v-6.5a.25.25 0 00-.25-.25h-1a.75.75 0 010-1.5h1c.966 0 1.75.784 1.75 1.75v6.5A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25v-6.5C2 5.784 2.784 5 3.75 5h1a.75.75 0 110 1.5h-1z"
                />
              </Svg>
            </ContainerSvg>
          </TouchableOpacity>
          <TouchableOpacity
          // onPress={submit}
          >
            <Image
              source={require('../../assets/Union.png')}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
export default Chat;
