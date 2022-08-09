import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Animated,
  Pressable,
} from 'react-native';

const TestScreen = ({label, doble}: {label: string; doble?: boolean}) => {
  const styles = StyleSheet.create({
    container: {
      marginRight: 10,
      backgroundColor: '#ececec',
      paddingTop: 5,
      borderBottomWidth: 1,
      borderBottomColor: '#bdbdbd',
      borderRadius: 2,
      width: doble ? '45%' : '95%',
    },
    icon: {
      width: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      fontSize: 13,
      height: 55,
      color: '#353636',
    },
    label: {
      color: 'black',
      fontSize: 13,
      fontWeight: '500',
    },
    animatedStyle: {
      top: 20,
      left: 3,
      position: 'absolute',
      borderRadius: 90,
      zIndex: 10000,
    },
  });
  const [value, setValue] = useState('');
  const moveText = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (value !== '') {
      moveTextTop();
    } else if (value === '') {
      moveTextBottom();
    }
  }, [value]);

  const onChangeText = (text: string) => {
    setValue(text);
  };

  const onFocusHandler = () => {
    moveTextTop();
  };

  const onBlurHandler = () => {
    if (value === '') {
      moveTextBottom();
    }
  };

  const moveTextTop = () => {
    Animated.timing(moveText, {
      toValue: 0.6,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const moveTextBottom = () => {
    Animated.timing(moveText, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const yVal = moveText.interpolate({
    inputRange: [0, 1],
    outputRange: [4, -20],
  });

  const animStyle = {
    transform: [
      {
        translateY: yVal,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedStyle, animStyle]}>
        <Text style={styles.label}>{label}</Text>
      </Animated.View>
      <TextInput
        autoCapitalize={'none'}
        style={styles.input}
        value={value}
        onChangeText={(text: string) => onChangeText(text)}
        editable={true}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        blurOnSubmit
      />
    </View>
  );
};
export default TestScreen;
