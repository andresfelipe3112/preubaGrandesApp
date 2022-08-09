import React from 'react';
import {Pressable, Text, TouchableOpacity, View, Image} from 'react-native';
import GoBack from '../../assets/goBack.png';
import GoBackWhite from '../../assets/GoBackWhite.png';
import MenuIcon from '../../assets/MenuIcon.png';

export default function NavBar({
  name,
  dark,
  navigation,
  iconProfile,
  color,
  menu,
  setOpen,
  open,
}: {
  name: string;
  dark?: boolean;
  navigation: any;
  iconProfile?: boolean;
  color?: string;
  menu?: boolean;
  open?: boolean;
  setOpen?: (e: boolean) => void;
}) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: dark ? 'black' : color,
        padding: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <Pressable
        style={{
          width: 12,
          height: 20,
          marginTop: 30,
          alignSelf: 'flex-start',
        }}
        onPress={() => navigation.goBack()}>
        <Image
          style={{height: '90%', width: '100%', position: 'absolute'}}
          source={dark ? GoBackWhite : GoBack}
        />
      </Pressable>
      <Text
        style={{
          flex: 1,
          textAlign: 'center',
          fontWeight: '400',
          fontSize: dark ? 15 : 22,
          fontFamily: 'Roboto-Regular',
          color: dark ? 'white' : 'black',
        }}>
        {name}{' '}
      </Text>
      {iconProfile && (
        <Pressable
          onPress={() => navigation.navigate('UserProfile')}
          style={{backgroundColor: 'white', padding: 10, borderRadius: 20}}
        />
      )}
      {menu && (
        <TouchableOpacity
          style={{
            marginTop: 30,
          }}
          onPress={() => setOpen(!open)}>
          <Image source={MenuIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
}
