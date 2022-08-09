import React from 'react';
import {Image, Text} from 'react-native';
import Verify from '../../assets/Verify.png';
import EditImg from '../../assets/Edit.png';
import ImgProfile from '../../assets/ImageProfile.png';
import {
  ContainerCard,
  ContainerCardImgData,
  ContainerCardData,
  ContainerVerifyEdit,
  ContainerVerify,
  EditButton,
  Name,
} from './styles';
export default function Card({navigation}) {
  return (
    <ContainerCard>
      <ContainerCardImgData>
        <Image source={ImgProfile} />
        <ContainerCardData>
          <Name>Julia Brickner</Name>
          <Text style={{fontSize: 12, color: '#353636'}}>
            julia.brickner76@gmail.com
          </Text>
        </ContainerCardData>
      </ContainerCardImgData>
      <ContainerVerifyEdit>
        <ContainerVerify>
          <Image source={Verify} />
          <Text style={{fontSize: 13, color: 'black'}}>Verified</Text>
        </ContainerVerify>
        <EditButton onPress={() => navigation.navigate('EditProfile')}>
          <Image source={EditImg} />
          <Text style={{color: 'white', fontSize: 11, fontWeight: '500'}}>
            EDIT
          </Text>
        </EditButton>
      </ContainerVerifyEdit>
    </ContainerCard>
  );
}
