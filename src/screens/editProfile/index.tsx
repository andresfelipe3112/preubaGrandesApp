import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import PictureExample from '../../assets/PictureExample.png';
import UploadImage from '../../assets/UploadImage.png';
import {
  Container,
  UploadContainer,
  ContainerUploadImage,
  ContainerInputs,
  Title,
  AddAdress,
  ContainerTitle,
  AddressContainer,
  AddressText,
  Name,
  Line,
  CheckBox,
  Checked,
} from './styles.js';
import Input from '../../components/Input';
export default function MyProfile({navigation}: {navigation: any}) {
  const [isChecked, setIsChecked] = React.useState(false);
  const Address = [
    {
      name: 'Julia Brickert',
      address: '3012 Broaddus Avenue Saint Joseph, California 4908',
      isChecked: true,
    },
    {
      name: 'Niko Sgro',
      address: '1195 Sherman Street Lenora, California 6764',
      isChecked: false,
    },
  ];
  return (
    <Container>
      <ContainerUploadImage>
        <Image source={PictureExample} />
        <UploadContainer>
          <Image source={UploadImage} />
        </UploadContainer>
      </ContainerUploadImage>
      <View style={{width: '90%'}}>
        <Title>User Information</Title>
        <View>
          <ContainerInputs>
            <Input doble={true} label="First Name" />
            <Input doble={true} label="Last Name" />
          </ContainerInputs>
          <ContainerInputs>
            <Input label="Email Address" />
          </ContainerInputs>
          <ContainerInputs>
            <Input doble={true} label="Gender" />
            <Input doble={true} label="Phone" />
          </ContainerInputs>
        </View>
      </View>
      <View style={{width: '90%', marginTop: 40}}>
        <ContainerTitle>
          <Title>Primary Billing Address</Title>
          <AddAdress>+ ADD Address</AddAdress>
        </ContainerTitle>
        {Address.map(elm => {
          return (
            <ScrollView>
              <AddressContainer>
                <View style={{width: '75%'}}>
                  <Name>{elm.name}</Name>
                  <AddressText>{elm.address}</AddressText>
                </View>
                <CheckBox
                  onPress={() => {
                    setIsChecked(!isChecked);
                  }}>
                  {elm.isChecked ? <Checked /> : null}
                </CheckBox>
              </AddressContainer>
              <Line />
            </ScrollView>
          );
        })}
      </View>
    </Container>
  );
}
