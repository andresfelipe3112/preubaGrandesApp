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
export default function ShopSlider({data}: Props) {
  return (
    <Container>
      {data.map(el => {
        return (
          <>
            <CardContainer>
              <Image source={el.img} />
              <CardContainerInfo>
                <Name>{el.name}</Name>
                <Description>{el.description}</Description>
                <Price>{el.price}</Price>
              </CardContainerInfo>
            </CardContainer>
            <Line />
          </>
        );
      })}
    </Container>
  );
}
