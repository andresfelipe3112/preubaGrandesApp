import React, {useState} from 'react';
import {Image, ScrollView, View} from 'react-native';
import PictureExample from '../../assets/PictureExample.png';
import Card from './Card';
import EditImg from '../../assets/editImg.png';
import {
  Container,
  ContainerUploadImage,
  Title,
  TitleText,
  InputSubtitle,
  ContainerTextArea,
  NameText,
  CreatorText,
  ContainerEditImage,
  EditText,
  ContainerEdit,
} from './styles.js';
export default function MyProfileCreator({navigation}: {navigation: any}) {
  const arrAcc = [
    {
      title: 'Created',
      data: 'Jun 3, 2022, 12:59:21 PM 24.16.74.31 (United States)',
    },
    {title: 'Name', data: 'Ashley Benson'},
    {title: 'Username', data: 'ashleybenson'},
    {title: 'Email', data: 'Ash@ashleybenson.com'},
    {title: 'Phone', data: '+1 (310) 555-1212 '},
  ];
  const arrLink = [
    {
      title: 'Website',
      data: 'https://ashleybenson.com',
    },
    {title: 'Instagram', data: 'ashleybenson'},
    {title: 'Twitter', data: 'AshBenzo'},
    {title: 'Snapchat', data: 'benzo33'},
  ];
  const [text, setText] = useState('');
  return (
    <ScrollView>
      <Container style={{borderTopColor: 'gray', borderTopWidth: 1}}>
        <ContainerUploadImage>
          <ContainerEdit>
            <Image source={EditImg} />
            <EditText>Edit</EditText>
          </ContainerEdit>
          <ContainerEditImage>
            <Image
              style={{width: 90, height: 90, alignSelf: 'center'}}
              source={PictureExample}
            />
          </ContainerEditImage>
          <NameText>Ashley Benson</NameText>
          <CreatorText>Top Creator</CreatorText>
        </ContainerUploadImage>
        <View style={{width: '90%', marginTop: 30}}>
          <Title>ACCOUNT INFO</Title>
          {arrAcc.map(e => {
            return <Card title={e.title} dataText={e.data} />;
          })}
        </View>
        <View style={{width: '90%', marginTop: 30}}>
          <ContainerTextArea>
            <Title>ABOUT ME</Title>
            <TitleText>{text.length}/156</TitleText>
          </ContainerTextArea>
          <InputSubtitle
            value={text}
            onChange={event => setText(event.nativeEvent.text)}
            maxLength={156}
            placeholder="About Me"
            placeholderTextColor="#343434"
            multiline={true}
            numberOfLines={4}
          />
        </View>
        <View style={{width: '90%', marginTop: 30}}>
          <Title>MY LINKS</Title>
          {arrLink.map(e => {
            return <Card title={e.title} dataText={e.data} />;
          })}
        </View>
      </Container>
    </ScrollView>
  );
}
