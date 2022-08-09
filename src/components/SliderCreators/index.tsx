import React from 'react';
import {ScrollView, View, Image} from 'react-native';
import CreatorProfileImage from '../../assets/CreatorProfileImage.png';
import {TitleSliderCreators} from './styles';

export default function SliderCreators() {
  return (
    <View
      style={{
        padding: 20,
      }}>
      <View style={{flex: 1}}>
        <ScrollView
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}>
          {Array.from(Array(15).keys()).map(() => {
            return (
              <View
                style={{
                  marginRight: 12,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={CreatorProfileImage} />

                <TitleSliderCreators>Ashley B..</TitleSliderCreators>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
