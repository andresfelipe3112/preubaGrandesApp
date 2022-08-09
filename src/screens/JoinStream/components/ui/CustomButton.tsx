/*
 * Copyright 2021 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 *
 * By using this code you agree to the Phenix Terms of Service found online here:
 * http://phenixrts.com/terms-of-service.html
 */

import React from 'react';
import {
  StyleSheet,
  Button,
  ButtonProps,
  TouchableOpacity,
  Text,
} from 'react-native';

export const CustomButton = ({title, onPress, ...rest}: ButtonProps) => (
  <TouchableOpacity onPress={onPress} style={styles.root} {...rest}>
    <Text
      style={{
        color: 'white',
      }}>
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
  },
});
