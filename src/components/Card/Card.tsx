import React from 'react';
import {Image, ImageSourcePropType} from 'react-native';
import Live from '../../assets/Live.png';
import {
  ContainerCard,
  ContainerText,
  NameText,
  TitleText,
  Text,
  NotifyText,
  ImageLive,
} from './styles';

interface Props {
  title: string;
  text: string;
  img: ImageSourcePropType;
  name: string;
  isLive?: boolean;
  dark?: boolean;
}

export default function Card({title, text, img, isLive, name, dark}: Props) {
  return (
    <ContainerCard>
      <Image source={img} style={{borderRadius: 2}} />
      <NotifyText>Notify Me</NotifyText>
      {isLive ? <ImageLive source={Live} /> : null}
      <ContainerText isLive={isLive}>
        <NameText>{name}</NameText>
        <TitleText dark={dark}>{title}</TitleText>
        <Text dark={dark}>{text}</Text>
      </ContainerText>
    </ContainerCard>
  );
}
