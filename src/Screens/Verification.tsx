import React, {useRef, useEffect, useState} from 'react';
import {
  Text,
  View,
  Button,
  Alert,
  StyleSheet,
  Image,
  LogBox,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Load from 'react-native-vector-icons/AntDesign';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import OTPTextInput from 'react-native-otp-textinput';

import Fonts from '../Theme/Fonts';
import {
  MainContainer,
  PageContainer,
  OnboardingPageHeading,
} from '../Components';
import UserManager from '../Networking/Managers/UserManager';
import Colors from '../Theme/Colors';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

const VerificationScreen = ({navigation, route}) => {
  const {confirmation, phoneNumberWithoutCountryCode, phoneNumber} =
    route.params;
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const handleVerification = async () => {
    try {
      await confirmation.confirm(code).then(async res => {
        auth()
          .currentUser.getIdToken()
          .then(async function (idToken) {
            if (!idToken) {
              return;
            }
            let params = {
              phone: phoneNumber,
              phoneNumberWithoutCountryCode: phoneNumberWithoutCountryCode,
            };

            const headers = {
              'Content-Type': 'application/json',
              'x-pn-token': idToken,
            };
            const options = {
              method: 'POST',
              headers: headers,
              data: params,
              url: `https://sandbox-api.revcorp.in/api/v1/users/login`,
            };
            setLoading(true);
            if (!!route.params && !!route.params) {
              try {
                let check = await axios(options);

                if (check?.data) {
                  setLoading(false);
                  AsyncStorage.setItem(
                    'token',
                    JSON.stringify(check?.data.auth?.token),
                  );
                  AsyncStorage.setItem('user', JSON.stringify(check.data));
                  navigation.navigate('Home');
                }
              } catch (error) {
                handleAlert(error);
              }
            }
          });
      });
    } catch (error) {
      console.log('ERR auth firebase', error);
      console.log('Invalid code.');
    }
  };

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

  const handleAlert = error => {
    Alert.alert('ERROR', `${error}`, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => navigation.goBack()},
    ]);
  };

  return (
    <MainContainer>
      <PageContainer>
        <View style={styles.container}>
          <Image
            source={require('../Assets/Images/image3.png')}
            style={styles.image}
          />
          <OnboardingPageHeading>Verification</OnboardingPageHeading>
          <View style={styles.text}>
            <Text style={{...Fonts.getRegularFont(14), marginLeft: 20}}>
              We have sent OTP to number +91
            </Text>
          </View>

          <OTPTextInput
            handleTextChange={no => {
              setCode(no);
            }}
            autoFocus={true}
            inputCount={6}
            ref={e => (otpInput = e)}
            tintColor="#DCDCDC"
            textInputStyle={styles.underlineStyleBase}
          />

          <View style={styles.text}>
            <Text style={{...Fonts.getRegularFont(14), marginLeft: 25}}>
              <Load name="loading1" />
            </Text>
            <Text style={{...Fonts.getRegularFont(14), marginLeft: 10}}>
              Auto Fetching OTP..
            </Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={handleVerification}
            disabled={loading ? true : false}>
            {loading ? (
              <ActivityIndicator color={'white'} />
            ) : (
              <Text style={{...Fonts.getRegularFont(16, Colors.APP_WHITE)}}>
                Continue
              </Text>
            )}
          </TouchableOpacity>

          <View style={styles.text}>
            <Text style={{...Fonts.getRegularFont(14), marginLeft: 18}}>
              Didn't receive it? Retry in {''}
              <Text style={{fontWeight: 'bold'}}>00:20</Text>
            </Text>
          </View>
        </View>
      </PageContainer>
    </MainContainer>
  );
};
const styles = StyleSheet.create({
  image: {
    // top: 200,
    // left: 120,
    // height: 68,
  },
  container: {
    marginTop: '50%',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  font: {
    fontFamily: 'Poppins-Bold',
    height: 36,
    fontSize: 24,
    lineHeight: 36,
  },
  button: {
    borderRadius: 14,
    backgroundColor: '#5364FF',
    width: 300,
    height: 45,
    marginTop: 15,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    marginVertical: 10,
  },
  underlineStyleBase: {
    width: 42,
    height: 45,
    backgroundColor: '#F2F4F8',
    borderWidth: 0.5,
    borderColor: '#C4C4C4',
    borderRadius: 10,
    marginLeft: 10,
    color: Colors.APP_BLACK,
  },
  // underlineStyleBase: {
  //   width: 30,
  //   height: 45,
  //   borderWidth: 0,
  //   borderBottomWidth: 1,
  // },

  // underlineStyleHighLighted: {
  //   borderColor: '#03DAC6',
  // },
});

export default VerificationScreen;
