import React from 'react';
import {Image, ImageSourcePropType} from 'react-native';
import {
  Container,
  CardContainer,
  CardContainerInfo,
  Name,
  Description,
  Price,
  Line,
  PriceContainer,
  PressablePurple,
  PressableBlack,
  PressableText,
  TextPrice,
} from './styles';
interface Data {
  name: string;
  description: string;
  img: ImageSourcePropType;
  price: string;
}

interface Props {
  data: Data[];
}
export default function ShopSliderV2({data}: Props) {
  return (
    <Container>
      {data.map(el => {
        return (
          <>
            <CardContainer>
              <Image source={el.img} />
              <CardContainerInfo>
                <Name>Brand</Name>
                <Description>Product Title</Description>
                <PriceContainer>
                  <PriceContainer>
                    <TextPrice>SALE</TextPrice>
                    <Price> {el.price}</Price>
                  </PriceContainer>
                  <PriceContainer>
                    <TextPrice>ORIG.</TextPrice>
                    <Price style={{color: '#989898'}}> {el.price}</Price>
                  </PriceContainer>
                </PriceContainer>
                <PriceContainer>
                  <PressableBlack>
                    <PressableText>BUY NOW</PressableText>
                  </PressableBlack>
                  <PressablePurple>
                    <PressableText>ADD TO CART</PressableText>
                  </PressablePurple>
                </PriceContainer>
              </CardContainerInfo>
            </CardContainer>
            <Line />
          </>
        );
      })}
    </Container>
  );
}
