import React from 'react';
import {Image, View} from 'react-native';
import {NameText} from './styles';
import ImgMosaico from '../../assets/MosaicoImg.png';
interface Props {
  name: string;
  isLive?: boolean;
}

export default function CardMosaico({name}: Props) {
  return (
    <View>
      <Image source={ImgMosaico} />
      <NameText>{name}</NameText>
    </View>
  );
}
