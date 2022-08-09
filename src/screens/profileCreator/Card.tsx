import React from 'react';
import {View} from 'react-native';
import {ContainerData, DataText, TitleText} from './styles';

export default function Card({
  title,
  dataText,
}: {
  title: string;
  dataText: string;
}) {
  return (
    <ContainerData
      style={{
        width: '100%',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
      }}>
      <View style={{width: '30%'}}>
        <TitleText>{title}</TitleText>
      </View>
      <View style={{width: '60%'}}>
        <DataText>{dataText}</DataText>
      </View>
    </ContainerData>
  );
}
