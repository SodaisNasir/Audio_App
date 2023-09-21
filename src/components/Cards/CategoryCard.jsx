import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  ImageBackground,
  Animated,
  Pressable,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {GlobalStyle} from '../../Constants/GlobalStyle';
import {Colors} from '../../utils/Colors';
import {tab} from '../../Constants/Responsive';

const {height} = Dimensions.get('screen');
const CategoryCard = ({data, onPress}) => {
  const [isPressed, setIsPressed] = useState(false);

  const scaleValue = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    setIsPressed(true);
    Animated.timing(scaleValue, {
      toValue: 0.95,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    setIsPressed(false);
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[
        styles.Container,
        {
          width: tab ? '31%' : '47%',
          transform: [{scale: isPressed ? 0.9 : scaleValue.__getValue()}],
        },
      ]}>
      <ImageBackground
        style={[GlobalStyle.Image, styles.ImageBackground]}
        source={{uri: data.image}}>
        <Text style={[GlobalStyle.TextShadow, styles.title]}>{data.title}</Text>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  Container: {
    height: height / 8,
    borderRadius: scale(10),
    overflow: 'hidden',
    margin: scale(5),
  },
  ImageBackground: {
    justifyContent: 'flex-end',
  },
  title: {
    color: Colors.White,
    textTransform: 'capitalize',
    margin: scale(5),
  },
});

export default CategoryCard;
