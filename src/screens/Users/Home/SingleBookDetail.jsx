import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
import React,{useEffect} from 'react';
import {GlobalStyle} from '../../../Constants/GlobalStyle';
import Header from '../../../components/Header/Header';
import {mvs, s, vs} from 'react-native-size-matters';
import {Colors} from '../../../utils/Colors';
import {Font} from '../../../utils/font';

const {width, height} = Dimensions.get('screen');
const SingleBookDetail = ({navigation, route}) => {
  const {item} = route.params;
  
  return (
    <View style={[GlobalStyle.Trans_Container, { backgroundColor: Colors.Black, }]}>
      {/* <ImageBackground
       style={GlobalStyle.Trans_Container}
        blurRadius={200}
        source={{uri: item.image}}> */}
     <Header c_back />
        <View style={styles.Image}>
          <Image style={GlobalStyle.Image} source={{uri: item.image}} />
        </View>
      <Text style={[GlobalStyle.TextShadow, styles.category]}>
        {item.book_name}
      </Text>
      <View style={[GlobalStyle.Row, styles.CenterTextView]}>
        <Text style={[GlobalStyle.TextShadow, styles.book]}>audio book</Text>
        <View style={styles.dot} />
        <Text style={[GlobalStyle.TextShadow, styles.book]}>{item.author}</Text>
      </View>
      <View style={[GlobalStyle.Row, styles.CenterTextView]}>
        <Text style={[GlobalStyle.TextShadow, styles.book]}>★★★★</Text>
        <View style={{width:'5%'}} />
        <Text style={[GlobalStyle.TextShadow, styles.book]}>200 ratings</Text>
      </View>
      <View style={[GlobalStyle.Row, styles.CenterTextView]}>
        <Text style={[GlobalStyle.TextShadow, styles.book]}>by {`\n`} {item.author}</Text>
        <View style={{width:'20%'}} />
        <Text style={[GlobalStyle.TextShadow, styles.book]}>Narrated ratings {`\n`} 
            {item.title}
        </Text>
      </View>
      {/* </ImageBackground> */}
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    borderRadius: width,
    width: s(4),
    aspectRatio: 1 / 1,
    backgroundColor: Colors.White,
    marginHorizontal: s(10),
  },
  Image: {
    width: width / 1.3,
    height: height / 3.5,
    resizeMode: 'cover',
    borderRadius: s(15),
    alignSelf: 'center',
    marginTop: s(10),
    overflow: 'hidden',
  },
  category: {
    color: Colors.White,
    textTransform: 'capitalize',
    margin: s(20),
    fontFamily: Font.Work600,
    fontSize: s(20),
    textAlign: 'center',
  },
  book: {
    color: Colors.White,
    fontSize: s(15),
    fontFamily: Font.Work500,
    textAlign:'center'
  },
  CenterTextView: {alignSelf: 'center', marginBottom: vs(10)},
});
export default SingleBookDetail;
