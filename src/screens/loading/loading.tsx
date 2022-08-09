import React from 'react';
import {ActivityIndicator, Image, View} from 'react-native';
import Logo from '../../assets/Logo.png';

type LoadingProps = {};

const Loading: React.FC<LoadingProps> = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
        height: 100,
      }}>
      <View
        style={{
          padding: 50,
          alignItems: 'center',
          paddingVertical: '70%',
        }}>
        <ActivityIndicator size="large" color="#7844A1" />
        <Image
          source={Logo}
          style={{
            marginTop: 20,
          }}
        />
      </View>
    </View>
  );
};

export default Loading;
