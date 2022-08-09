import React from 'react';
import {
  ContainerButtons,
  ContainerPending,
  Description,
  TitlePending,
  ContainerProgressBar,
  Porcentaje,
  ButtonPending,
  ContainerImg,
  ContainerText,
  TitleButton,
  DescriptionButton,
} from './styles';
import * as Progress from 'react-native-progress';
import EditImg from '../../assets/editImg.png';
import Plus from '../../assets/Plus.png';
import {Image, Text} from 'react-native';
export default function PendingStreams() {
  return (
    <ContainerPending>
      <Text
        style={{
          position: 'relative',
          top: 5,
          right: '-92%',
          color: 'white',
          fontSize: 12,
        }}>
        Draft
      </Text>
      <TitlePending>Saturday Swim Session</TitlePending>
      <Description>
        10 of the hottest brands share their latest collections
      </Description>

      <ContainerProgressBar>
        <Progress.Bar
          color="white"
          unfilledColor="rgba(255, 255, 255, 0.42);"
          progress={0.75}
          width={250}
        />
        <Porcentaje>75%</Porcentaje>
      </ContainerProgressBar>
      <ContainerButtons>
        <ButtonPending>
          <Image source={Plus} />
          <ContainerText>
            <TitleButton>Add Products</TitleButton>
            <DescriptionButton>5 Items</DescriptionButton>
          </ContainerText>
        </ButtonPending>
        <ButtonPending>
          <ContainerImg>
            <Image source={EditImg} />
          </ContainerImg>
          <ContainerText>
            <TitleButton>Edit Stream</TitleButton>
            <DescriptionButton>$550/potential</DescriptionButton>
          </ContainerText>
        </ButtonPending>
      </ContainerButtons>
    </ContainerPending>
  );
}
