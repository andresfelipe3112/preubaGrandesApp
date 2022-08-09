import React, {useState} from 'react';

import {Image, Text, View} from 'react-native';
import {
  Container,
  Line,
  Price,
  Title,
  Descripition,
  CardContainer,
  InfoCardContainer,
  InfoTopCardContainer,
  InfoTopNameDescriptionCardContainer,
  InfoBottomCardContainer,
  PressableCard,
  ButtonCardContainer,
  PressableCardText,
  UseCode,
  ContainerFooter,
  Input,
  SectionContainer,
  ContainerFooter2,
  ContinueCheckout,
} from './styles';

import CartImg from '../../assets/CartImg.png';
export default function Cart() {
  const [cant, setCant] = useState(1);
  const data = [
    {
      name: 'Dior Book Tote',
      description: 'Variation : Brown / Gold',
      img: CartImg,
      price: '$129.99',
    },
    {
      name: 'Dior Book Tote',
      description: 'Variation : Brown / Gold',
      img: CartImg,
      price: '$129.99',
    },
  ];
  return (
    <Container>
      <View>
        {data.map(e => {
          return (
            <CardContainer>
              <Image source={e.img} />
              <InfoCardContainer>
                <InfoTopCardContainer>
                  <InfoTopNameDescriptionCardContainer>
                    <Title>{e.name}</Title>
                    <Descripition style={{marginTop: 10}}>
                      {e.description}
                    </Descripition>
                  </InfoTopNameDescriptionCardContainer>
                  <Text style={{color: '#7844A1', fontWeight: 'bold'}}>✕</Text>
                </InfoTopCardContainer>
                <InfoBottomCardContainer>
                  <ButtonCardContainer>
                    <PressableCard disabledColor={cant === 1 ? true : false}>
                      <PressableCardText>-</PressableCardText>
                    </PressableCard>
                    <Text style={{color: 'black', fontWeight: 'bold'}}>
                      {cant}
                    </Text>
                    <PressableCard
                      disabledColor={false}
                      onPress={() => setCant(cant + 1)}>
                      <PressableCardText>+</PressableCardText>
                    </PressableCard>
                  </ButtonCardContainer>
                  <Price>{e.price}</Price>
                </InfoBottomCardContainer>
              </InfoCardContainer>
            </CardContainer>
          );
        })}
      </View>
      <View>
        <ContainerFooter>
          <Input placeholder="Enter promo code" />
          <UseCode>
            <Text style={{color: 'white'}}>Use code</Text>
          </UseCode>
        </ContainerFooter>
        <ContainerFooter2>
          <SectionContainer>
            <Text>Subtotal {'(2 item)'}</Text>
            <Price>$3,350.00</Price>
          </SectionContainer>
          <SectionContainer>
            <Text>Delivery</Text>
            <Price>$23.00</Price>
          </SectionContainer>
          <Line />
          <SectionContainer style={{marginTop: 0}}>
            <Text>Total</Text>
            <Price>$3,373.00</Price>
          </SectionContainer>
          <ContinueCheckout>
            <Text style={{color: 'white'}}>CONTINUE CHECKOUT</Text>
          </ContinueCheckout>
        </ContainerFooter2>
      </View>
    </Container>
  );
}
