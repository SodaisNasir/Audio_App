import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import FastImage from 'react-native-fast-image';
// import { GlobalStyle } from '../../Constants/GlobalStyle';
import { scale, verticalScale } from 'react-native-size-matters';

import { DotIndicator } from 'react-native-indicators';
import { Colors } from '../../../utils/Colors';

const EmptyCard = props => {
  // const [Please, sePlease] = useState(true);

  // setTimeout(() => {
  //   sePlease(false);
  // }, 5000);

  return (
    <View style={styles.container}>
      <View style={styles.ImageBox}>
        <FastImage
          style={styles.Image}
          source={require('..//../../utils/images/empty.png')}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <Text style={[{color:Colors.White, fontSize: scale(22) }, props.textRestyle]}>
        Nothing to Show
      </Text>
      {/* {Please ? (
        <Text style={[GlobalStyle.UploadTitle, {fontSize: scale(22)},props.textRestyle]}>
          Please Wait{` `}
          <DotIndicator size={3} color={props.search ? Colors.Non : Colors.White} />
        </Text>
      ) : (
     
      )}
      {props.search ?  <Text style={[GlobalStyle.UploadTitle, {fontSize: scale(22),marginTop:verticalScale(-30)}]}>
          Please Search{` `}
          <DotIndicator size={3} color={Colors.White} />
        </Text> : null} */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: '30%',
  },
  Image: {
    width: '100%',
    height: '100%',
  },
  ImageBox: {
    width: scale(200),
    height: scale(200),
    marginVertical: verticalScale(10),
  },
});
export default EmptyCard;
