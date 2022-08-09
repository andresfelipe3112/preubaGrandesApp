import React from 'react';
import SliderSteams from '../../components/SliderStreams';
import SliderCreators from '../../components/SliderCreators';
import ShopSliderV2 from '../../components/shopSliderV2';
import LittleSlider from '../../assets/littleSlider.png';
import {ScrollView} from 'react-native';
import {Container, Line, TitleSection, ContainerText} from './styles';

import Rectangle from '../../assets/Rectangle.png';
export default function MyFavorites() {
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
    <ScrollView>
      <Container>
        <ContainerText>
          <TitleSection>FAVORITE CREATORS</TitleSection>
          <TitleSection>VIEW</TitleSection>
        </ContainerText>
        <Line />
        <SliderCreators />

        <TitleSection>FAVORITE STREAMS</TitleSection>

        <Line />
        <SliderSteams
          listTitle=""
          title="Ashley Benson Talks Skincare"
          text=""
          img={LittleSlider}
          name={'ASHLEY BENSON'}
          typeCard={'Slide'}
          dark={true}
        />
        <ContainerText>
          <TitleSection>FAVORITE ITEMS</TitleSection>
          <TitleSection>FILTER</TitleSection>
        </ContainerText>
        <Line />
        <ShopSliderV2 data={data} />
      </Container>
    </ScrollView>
  );
}
