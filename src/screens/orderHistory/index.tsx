import React, {useState} from 'react';
import {Image, ScrollView} from 'react-native';
import {
  Container,
  CardContainer,
  InfoCardContainer,
  Name,
  Address,
  Price,
  PriceButtonsCardContainer,
  ButtonsCardContainer,
  Line,
} from './styles';
import ExplampleImg from '../../assets/ExplampleImg.png';
import EditIcon from '../../assets/EditIcon.png';
import Share from '../../assets/Share.png';

export default function OrderHistory() {
  let arr = [
    {
      name: 'Benington Fine Dining Gown',
      address: '3012 Broaddus Avenue Saint Joseph, California 4908',
      price: '$349.79',
      img: ExplampleImg,
    },
    {
      name: 'Benington Fine Dining Gown',
      address: '3012 Broaddus Avenue Saint Joseph, California 4908',
      price: '$349.79',
      img: ExplampleImg,
    },
    {
      name: 'Benington Fine Dining Gown',
      address: '3012 Broaddus Avenue Saint Joseph, California 4908',
      price: '$349.79',
      img: ExplampleImg,
    },
    {
      name: 'Benington Fine Dining Gown',
      address: '3012 Broaddus Avenue Saint Joseph, California 4908',
      price: '$349.79',
      img: ExplampleImg,
    },
    {
      name: 'Benington Fine Dining Gown',
      address: '3012 Broaddus Avenue Saint Joseph, California 4908',
      price: '$349.79',
      img: ExplampleImg,
    },
    {
      name: 'Benington Fine Dining Gown',
      address: '3012 Broaddus Avenue Saint Joseph, California 4908',
      price: '$349.79',
      img: ExplampleImg,
    },
    {
      name: 'Benington Fine Dining Gown',
      address: '3012 Broaddus Avenue Saint Joseph, California 4908',
      price: '$349.79',
      img: ExplampleImg,
    },

    {
      name: 'Benington Fine Dining Gown',
      address: '3012 Broaddus Avenue Saint Joseph, California 4908',
      price: '$349.79',
      img: ExplampleImg,
    },
    {
      name: 'Benington Fine Dining Gown',
      address: '3012 Broaddus Avenue Saint Joseph, California 4908',
      price: '$349.79',
      img: ExplampleImg,
    },
    {
      name: 'Benington Fine Dining Gown',
      address: '3012 Broaddus Avenue Saint Joseph, California 4908',
      price: '$349.79',
      img: ExplampleImg,
    },
    {
      name: 'Benington Fine Dining Gown',
      address: '3012 Broaddus Avenue Saint Joseph, California 4908',
      price: '$349.79',
      img: ExplampleImg,
    },
    {
      name: 'Benington Fine Dining Gown',
      address: '3012 Broaddus Avenue Saint Joseph, California 4908',
      price: '$349.79',
      img: ExplampleImg,
    },
    {
      name: 'Benington Fine Dining Gown',
      address: '3012 Broaddus Avenue Saint Joseph, California 4908',
      price: '$349.79',
      img: ExplampleImg,
    },
  ];
  const [data, setData] = useState(arr);
  return (
    <ScrollView>
      <Container>
        {data.map(e => {
          return (
            <>
              <CardContainer>
                <Image source={e.img} />
                <InfoCardContainer>
                  <Name>{e.name}</Name>
                  <Address>{e.address}</Address>
                  <PriceButtonsCardContainer>
                    <Price>{e.price}</Price>
                    <ButtonsCardContainer>
                      <Image source={EditIcon} />
                      <Image source={Share} />
                    </ButtonsCardContainer>
                  </PriceButtonsCardContainer>
                </InfoCardContainer>
              </CardContainer>

              <Line />
            </>
          );
        })}
      </Container>
    </ScrollView>
  );
}
