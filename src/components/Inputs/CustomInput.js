import React, { forwardRef } from 'react'
import { useController } from 'react-hook-form';
import { StyleSheet, TextInput, View } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { Colors } from '../../utils/Colors';
import { Font } from '../../utils/font';
const CustomInput = forwardRef((props, ref) => {
  const { field } = useController({
    control: props.control,
    defaultValue: props.defaultValue || '',
    name: props.name,
    rules: props.rules,
  });
  return (
    <View style={[styles.smallbox, props.style, props.Hello]}>
      <TextInput
        onFocus={props.onFocus}
        textContentType={props.textContentType}
        value={field.value}
        ref={ref}
        onChangeText={field.onChange}
        multiline={props.multiline}
        placeholder={props.placeholder}
        placeholderTextColor={Colors.placeholderTextColor}
        style={[styles.InputStyles, props.restyle]}
        keyboardType={props.keyboardType}
        pattern={props.pattern}
        label={props.label}
        placeholderStyle={props.placeholderStyle}
        maxLength={props.maxLength}
        cursorColor={Colors.White}
        selectionColor='rgba(255,255,255,0.7)'
      />
    </View>
  );
});

const styles = StyleSheet.create({
  InputStyles: {
    width: '100%',
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
    paddingHorizontal: moderateScale(20),
    height: verticalScale(50),
    backgroundColor: Colors.Non,
    borderWidth: scale(1),
    borderColor: Colors.White,
    borderRadius: scale(10),
  },
});
export default CustomInput;
