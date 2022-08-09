import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import SliderSteams from '../../components/SliderStreams';

import LittleSlider from '../../assets/littleSlider.png';
import {useSelector} from 'react-redux';
import {RootState} from '../../Redux/store';
import CardHome from './CardHome';

export default function HomeCreator() {
  const user = useSelector((state: RootState) => state);
  console.log(`usuario home: ${JSON.stringify(user)}}`);

  return (
    <SafeAreaView style={{backgroundColor: 'black'}}>
      <ScrollView style={{backgroundColor: 'black'}}>
        <CardHome />
        <View>
          <SliderSteams
            listTitle="UPCOMING STREAMS"
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
}
