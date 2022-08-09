import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';
import {useSendMessagePhenixMutation} from '../../../Redux/Api/api';

import {Message} from '../chat';
import {products} from './show';

type ShowProps = {
  messages: Array<Message>;
  reload: () => void;
  setProductsShow: (a: any) => void;
  productsShow: Array<Product>;
  liveStreamId: string;
};

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const Make: React.FC<ShowProps> = ({
  messages,
  reload,
  setProductsShow,
  productsShow,
  liveStreamId,
}) => {

  const [onScrollView, setOnScrollView] = useState<boolean>(false)


  // RTK query sendMessage method
  const [sendMessagePhenix] = useSendMessagePhenixMutation();
  // this function verify is number is odd if is odd should be show
  function isOdd(num: number) {
    return !!(num % 2);
  }
  // render products iterates the product messages searching by id similar than show component
  const renderProducts = () => {
    if (messages.length > 0) {
      for (let i = 0; i < messages.length; i++) {
        let prodID = messages[i].message.split(' ')[2];
        console.log(prodID);
        const exists = messages.filter(msg => msg.message.includes(prodID));
        const existsProd = productsShow.filter(
          prd => prd.id === Number(prodID),
        );
        console.log(exists.length);
        if (!isOdd(exists.length) && existsProd.length > 0) {
          console.log('exist');
          const prodsNew = productsShow.map(x => x);
          const remove = prodsNew.filter(prd => prd.id !== Number(prodID));
          setProductsShow(remove);
        } else if (isOdd(exists.length) && existsProd.length === 0) {
          console.log('no exist');
          const match = products.filter(prd => prd.id === Number(prodID));
          const prodsNew = productsShow.map(x => x);
          prodsNew.push(match[0]);
          setProductsShow(prodsNew);
        }
      }
    }
  };
  useEffect(() => {
    renderProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  // this function verify if product are showing at now
  const isShowing = (id: number) => {
    const showingProds = productsShow.filter(prd => prd.id === id);
    if (showingProds.length > 0) {
      return true;
    }
    return false;
  };

  // polling interval 10 second to reload getMessages
  setTimeout(() => {
    reload();
  }, 10000);

  // send product message
  const sendProduct = async (str: string) => {
    console.log('sent');
    // const resp = await sendMessage(str);
    await sendMessagePhenix({message: str, idStream: liveStreamId});
  };

  // console.log("make: " + JSON.stringify(productsShow));
  // console.log("messages in: " + JSON.stringify(messages));
  // console.log(isOdd(1));

  const scrollViewRef = useRef<ScrollView | null>(null);

  return (
    <View
    style={{
      maxWidth: Dimensions.get('window').width,
      display: 'flex',
      flexDirection:'row',
      marginLeft:-20,
      paddingLeft:-50,
      left: products.slice(0,onScrollView ? Infinity : 1).length === 1 ? Dimensions.get('window').width * 0.65 :
      products.slice(0,onScrollView ? Infinity : 1).length === 2 ? Dimensions.get('window').width * 0.35 :
      products.slice(0,onScrollView ? Infinity : 1).length === 3 ? Dimensions.get('window').width * 0.09:
      0,
    }}
    >
         <TouchableOpacity onPress={()=> setOnScrollView(!onScrollView)}
         style={{
          width:24,
          height: 140,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
         }}>
      
          <Svg viewBox="0 0 30 30" fill="#A0A0A0" width={30} height={30}>
            <Path fill-rule="evenodd" d="M15.28 5.22a.75.75 0 00-1.06 0l-6.25 6.25a.75.75 0 000 1.06l6.25 6.25a.75.75 0 101.06-1.06L9.56 12l5.72-5.72a.75.75 0 000-1.06z"></Path>
          </Svg>
        </TouchableOpacity>
    <ScrollView
     showsHorizontalScrollIndicator={false}
     horizontal
     ref={scrollViewRef}
     onContentSizeChange={(contentWidth, contentHeight) => {
       scrollViewRef?.current?.scrollToEnd({animated: true});
      }
    }
    style={{
      maxWidth: Dimensions.get('window').width * 0.95,
      // left: products.slice(0,onScrollView ? Infinity : 1).length === 1 ? Dimensions.get('window').width * 0.62 :
      // products.slice(0,onScrollView ? Infinity : 1).length === 2 ? Dimensions.get('window').width * 0.35 :
      // products.slice(0,onScrollView ? Infinity : 1).length === 3 ? Dimensions.get('window').width * 0.09:
      // 0,
      elevation:999,
      zIndex:999,
    }}>
   
        {products.slice(0,onScrollView ? Infinity : 1).map(prd => {
          return (
            <TouchableOpacity
            key={prd.id}
            style={{
              width: 90,
              height: 90,
              marginHorizontal:5,
              alignItems: 'flex-end',
              marginBottom: -10,
            }}
            onPress={() =>
              sendProduct('[ PRODUCT ' + prd.id.toString() + ' ]')
            }>
                  <View
              style={{
                width: 110,
                display: 'flex',
                flexDirection: 'row',
                marginBottom: 3,
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <View
                style={{
                  backgroundColor: 'black',
                  borderRadius: 8,
                  padding: 3,
                  opacity: 0.5,
                  marginRight: 4,
                }}>
                <Text
                  style={{
                    fontSize: 10,
                    color: 'white',
                  }}>
                  {prd.name}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'black',
                  borderRadius: 8,
                  padding: 3,
                  opacity: 0.5,
                }}>
                <Text
                  style={{
                    fontSize: 10,
                    color: 'white',
                  }}>{`$${prd.price}`}</Text>
              </View>
            </View>
               
                  <Image
              source={{uri: prd.image}}
              //   alt=""
              style={{
                width: 90,
                height: 90,
                borderRadius: 10,
                borderWidth: 2,
                borderColor:isShowing(prd.id) ? '#7844A1' : 'transparent',
              }}
              />
        
              </TouchableOpacity>
          );
        })}
      </ScrollView>
        </View>
  );
};

const styles = StyleSheet.create({
  productView: {
    cursor: 'pointer',
    height: 120,
  },
  itemsContainer: {
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  item: {
    width: 100,
    height: 125,
    border: '1px solid #fff',
  },
});

export default Make;
