import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../utils/Colors';

import Modal from 'react-native-modal';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {Font} from '../../utils/font';

const ImagePickerModal = ({isVisible, onClose, PressPicture, PressCamera}) => {
  return (
      <Modal
      testID={'modal'}
        backdropOpacity={0.3}
        onBackdropPress={onClose}
        isVisible={isVisible}
        onBackButtonPress={onClose}
        statusBarTranslucent
        style={{
          margin: 0,
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={onClose} style={styles.CrossBOx}>
            <Entypo name="cross" size={scale(25)} color={Colors.White} />
          </TouchableOpacity>

          <View style={styles.SecCon}>
            <TouchableOpacity onPress={PressPicture} style={styles.ModalBtn}>
              <MaterialIcons
                name="photo"
                size={scale(32)}
                color={Colors.Main}
              />
              <Text style={styles.Text1}>Upload picture</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={PressCamera}
              style={styles.ModalBtn}>
              <Entypo name="camera" size={scale(30)} color={Colors.Main} />
              <Text style={styles.Text1}>Take a picture</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
  );
};
const styles = StyleSheet.create({
  Text1: {
    fontSize: scale(12),
    fontFamily: Font.Work600,
    color: Colors.Main,
  },
  ModalBtn: {
    flex: 1,
    margin: verticalScale(2),
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: scale(15),
    borderTopRightRadius: scale(15),
  },
  SecCon: {
    paddingVertical: moderateScale(15),
    width: '100%',
    backgroundColor: Colors.Grey,
    borderTopLeftRadius: scale(10),
    borderTopRightRadius: scale(10),
    flexDirection: 'row',

  },
  tinyLogo: {
    height: verticalScale(50),
    width: scale(50),
    resizeMode: 'contain',
  },
  CrossBOx: {
    backgroundColor: Colors.Red,
    width: scale(25),
    height: scale(25),
    borderRadius: 100,
    alignItems: 'center',
    marginBottom: verticalScale(-10),
    zIndex: 9,
    aspectRatio: 1 / 1,
  },
});
export default ImagePickerModal;
