import {StyleSheet, Image, View, StatusBar, Dimensions} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {GlobalStyle} from '../Constants/GlobalStyle';
import {Colors} from '../utils/Colors';

const {width, height} = Dimensions.get('screen');
const SplashScreen = () => {
  return (
    <View style={[styles.Container, GlobalStyle.Main_Container]}>
      <StatusBar backgroundColor={Colors.Main} barStyle="light-content" />
      <View style={styles.ImageBox}>
        <Image
          style={GlobalStyle.Image}
          resizeMode="contain"
          source={require('../assets/image/Logos/logo.jpg')}
        />
      </View>
      <LottieView
        autoPlay
        style={GlobalStyle.LottieView}
        source={require('../assets/lottie/splash_lottie.json')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  ImageBox: {
    width: width / 1.2,
    height: height / 3.3,
  },
});
export default SplashScreen;
