import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Pressable,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import {GlobalStyle} from '../../../Constants/GlobalStyle';
import {useFocusEffect} from '@react-navigation/native';
import LibraryCard from '../../../components/Cards/LibraryCard';
import {Category, sorting} from '../../../Constants/Data';
import {Colors} from '../../../utils/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ms, s, vs, mvs} from 'react-native-size-matters';
import {Font} from '../../../utils/font';
import LibraryLoader from '../../../components/Skeletons/LibraryLoader';

const UserLibrary = ({navigation}) => {
  const [load, setLoad] = useState(true);
  const [sort, setSort] = useState(false);
  const [sortValue, setSortValue] = useState('Recent');

  const onClose = () => {
    setSort(false);
  };
  const handleSort = item => {
    setSortValue(item.title);
    if (item.title == 'Recent') {
      Category.reverse();
    } else {
      Category.sort();
    }
    onClose();
  };

  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: GlobalStyle.showBar,
      });
    }, []),
  );
  setTimeout(() => {
    setLoad(false);
  }, 4000);
  return (
    <SafeAreaView style={GlobalStyle.Container}>
      <View style={[GlobalStyle.Space_Between, styles.TopBox]}>
        <Text style={styles.TopTitle}>{Category?.length} titles</Text>
        <TouchableOpacity style={GlobalStyle.Row} onPress={() => setSort(true)}>
          <MaterialCommunityIcons
            name="sort"
            size={s(22)}
            color={Colors.White}
          />
          <Text style={styles.TopTitle}> {sortValue}</Text>
        </TouchableOpacity>
      </View>
      {load ? (
        <>
          <LibraryLoader />
          <LibraryLoader />
          <LibraryLoader />
        </>
      ) : (
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            {Category?.map(item => (
              <LibraryCard
                data={item}
                key={item.id}
                onPress={() => navigation.navigate('player', {item: item})}
              />
            ))}
            <View style={GlobalStyle.Height} />
          </ScrollView>
        </>
      )}
      <Modal
        testID={'modal'}
        backdropOpacity={0}
        onBackdropPress={onClose}
        isVisible={sort}
        onBackButtonPress={onClose}
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}>
        <View style={styles.Container}>
          <FlatList
            data={sorting}
            renderItem={({item, index}) => {
              return (
                <Pressable
                  style={{overflow: 'hidden'}}
                  android_ripple={GlobalStyle.Yellow_Ripple}
                  onPress={() => handleSort(item)}
                  key={index}>
                  <Text style={styles.title}>{item.title}</Text>
                </Pressable>
              );
            }}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  TopTitle: {
    fontSize: s(18),
    color: Colors.White,
    fontFamily: Font.Work600,
  },
  TopBox: {
    marginVertical: vs(10),
    paddingHorizontal: ms(15),
  },
  Container: {
    position: 'absolute',
    right: 0,
    top: '7%',
    backgroundColor: Colors.White,
    width: '45%',
    paddingVertical: mvs(10),
    borderRadius: s(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    backgroundColor: Colors.White,
    zIndex: 99,
  },
  title: {
    color: Colors.Main,
    fontFamily: Font.Work500,
    fontSize: s(18),
    paddingVertical: mvs(5),
    paddingHorizontal: ms(5),
  },
});
export default UserLibrary;
