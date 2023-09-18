import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {StatusBar, StyleSheet} from 'react-native';
import {Colors} from '../utils/Colors';
import {Font} from '../utils/font';

export const GlobalStyle = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  CustomButtonRestyle: {
    backgroundColor: Colors.White,
    width: '85%',
  },
  Padding: {
    paddingHorizontal: moderateScale(15),
  },
  textRestyle: {
    color: Colors.Main,
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Space_Between: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  showBar: {
    display: 'flex',
    backgroundColor: Colors.ThemeGrey,
    height: verticalScale(60),
    borderTopColor: Colors.ThemeGrey,
  },
  HideBar: {
    display: 'none',
  },
  ModalText: {
    fontSize: scale(16),
    textAlign: 'center',
    padding: moderateScale(20),
    fontFamily: Font.Work600,
    color: Colors.Main,
  },
  ModalContainer: {
    justifyContent: 'center',
    width: '70%',
    borderRadius: scale(10),
    backgroundColor: Colors.Main,
    alignSelf: 'center',
  },
  MainModal: {
    justifyContent: 'center',
    margin: 0,
  },
  ModalLine: {
    width: '20%',
    height: verticalScale(4),
    backgroundColor: Colors.Grey,
    alignSelf: 'center',
    borderRadius: scale(10),
    marginVertical: verticalScale(15),
  },
  Modal_Container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  LottieView: {
    height: verticalScale(150),
    alignSelf: 'center',
  },

  Image: {
    width: '100%',
    height: '100%',
  },
  Ripple: {
    color: Colors.Main,
    borderless: true,
    foreground: true,
  },
  Yellow_Ripple: {
    color: '#FDBB26',
    borderless: true,
    foreground: true,
  },
  WhiteRipple: {
    color: Colors.White,
    borderless: true,
    foreground: true,
  },
  Vertical_Space: {
    height: verticalScale(15),
  },
  Shadow: {
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  MapContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(5),
  },
  StatusBar: {
    marginTop: StatusBar.currentHeight + scale(10),
  },
});
