import React, {forwardRef} from 'react';
import {useController} from 'react-hook-form';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../utils/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {GlobalStyle} from '../../Constants/GlobalStyle';
import {Font} from '../../utils/font';
const ResisterInput = forwardRef((props, ref) => {
  const {field} = useController({
    control: props.control,
    defaultValue: props.defaultValue || '',
    name: props.name,
    rules: props.rules,
  });
  return (
    <>
      <View style={[styles.smallbox, GlobalStyle.Row, props.Hello]}>
        <Text style={styles.label}>{props.label}</Text>
        {props.user && (
          <AntDesign name="user" color={Colors.White} size={scale(18)} />
        )}
        {props.email && (
          <Fontisto name="email" color={Colors.White} size={scale(18)} />
        )}
        {props.phone && (
          <Ionicons
            name="phone-portrait-outline"
            color={Colors.White}
            size={scale(17)}
          />
        )}
        {props.password && (
          <Feather name="lock" color={Colors.White} size={scale(17)} />
        )}
        <TextInput
          onFocus={props.onFocus}
          value={field.value}
          ref={ref}
          onChangeText={field.onChange}
          placeholder={props.placeholder}
          placeholderTextColor={Colors.placeholderTextColor}
          style={[styles.InputStyles, props.Gapp, props.restyle]}
          keyboardType={props.keyboardType}
          textContentType={props.textContentType}
          pattern={props.pattern}
          label={props.label}
          maxLength={props.maxLength}
          cursorColor={Colors.White}
          selectionColor={Colors.Black}
          outlineColor={Colors.Non}
          activeOutlineColor={Colors.Non}
          textColor={Colors.White}
        />
      </View>
    </>
  );
});
const styles = StyleSheet.create({
  InputStyles: {
    color: Colors.White,
    width: '95%',
    paddingHorizontal: moderateScale(10),
    fontFamily: Font.Work500,
  },
  label: {
    fontSize: scale(15),
    zIndex: 10,
    color: Colors.White,
    backgroundColor: Colors.Main,
    position: 'absolute',
    top: verticalScale(-10),
    left: scale(10),
    paddingHorizontal: moderateScale(7),
    fontFamily: Font.Work500,
  },
  smallbox: {
    marginTop: verticalScale(15),
    height: verticalScale(50),
    borderWidth: scale(1),
    borderRadius: scale(10),
    borderColor: Colors.White,
    paddingHorizontal: moderateScale(13),
  },
});

export default ResisterInput;
