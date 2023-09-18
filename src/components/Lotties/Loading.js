import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { Colors } from '../../utils/Colors';
import { scale } from 'react-native-size-matters';
import ReactNativeModal from 'react-native-modal';
import { GlobalStyle } from '../../Constants/GlobalStyle';

const Loading = ({ isVisible }) => {
  return (
    <ReactNativeModal
      visible={isVisible}
      style={[GlobalStyle.MainModal, GlobalStyle.Modal_Container]}>
      <View style={styles.buttons}>
        <LottieView
          autoPlay
          style={GlobalStyle.LottieView}
          source={require('../../assets/lottie/loader.json')}
        />
        <Text style={GlobalStyle.ModalText}>Please Wait...</Text>
      </View>
    </ReactNativeModal>
  );
};

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: Colors.ThemeCream,
    width: '60%',
    alignSelf: 'center',
    borderRadius: scale(20),
  },
});
export default Loading;
