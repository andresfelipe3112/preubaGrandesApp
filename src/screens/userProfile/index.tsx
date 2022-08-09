import React from 'react';
import {
  Container,
  Image,
  ImageGoBack,
  ContainerInfo,
  Name,
  Followers,
  Button,
  TextButton,
  ContainerSlidShop,
  Title,
} from './styles';
import ProfilePicture from '../../assets/ProfilePicture.png';
import GoBackWhite from '../../assets/GoBackWhite.png';

import Rectangle from '../../assets/Rectangle.png';
import LittleSlider from '../../assets/littleSlider.png';
import {Pressable} from 'react-native';
import SliderSteams from '../../components/SliderStreams';
import ShopSlider from '../../components/shopSlider';

export default function UserProfile({navigation}: {navigation: any}) {
  const data = [
    {
      name: 'DIOR',
      description: 'This is the full item name',
      img: Rectangle,
      price: '$129.99',
    },
    {
      name: 'DIOR',
      description: 'This is the full item name',
      img: Rectangle,
      price: '$129.99',
    },
    {
      name: 'DIOR',
      description: 'This is the full item name',
      img: Rectangle,
      price: '$129.99',
    },
    {
      name: 'DIOR',
      description: 'This is the full item name',
      img: Rectangle,
      price: '$129.99',
    },
  ];
  return (
    <Container>
      <Image source={ProfilePicture} />
      <Pressable onPress={() => navigation.goBack()}>
        <ImageGoBack source={GoBackWhite} />
      </Pressable>
      <ContainerInfo>
        <Name>ASHLEY BENSON</Name>
        <Followers>{`${'124K'} FOLLOWERS`}</Followers>
      </ContainerInfo>
      <Button>
        <TextButton>EDIT PROFILE</TextButton>
      </Button>

      <ContainerSlidShop>
        <SliderSteams
          listTitle={`${"ASHLEY'S"} STREAMS`}
          dark={true}
          title="Ashley Benson Talks Skincare"
          text="10 of the hottest brands share their latest collections."
          img={LittleSlider}
          name={'ASHLEY BENSON'}
          typeCard={'Slide'}
        />
        <Title>{`${"ASHLEY'S"} SHOP`}</Title>
        <ShopSlider data={data} />
      </ContainerSlidShop>
    </Container>
  );
}
