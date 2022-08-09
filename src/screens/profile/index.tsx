import React from 'react';
import {Image, Text} from 'react-native';
import Chevron from '../../assets/ChevronRight.png';
import Card from './Card';
import {Line, Container, AcordeonSection} from './styles';
export default function MyProfile({navigation}) {
  const Options = [
    {name: 'My Orders', onPress: () => navigation.navigate('OrderHistory')},
    {name: 'My Favorites', onPress: () => navigation.navigate('Home')},
    {
      name: 'Shipping Addresses',
      onPress: () => navigation.navigate('MyAddresses'),
    },
    {name: 'My Payment Methods', onPress: () => navigation.navigate('Home')},
    {name: 'Gift Cards & Vouchers', onPress: () => navigation.navigate('Home')},
    {name: 'Logout', onPress: () => navigation.navigate('Home')},
  ];
  return (
    <Container>
      <Card navigation={navigation} />
      {Options.map(ele => {
        return (
          <>
            <AcordeonSection onPress={ele.onPress}>
              <Text style={{color: 'black', fontSize: 18, fontWeight: '500'}}>
                {ele.name}
              </Text>
              <Image style={{width: 10, height: 16}} source={Chevron} />
            </AcordeonSection>
            <Line />
          </>
        );
      })}
    </Container>
  );
}
