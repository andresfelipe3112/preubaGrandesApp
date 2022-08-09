import React, {useState} from 'react';
import MasonryList from '@react-native-seoul/masonry-list';
import SelectDropdown from 'react-native-select-dropdown';
import {
  ContainerCard,
  ContainerScrollView,
  Brand,
  Price,
  Name,
  Button,
  TittleButton,
  HeaderContainer,
  ContainerCardInfo,
  HeaderContainerRight,
} from './styles';
import {Image} from 'react-native';
import Rectangle1 from '../../assets/Rectangle1.png';
import Rectangle2 from '../../assets/Rectangle2.png';
import Rectangle3 from '../../assets/Rectangle3.png';
import Rectangle4 from '../../assets/Rectangle4.png';
import Rectangle5 from '../../assets/Rectangle5.png';
import ChevronDown from '../../assets/ChevronDown.png';

import FilterImg from '../../assets/Filter.png';
const CardItem = ({item}) => {
  const [open, setOpen] = useState(false);
  return (
    <ContainerCard onPress={() => setOpen(!open)}>
      <Image source={item.img} />
      {open && (
        <ContainerCardInfo>
          <Brand>{item.brand}</Brand>
          <Name>{item.name}</Name>
          <Price>{item.price}</Price>
          <Button>
            <TittleButton>ADD TO STREAM</TittleButton>
          </Button>
        </ContainerCardInfo>
      )}
    </ContainerCard>
  );
};

export default function BrowseProducts({navigation}: {navigation: any}) {
  const data = [
    {
      name: 'DIOR AND SACAI OVERSHIRT',
      brand: 'DIOR',
      price: '$139.99',
      img: Rectangle1,
    },

    {
      name: 'DIOR AND SACAI OVERSHIRT',
      brand: 'DIOR',
      price: '$139.99',
      img: Rectangle2,
    },

    {
      name: 'DIOR AND SACAI OVERSHIRT',
      brand: 'DIOR',
      price: '$139.99',
      img: Rectangle3,
    },

    {
      name: 'DIOR AND SACAI OVERSHIRT',
      brand: 'DIOR',
      price: '$139.99',
      img: Rectangle4,
    },
    {
      name: 'DIOR AND SACAI OVERSHIRT',
      brand: 'DIOR',
      price: '$139.99',
      img: Rectangle5,
    },
    {
      name: 'DIOR AND SACAI OVERSHIRT',
      brand: 'DIOR',
      price: '$139.99',
      img: Rectangle1,
    },

    {
      name: 'DIOR AND SACAI OVERSHIRT',
      brand: 'DIOR',
      price: '$139.99',
      img: Rectangle2,
    },

    {
      name: 'DIOR AND SACAI OVERSHIRT',
      brand: 'DIOR',
      price: '$139.99',
      img: Rectangle3,
    },

    {
      name: 'DIOR AND SACAI OVERSHIRT',
      brand: 'DIOR',
      price: '$139.99',
      img: Rectangle4,
    },
    {
      name: 'DIOR AND SACAI OVERSHIRT',
      brand: 'DIOR',
      price: '$139.99',
      img: Rectangle5,
    },
    {
      name: 'DIOR AND SACAI OVERSHIRT',
      brand: 'DIOR',
      price: '$139.99',
      img: Rectangle1,
    },

    {
      name: 'DIOR AND SACAI OVERSHIRT',
      brand: 'DIOR',
      price: '$139.99',
      img: Rectangle2,
    },

    {
      name: 'DIOR AND SACAI OVERSHIRT',
      brand: 'DIOR',
      price: '$139.99',
      img: Rectangle3,
    },

    {
      name: 'DIOR AND SACAI OVERSHIRT',
      brand: 'DIOR',
      price: '$139.99',
      img: Rectangle4,
    },
    {
      name: 'DIOR AND SACAI OVERSHIRT',
      brand: 'DIOR',
      price: '$139.99',
      img: Rectangle5,
    },
    {
      name: 'DIOR AND SACAI OVERSHIRT',
      brand: 'DIOR',
      price: '$139.99',
      img: Rectangle1,
    },

    {
      name: 'DIOR AND SACAI OVERSHIRT',
      brand: 'DIOR',
      price: '$139.99',
      img: Rectangle2,
    },

    {
      name: 'DIOR AND SACAI OVERSHIRT',
      brand: 'DIOR',
      price: '$139.99',
      img: Rectangle3,
    },

    {
      name: 'DIOR AND SACAI OVERSHIRT',
      brand: 'DIOR',
      price: '$139.99',
      img: Rectangle4,
    },
    {
      name: 'DIOR AND SACAI OVERSHIRT',
      brand: 'DIOR',
      price: '$139.99',
      img: Rectangle5,
    },
  ];
  return (
    <>
      <HeaderContainer
        style={{borderBottomColor: '#E5E5E5', borderBottomWidth: 1}}>
        <SelectDropdown
          data={['NEWEST', 'OLDEST']}
          buttonStyle={{
            width: 98,
            backgroundColor: 'white',
          }}
          buttonTextStyle={{fontSize: 13, fontWeight: 'bold'}}
          onSelect={(selectedItem, index) => console.log(selectedItem, index)}
          dropdownIconPosition={'right'}
          defaultValue={'NEWEST'}
          renderDropdownIcon={() => {
            return <Image source={ChevronDown} />;
          }}
          buttonTextAfterSelection={selectedItem => selectedItem}
          rowTextForSelection={item => item}
        />
        <HeaderContainerRight>
          <HeaderContainerRight
            style={{
              borderRightColor: '#E5E5E5',
              borderRightWidth: 1,
              marginRight: 10,
            }}>
            <Image
              style={{
                marginRight: 5,
              }}
              source={FilterImg}
            />
            <Image
              style={{
                marginRight: 10,
              }}
              source={ChevronDown}
            />
          </HeaderContainerRight>
          <Name style={{fontSize: 13, fontWeight: 'bold'}}>FILTER</Name>
        </HeaderContainerRight>
      </HeaderContainer>
      <ContainerScrollView>
        <MasonryList
          data={data}
          keyExtractor={(item, index): string => index.toString()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <CardItem item={item} />}
          onEndReachedThreshold={0.1}
        />
      </ContainerScrollView>
    </>
  );
}
