import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  StatusBar,
} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../utils/Colors';
import {Font} from '../../utils/font';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {GlobalStyle} from '../../Constants/GlobalStyle';
const Header = props => {
  const navigation = useNavigation();
 
  return (
    <View style={[styles.Container, props.Container, GlobalStyle.Space_Between]}>
      {/* <StatusBar backgroundColor={Colors.Black} /> */}
      <View style={GlobalStyle.Row}>
        {props.c_back && (
           <Pressable onPress={() => navigation.goBack()}
           style={[GlobalStyle.ArrowCircle,props.arrowCircleRestyle]}>
           <Ionicons name="arrow-back" color={Colors.White} size={scale(18)} />
           </Pressable>
        )}
        {props.Logo && <Image style={styles.Image} source={props.source} />}
        {props.Back && (
          <Pressable
            android_ripple={GlobalStyle.Yellow_Ripple}
            onPress={() => navigation.goBack()}
            style={styles.arrowBox}>
            <Ionicons name="arrow-back" color={Colors.White} size={scale(18)} />
          </Pressable>
        )}
          <Text style={[GlobalStyle.TextShadow,styles.Text, props.TextRestyle]}>{props.Title}</Text>
      </View>

      <View style={GlobalStyle.Row}>
        {props.setting && (
          <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
            <Feather
              name="search"
              size={scale(20)}
              color={Colors.White}
            />
          </TouchableOpacity>
        )}
      </View>
      {props.edit && (
        <TouchableOpacity onPress={props.editOnPress} activeOpacity={0.6}>
          <Text style={styles.editText}>{props.editText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    paddingVertical: moderateVerticalScale(20),
    paddingHorizontal: moderateScale(16),
  },
  arrowBox: {
    borderRadius: scale(5),
    paddingHorizontal: 2,
    paddingVertical: 2,
    marginRight:scale(10),
    overflow:'hidden'
  },
  Text: {
    fontFamily: Font.Work600,
    fontSize: scale(17),
    paddingRight: moderateScale(15),
    color: Colors.White,
    textAlignVertical: 'center',
    textTransform:'capitalize'
  },
  Image: {
    width: scale(22),
    height: scale(22),
    resizeMode: 'contain',
  },
  editText: {
    color: Colors.White,
    fontFamily: Font.Poppins500,
    fontSize: scale(12),
  },
});

export default Header;
