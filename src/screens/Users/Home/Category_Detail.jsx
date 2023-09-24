import React, {useCallback, useState,useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import {GlobalStyle} from '../../../Constants/GlobalStyle';
import {useFocusEffect} from '@react-navigation/native';
import Header from '../../../components/Header/Header';
import {ms, s, vs} from 'react-native-size-matters';
import {Colors} from '../../../utils/Colors';
import {Font} from '../../../utils/font';
import DetailBookCard from '../../../components/Cards/DetailBookCard';
import {Category} from '../../../Constants/Data';

const {width, height} = Dimensions.get('screen');
const Category_Detail = ({navigation, route}) => {
  const {item} = route.params;
  const [load, setLoad] = useState(true);
  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: GlobalStyle.HideBar,
      });
    }, []),
  );
  setTimeout(() => {
    setLoad(false);
  }, 5000);
  useEffect(() => {
    StatusBar.setTranslucent(true)
    StatusBar.setBackgroundColor(Colors.Non)
    return () => {
      StatusBar.setTranslucent(false)
    StatusBar.setBackgroundColor(Colors.Main)
    }
  }, [])
  return (
    <View style={GlobalStyle.Trans_Container}>
      <ImageBackground
       style={GlobalStyle.Trans_Container}
        blurRadius={200}
        source={{uri: item.image}}>
      <Header Title={item.title} c_back Container={{marginTop:vs(20)}} arrowCircleRestyle={{marginTop:0}} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.ImageBackground}>
          <ImageBackground
            style={[GlobalStyle.Image, {justifyContent: 'flex-end'}]}
            source={{uri: item.image}}>
            <Text style={[GlobalStyle.TextShadow, styles.category]}>
              {item.title}
            </Text>
          </ImageBackground>
        </View>
        <Text style={[styles.category, styles.heading,GlobalStyle.TextShadow]}>
          Best selling in {item.title} category
        </Text>
        <FlatList
          data={Category}
          keyExtractor={item => item.id.toString()}
          horizontal
          renderItem={({item}) => (
            <DetailBookCard
              data={item}
              onPress={() =>
                navigation.navigate('singleBookDetail', {
                  item: item,
                })
              }
            />
          )}
        />
      </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  ImageBackground: {
    width: width / 1.1,
    height: height / 3.5,
    resizeMode: 'cover',
    borderRadius: s(15),
    alignSelf: 'center',
    marginTop: vs(10),
    overflow: 'hidden',
  },
  category: {
    color: Colors.White,
    textTransform: 'capitalize',
    margin: s(20),
    fontFamily: Font.Work500,
    fontSize: s(20),
  },
  heading: {
    fontSize: s(17),
  },
});
export default Category_Detail;
