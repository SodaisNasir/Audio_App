import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {GlobalStyle} from '../../Constants/GlobalStyle';
import {ms, s, vs} from 'react-native-size-matters';
import {Colors} from '../../utils/Colors';
import {Font} from '../../utils/font';
import CustomInput from '../../components/Inputs/CustomInput';
import Validation from '../../components/Validation';
import {EmailRegix} from '../../utils/url';
import {useForm} from 'react-hook-form';
import PasswordInput from '../../components/Inputs/PasswordInput';
import CustomButton from '../../components/CustomButton';
import {useDispatch} from 'react-redux';
import {USER_DETAILS} from '../../redux/reducer/Holder';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import BackgroundImage from '../../components/BackgroundImage';
const {width, height} = Dimensions.get('screen');

const Login = ({navigation}) => {
  const dispatch = useDispatch();

  const onSubmit = async data => {
    if (data.email == 'user@gmail.com') {
      dispatch({type: USER_DETAILS, payload: data.email});
      await AsyncStorage.setItem('userDetails', JSON.stringify(data.email));
    } else {
      Toast.show('Check Email');
    }
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});
  return (
    <BackgroundImage
      source={require('../../assets/image/Backgrounds/login.jpg')}>
      <View style={styles.TopRow}>
        <View>
          <Text style={styles.Text}>Welcome!</Text>
          <Text style={styles.continue}>Please login to continue</Text>
        </View>
      </View>
      <View style={{height: height / 3}} />
      <View style={styles.second_container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CustomInput
            name="email"
            rules={{
              required: '*Email is required',
              pattern: {
                value: EmailRegix,
                message: 'Email is not valid',
              },
            }}
            control={control}
            style={styles.textInput}
            textStyle={styles.InputTextStyle}
            placeholder="Enter Email address"
            keyboardType={'email-address'}
          />
          {errors.email && <Validation title={errors.email.message} />}
          <PasswordInput
            textContentType={'password'}
            name="password"
            rules={{
              required: '*Password is required',
              minLength: {
                value: 8,
                message: '*Password too short (minimum length is 8)',
              },
              maxLength: {
                value: 16,
                message: '*Password too long (maximum length is 16)',
              },
            }}
            control={control}
            placeholder="Enter Password"
          />
          {errors.password && <Validation title={errors.password.message} />}

          <CustomButton title="Continue" onPress={handleSubmit(onSubmit)} />
          <View style={[GlobalStyle.Row, {marginTop: vs(10)}]}>
            <View style={styles.line} />
            <Text style={styles.Password}>OR</Text>
            <View style={styles.line} />
          </View>
          <View>
            <CustomButton
              google
              title="Login with Google"
              containerStyle={GlobalStyle.CustomButtonRestyle}
              textRestyle={GlobalStyle.textRestyle}
              // onPress={() => navigation.navigate('register')}
            />
          </View>
          <View
            style={[
              GlobalStyle.Row,
              {
                alignSelf: 'center',
              },
            ]}>
            <Text style={styles.No_Account}>You do not have an account</Text>
            <Text
              onPress={() => navigation.navigate('register')}
              style={[styles.No_Account, styles.SignUp]}>
              Sign up
            </Text>
          </View>
          <Text
            onPress={() => navigation.navigate('forget')}
            style={[
              styles.No_Account,
              styles.SignUp,
              {textAlign: 'right', marginBottom: vs(15)},
            ]}>
            Forgot Password?
          </Text>
        </ScrollView>
      </View>
    </BackgroundImage>
  );
};
const styles = StyleSheet.create({
  TopRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    marginTop: StatusBar.currentHeight + s(10),
  },

  Text: {
    color: Colors.White,
    fontFamily: Font.Work700,
    fontSize: s(20),
  },
  continue: {
    color: Colors.White,
    fontFamily: Font.Work300Italic,
    fontSize: s(15),
  },
  second_container: {
    backgroundColor: Colors.Non,
  },
  Password: {
    fontSize: s(16),
    color: Colors.White,
    fontFamily: Font.Work500,
    paddingHorizontal: ms(5),
  },
  line: {
    height: vs(2),
    backgroundColor: Colors.White,
    width: '44%',
    borderRadius: 10,
  },
  Image: {
    width: s(40),
    height: s(40),
    resizeMode: 'contain',
  },
  No_Account: {
    fontSize: s(15),
    fontFamily: Font.Work500,
    color: Colors.White,
    marginTop: vs(15),
  },
  SignUp: {
    paddingLeft: ms(7),
    textDecorationLine: 'underline',
  },
});

export default Login;
