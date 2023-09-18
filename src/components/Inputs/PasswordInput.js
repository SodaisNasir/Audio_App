import React, { forwardRef, useState } from 'react';
import { useController } from 'react-hook-form';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../utils/Colors';
import { Font } from '../../utils/font';
import { GlobalStyle } from '../../Constants/GlobalStyle';

const PasswordInput = forwardRef((props, ref) => {
  const { field } = useController({
    control: props.control,
    defaultValue: props.defaultValue || '',
    name: props.name,
    rules: props.rules,
  });

  const [password, setPassword] = useState(true)
  return (
    <View style={[styles.smallbox, props.style, props.Hello]}>
      <TextInput
        onFocus={props.onFocus}
        textContentType={props.textContentType}
        value={field.value}
        ref={ref}
        onChangeText={field.onChange}
        multiline={props.multiline}
        numberOfLines={props.numberOfLines}
        placeholder={props.placeholder}
        placeholderTextColor={Colors.placeholderTextColor}
        style={[styles.InputStyles, props.restyle]}
        secureTextEntry={password}
        keyboardType={'default'}
        pattern={props.pattern}
        label={props.label}
        maxLength={props.maxLength}
        cursorColor={Colors.White}
        selectionColor='rgba(255,255,255,0.7)'
      />
      <Pressable android_ripple={GlobalStyle.Yellow_Ripple} style={{ padding: moderateScale(5) }} onPress={() => setPassword(!password)}>
        {password ? (
          <MaterialCommunityIcons color={Colors.White} size={scale(20)} name='eye' />
        ) : (
          <Entypo color={Colors.White} size={scale(20)} name='eye-with-line' />
        )}
      </Pressable>
    </View>
  );
});

const styles = StyleSheet.create({
  InputStyles: {
    width: '80%',
    height: '100%',
    color: Colors.White,
    fontFamily: Font.Work500,
    fontSize: scale(16)
  },
  smallbox: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: verticalScale(20),
    width: '100%',
    paddingLeft: moderateScale(20),
    paddingRight: moderateScale(15),
    height: verticalScale(50),
    backgroundColor: Colors.Non,
    borderWidth: scale(1),
    borderColor: Colors.White,
    borderRadius: scale(10),
  },
  Text: {
    color: Colors.White,
    fontFamily: Font.Work600,
    fontSize: scale(15)
  }
});
export default PasswordInput;


