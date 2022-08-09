import React from 'react';
import {Image} from 'react-native';
import {
  ContainerInfo,
  ContainerFlexRow,
  DataText,
  TitleText,
  ButtonNext,
  TextNext,
  ContainerFlexRowNext,
  TimeContainer,
  Time,
  ContainerFlexRowInfo,
  ContainerData,
  Data1,
  Data2,
  Data3,
  Container,
  PendingStreamsTitle,
  ContainerTitle,
  CounterStreams,
} from './styles';

import PictureExample from '../../assets/PictureExample.png';
import PendingStreams from './PendingStreams';
export default function CardHome() {
  return (
    <Container>
      <ContainerFlexRow>
        <Image
          style={{width: 70, height: 70, alignSelf: 'center'}}
          source={PictureExample}
        />
        <ContainerInfo>
          <DataText>Welcome Back, Ashley!</DataText>
          <TitleText>You have 3 upconming streams</TitleText>
          <ContainerFlexRowNext>
            <ButtonNext>
              <TextNext>Open Next Stream</TextNext>
            </ButtonNext>
            <TimeContainer>
              <Time>00:12:59</Time>
            </TimeContainer>
          </ContainerFlexRowNext>
        </ContainerInfo>
      </ContainerFlexRow>
      <ContainerFlexRowInfo>
        <ContainerData>
          <Data1>Your Revenue</Data1>
          <Data2>$121,300usd</Data2>
          <Data3>241 Products sold</Data3>
        </ContainerData>
        <ContainerData>
          <Data1>Your Streams</Data1>
          <Data2>25</Data2>
          <Data3>369 viewers on avg.</Data3>
        </ContainerData>
      </ContainerFlexRowInfo>
      <ContainerTitle>
        <PendingStreamsTitle>PENDING STREAMS</PendingStreamsTitle>
        <CounterStreams>1 de 2</CounterStreams>
      </ContainerTitle>
      <PendingStreams />
    </Container>
  );
}
