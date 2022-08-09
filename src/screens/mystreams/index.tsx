import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  View,
  TextInput,
} from 'react-native';
import SliderSteams from '../../components/SliderStreams';
import {
  Container,
  ContainerCard,
  ContainerInfoCard,
  LiveSoon,
  Name,
  SubTitle,
  Button,
  Line,
  ContainerBrowseSchedule,
  Title,
  ContainerImage,
  styles,
} from './styles';

import LittleSlider from '../../assets/littleSlider.png';
import StreamerIcon from '../../assets/StreamerIcon.png';
import ShoppingBag from '../../assets/ShoppingBag.png';
import {RootState} from '../../Redux/store';
import {useSelector} from 'react-redux';
export default function MyStreams({navigation}: {navigation: any}) {
  const user = useSelector((state: RootState) => state);
  console.log(`usuario streams: ${JSON.stringify(user)}}`);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [infoStream, setInfoStream] = useState({
    name: '',
    desc: '',
    img: '',
  });
  const handleChange = (key: string, value: string) => {
    setInfoStream({
      ...infoStream,
      [key]: value,
    });
  };

  const LinkToStream = () => {
    navigation.navigate('CreateStreams', {state: infoStream});
    setModalVisible(false);
    setInfoStream({
      name: '',
      desc: '',
      img: '',
    });
  };
  return (
    <ScrollView>
      <Container>
        <ContainerCard>
          <Image source={LittleSlider} />
          <ContainerInfoCard>
            <LiveSoon>LIVE SOON</LiveSoon>
            <Name>Saturday Swim Session</Name>
            <SubTitle>
              10 of the hottest brands share their latest collections.
            </SubTitle>
            <Button>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>START</Text>
              </TouchableOpacity>
            </Button>
          </ContainerInfoCard>
        </ContainerCard>
        <Line />
        <ContainerBrowseSchedule>
          <ContainerBrowseSchedule
            onPress={() => navigation.navigate('Schedule')}>
            <ContainerImage>
              <Image source={StreamerIcon} />
            </ContainerImage>
            <Title>SCHEDULE STREAM</Title>
          </ContainerBrowseSchedule>
          <ContainerBrowseSchedule
            onPress={() => navigation.navigate('BrowseProducts')}>
            <ContainerImage>
              <Image source={ShoppingBag} />
            </ContainerImage>
            <Title>BROWSE PRODUCTS</Title>
          </ContainerBrowseSchedule>
        </ContainerBrowseSchedule>
        <Line />
        <SliderSteams
          listTitle="UPCOMING"
          title="Ashley Benson Talks Skincare"
          text="10 of the hottest brands share their latest collections."
          img={LittleSlider}
          name={'ASHLEY BENSON'}
          typeCard={'Slide'}
          dark={true}
        />
        <SliderSteams
          listTitle="PREVIOUSLY RECORDED"
          title="Ashley Benson Talks Skincare"
          text="10 of the hottest brands share their latest collections."
          img={LittleSlider}
          name={'ASHLEY BENSON'}
          typeCard={'Slide'}
          dark={true}
        />
      </Container>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>CREATE A STREAM</Text>
            <Text>Name</Text>
            <TextInput
              onChangeText={text => handleChange('name', text)}
              value={infoStream.name}
              style={{
                borderWidth: 1,
                borderColor: 'black',
                marginBottom: 10,
                backgroundColor: 'white',
                width: 250,
                height: 50,
                borderRadius: 15,
              }}
            />
            <Text>Description</Text>
            <TextInput
              onChangeText={text => handleChange('desc', text)}
              value={infoStream.desc}
              style={{
                borderWidth: 1,
                borderColor: 'black',
                marginBottom: 10,
                backgroundColor: 'white',
                width: 250,
                height: 50,
                borderRadius: 15,
              }}
            />
            <View style={{flexDirection: 'row'}}>
              <Button style={{marginRight: 10}}>
                <TouchableOpacity onPress={() => LinkToStream()}>
                  <Text style={{color: '#fff', fontWeight: 'bold'}}>
                    Create
                  </Text>
                </TouchableOpacity>
              </Button>
              <Button>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Text style={{color: '#fff', fontWeight: 'bold'}}>
                    Cancel
                  </Text>
                </TouchableOpacity>
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}
