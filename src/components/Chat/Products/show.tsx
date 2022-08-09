import React, {ReactElement, useEffect, useRef} from 'react';
import {
  Image,
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ScrollViewProps,
  ScrollViewComponent,
} from 'react-native';
import {Message} from '../chat';

type ShowProps = {
  messages: Array<Message>;
  reload: () => void;
  setProductsShow: (a: any) => void;
  productsShow: Array<Product>;
};
// example products
export const products = [
  {
    id: 12345,
    name: 'product1',
    price: 2000,
    image:
      'https://aynotdead.com/wp-content/uploads/2021/03/CARTERA-2000-MED-CMAEL-900x1350.jpg',
  },
  {
    id: 23456,
    name: 'product2',
    price: 1000,
    image:
      'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw5d2cf9e4/products/NI_DC3728-003/NI_DC3728-003-1.JPG',
  },
  {
    id: 34567,
    name: 'product3',
    price: 800,
    image:
      'https://imagenes.elpais.com/resizer/h0RoIhP7QULx-yqRCnGBw4fBTX0=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/TRUHE2LEEFWVYE7ZRADNMW56NQ.jpg',
  },
  {
    id: 45678,
    name: 'product4',
    price: 100,
    image:
      'https://imagenes.elpais.com/resizer/V6A9JqEiBH1iZ1_pxF5u2vAUb6c=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/T6CWFTOVRVDN5LJBRDQVB6LI3Y.jpg',
  },
];
//example product interface
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const Show: React.FC<ShowProps> = ({
  messages,
  setProductsShow,
  productsShow,
  reload,
}) => {
  function isOdd(num: number) {
    return !!(num % 2);
  }
  const scrollViewRef = useRef<ScrollView | null>(null);

  // render products iterate products messages searching by id and comparing with products show
  // if the creator send two times the same products this product has been disabled and hidden of front
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
          console.log('exists');
          const prodsNew = productsShow.map(x => x);
          const remove = prodsNew.filter(prd => prd.id !== Number(prodID));
          console.log(remove);
          setProductsShow(remove);
        } else if (isOdd(exists.length) && existsProd.length === 0) {
          console.log('no exists');
          const match = products.filter(prd => prd.id === Number(prodID));
          const prodsNew = productsShow.map(x => x);
          prodsNew.push(match[0]);
          console.log(prodsNew);
          setProductsShow(prodsNew);
        }
      }
    }
  };

  useEffect(() => {
    renderProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  // polling of reload 10 seconds
  setTimeout(() => {
    reload();
  }, 10000);

  // console.log("show: " + JSON.stringify(productsShow));
  // console.log("messages in: " + JSON.stringify(messages));
  return (
    <ScrollView
      scrollEnabled={true}
      showsVerticalScrollIndicator={false}
      ref={scrollViewRef}
      onContentSizeChange={(contentWidth, contentHeight) => {
        scrollViewRef?.current?.scrollToEnd({animated: true});
      }}
      style={{
        maxHeight: Dimensions.get('window').height * 0.57,
        flexDirection: 'column',
        position: 'absolute',
        right: 0,
        bottom: 100,
      }}>
      {productsShow.map(prd => {
        return (
          <TouchableOpacity
            key={prd.id}
            style={{
              width: 110,
              height: 150,
              alignItems: 'flex-end',
              marginBottom: -10,
            }}>
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
                   {/* backgroundColor: isShowing(prd.id) ? 'red' : 'blue', */}
              </View>
            </View>
            <Image
              source={{uri: prd.image}}
              //   alt=""
              style={{
                width: 100,
                height: 100,
                borderRadius: 10,
              }}
            />
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Show;
