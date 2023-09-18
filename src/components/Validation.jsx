import {Text, StyleSheet} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import {Font} from '../utils/font';

const Validation = ({title}) => {
  return <Text style={styles.error}>{title}</Text>;
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: scale(14),
    fontFamily: Font.Inter500,
  },
});

export default Validation;
