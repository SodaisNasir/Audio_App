import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';

import {GlobalStyle} from '../../../Constants/GlobalStyle';
import {useFocusEffect} from '@react-navigation/native';
import Header from '../../../components/Header/Header';
import {scale, vs} from 'react-native-size-matters';
import {Font} from '../../../utils/font';
import {Colors} from '../../../utils/Colors';
import {Category} from '../../../Constants/Data';
import CategoryCard from '../../../components/Cards/CategoryCard';
import Skeleton from '../../../components/Skeletons/Skeleton';

const Dashboard = ({navigation}) => {
  const [load, setLoad] = useState(true);
  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: GlobalStyle.showBar,
      });
    }, []),
  );
  setTimeout(() => {
    setLoad(false);
  }, 2000);
  return (
    <SafeAreaView style={GlobalStyle.Container}>
      <StatusBar backgroundColor={Colors.Main} />
      <Header Notification />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={GlobalStyle.Padding}>
          <Text style={styles.Title}>Top Listens from category</Text>
        </View>

        <View style={GlobalStyle.MapContainer}>
          {load ? (
            <>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </>
          ) : (
            Category?.map((item, index) => (
              <CategoryCard
                data={item}
                key={item.id}
                onPress={() => console.log(index)}
              />
            ))
          )}
        </View>
        <View style={{height: vs(55)}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  Title: {
    fontSize: scale(18),
    fontFamily: Font.Work500,
    color: Colors.White,
  },
});
