import React from 'react';
import { Dimensions, StyleSheet, View } from "react-native";

export const styles = StyleSheet.create({
    containerInput: {
      flexDirection: 'row',
      width: Dimensions.get('window').width * 0.92,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    containerSvg: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop:5
    },
    textInput: {
      backgroundColor: 'white',
      width: Dimensions.get("window").width * 0.68,
      paddingVertical: 15,
      borderRadius: 40,
      paddingLeft: 20,
      paddingRight:50,
      paddingTop:12,
      fontSize: 12,
    },
    image: {
      width: 28,
      height: 24,
    },
    imgDoint:{
      width:25,
      height:25,
      marginLeft:-50
    }
  });

  export const ContainerSvg = ({children}: any) => {
    return <View style={styles.containerSvg}>{children}</View>;
  };