import React, {useState} from 'react';
import {
  ButtonConfirm,
  TittleButton,
  ContainerConfirm,
  Name,
  Title,
  Text,
  UploadPhoto,
  UploadPhotoText,
  ContainerData,
  ContainerInfo,
  ContainerInfo2,
  ContainerInput,
  InputTitle,
  InputSubtitle,
  TitleInput,
} from './styles';
export default function Confirm({navigation}: {navigation: any}) {
  const [isInfo, setIsInfo] = useState(false);
  return (
    <ContainerConfirm>
      <ContainerInfo>
        <UploadPhoto>
          <UploadPhotoText>UPLOAD COVER PHOTO</UploadPhotoText>
        </UploadPhoto>
        <ContainerData>
          <Name>ASHLEY BENSON</Name>
          <Title>Your title will go here</Title>
          <Text>
            Your description will be in this cell, up to 4 lines long.
          </Text>
        </ContainerData>
      </ContainerInfo>
      {isInfo && (
        <ContainerInput>
          <TitleInput>STREAM INFO</TitleInput>
          <InputTitle placeholder="Title" placeholderTextColor="#343434" />
          <InputSubtitle
            placeholder="Subtitle"
            placeholderTextColor="#343434"
            multiline={true}
            numberOfLines={4}
          />
        </ContainerInput>
      )}
      <ContainerInfo2 isInfo={isInfo}>
        <ButtonConfirm
          onPress={() =>
            isInfo ? navigation.navigate('Home') : setIsInfo(!isInfo)
          }>
          <TittleButton>NEXT</TittleButton>
        </ButtonConfirm>
        <UploadPhotoText>SAVE DRAFT</UploadPhotoText>
      </ContainerInfo2>
    </ContainerConfirm>
  );
}
