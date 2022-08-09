import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Slider from '../../components/slider';
import SliderSteams from '../../components/SliderStreams';

import LittleSlider from '../../assets/littleSlider.png';
import {useSelector} from 'react-redux';
import {RootState} from '../../Redux/store';
import {LiveStream} from '../../Interfaces';
import {Api} from '../../axios';
import {HomeProps} from '../../Props/screensProps';
import {Button} from '../mystreams/styles';

export const Home: React.FC<HomeProps> = ({navigation}) => {
  const user = useSelector((state: RootState) => state);
  console.log(`usuario home: ${JSON.stringify(user)}}`);
  const [streams, setStreams] = useState<LiveStream[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getStreams = async () => {
    setLoading(true);
    const resp = await Api({endpoint: '/livestreams', tokenUse: true});
    console.log('RESP ' + JSON.stringify(resp));
    if (resp.status === 200) {
      setLoading(false);
      setStreams(resp.data.data);
    } else {
      setLoading(false);
      console.log('Error to get Streams');
    }
  };

  useEffect(() => {
    getStreams();
  }, []);

  console.log('SSSS: ' + JSON.stringify(streams));
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'black',
        flex: 1,
      }}>
      <ScrollView>
        <Slider />
        <Button style={{maxWidth: 250, top: -60}}>
          <TouchableOpacity onPress={() => getStreams()}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={{color: '#fff', textAlign: 'center'}}>
                Reload Streams
              </Text>
            )}
          </TouchableOpacity>
        </Button>

        <View>
          <SliderSteams
            listTitle="Now Playing Streams"
            option={true}
            title="Ashley Benson Talks Skincare"
            text="10 of the hottest brands share their latest collections."
            img={LittleSlider}
            name={'ASHLEY BENSON'}
            typeCard={'Slide'}
            data={streams.filter(strs => strs.state === 'playing')}
            navigate={navigation.navigate}
          />
          <SliderSteams
            listTitle="All Streams"
            option={true}
            title="Ashley Benson Talks Skincare"
            text="10 of the hottest brands share their latest collections."
            img={LittleSlider}
            name={'ASHLEY BENSON'}
            typeCard={'Slide'}
            data={streams}
            navigate={navigation.navigate}
          />
          <SliderSteams
            listTitle="FEATURED CREATORS"
            option={true}
            name={'SHAY MITCHELL'}
            typeCard={'Mosaico'}
            title={''}
            text={''}
            img={0}
          />
          <SliderSteams
            listTitle="FEATURED STREAMS"
            option={true}
            title="Ashley Benson Talks Skincare"
            text="10 of the hottest brands share their latest collections."
            img={LittleSlider}
            name={'ASHLEY BENSON'}
            typeCard={'Slide'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
