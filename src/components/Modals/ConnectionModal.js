import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { showModalAction, hideModalAction} from "../../redux/reducer/ConnectionReducer";
import { connect } from 'react-redux';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Colors } from "../../utils/Colors";
import { Font } from "../../utils/font";
import NetInfo from '@react-native-community/netinfo';

const ConnectionModal = ({
  isConnected,
  hideModalAction,
  showModal,
  hasShownModal,
}) => {
  const [isConnectedNow, setIsConnectedNow] = useState(isConnected);

  // useEffect(() => {
  //   const unsubscribe = NetInfo.addEventListener((state) => {
  //     setIsConnectedNow(state.isConnected);
  //   });
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (!hasShownModal) {
        console.log('state.isConnected :>> ', state.isConnected);
        if (state.isConnected) {
          showModalAction();
          setTimeout(() => {
            hideModalAction();
          }, 3000); // Hide the popup after 3 seconds
        } else {
          showModalAction();
          setTimeout(() => {
            hideModalAction();
          }, 3000)
          // You can choose to hide the modal here immediately
          // hideModalAction();
        }
      }
    });

    return () => {
      unsubscribe();
    };
  }, [hasShownModal, showModalAction, hideModalAction]);

  useEffect(() => {
    if (!hasShownModal && !isConnectedNow) {
      // Show the "Connection Lost" popup
      showModalAction();
      setTimeout(() => {
        hideModalAction();
      }, 3000); // Hide the popup after 3 seconds
    } else if (!hasShownModal && isConnectedNow) {
      // Show the "Connection Restored" popup
      showModalAction();
      setTimeout(() => {
        hideModalAction();
      }, 3000); // Hide the popup after 3 seconds
    }
  }, [isConnectedNow, hasShownModal, showModalAction, hideModalAction]);  
  return (
    <>
     {showModal && (
       <View style={styles.MainModalBox}>
       <View style={{ marginRight: scale(5) }}>
         {isConnected ? (
           <AntDesign
             name="checkcircle"
             size={scale(20)}
             color={Colors.Success}
           />
         ) : (
           <MaterialIcons
             name="wifi-tethering-error"
             size={scale(30)}
             color={Colors.Red}
           />
         )}
       </View>
       <View style={styles.TextBox}>
         <Text
           style={[
             styles.text,
             { color: isConnected ? Colors.Success : Colors.Red },
           ]}
         >
           {isConnectedNow
                ? "Internet Connection Restored"
                : "No Internet Connection"}
         </Text>
       </View>
     </View>
     )}
    </>
  );
};

const styles = StyleSheet.create({
  MainModalBox: {
    height: verticalScale(48),
    width: "95%",
    backgroundColor: Colors.White,
    borderRadius: scale(12),
    bottom: scale(20),
    overflow: "hidden",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: scale(14),
    fontFamily: Font.Work500,
  },
});

const mapStateToProps = (state) => ({
  showModal: state.connectionModal.showModal,
  hasShownModal: state.connectionModal.hasShownModal,
});

const mapDispatchToProps = {
  hideModalAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectionModal);
