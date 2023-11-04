import React, {useEffect, useState} from 'react';
import {
  Text,
  Image,
  StyleSheet,
  Alert,
  View,
  ActivityIndicator,
} from 'react-native';
import {
  MainContainer,
  PageContainer,
  OnboardingPageHeading,
  FormInput,
} from '../Components';
import Icon from 'react-native-vector-icons/Feather';
import PhoneInput from 'react-native-phone-number-input';
import Fonts from '../Theme/Fonts';
import Colors from '../Theme/Colors';
import FormButton from '../Components/FormButton';
import auth from '@react-native-firebase/auth';
import Geolocation from '@react-native-community/geolocation';
import {APIService} from '../Networking/Managers/APIServices';

const LoginScreen = ({navigation}) => {
  // const phoneInput = useRef<PhoneInput>(null);
  const [confirm, setConfirm] = useState(null);
  const [countryCode, setCountryCode] = useState('+91 ');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  // Geolocation.getCurrentPosition(info => console.log('geo location ', info));

  function onAuthStateChanged(user) {
    if (user) {
      // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
      // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
      // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
      // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!phoneNumber) {
      Alert.alert(
        'Input phone number.',
        'Please input phone number in order to login.',
      );
      return;
    }
    setLoading(true);
    APIService.mobileVerify(phoneNumber).then(
      async res => {
        if (!res) {
          Alert.alert(
            'Invalid details.',
            'You have input invalid details. Please correct details and try again.',
          );
          setLoading(false);
          return;
        }
        try {
          const confirmation = await auth().signInWithPhoneNumber(countryCode);
          setConfirm(confirmation);
          setLoading(false);
          navigation.navigate('Verification', {
            phoneNumber: countryCode,
            phoneNumberWithoutCountryCode: phoneNumber,
            confirmation: confirmation,
          });
        } catch (error) {
          setLoading(false);
          Alert.alert('ERROR', `${error}`, [
            {
              text: 'Cancel',
              onPress: () => {},
            },
            {text: 'OK', onPress: () => {}},
          ]);
        }
      },
      error => {},
    );
  };

  return (
    <MainContainer>
      <PageContainer>
        <View style={styles.container}>
          <Image source={require('../Assets/Images/image3.png')} />
          <OnboardingPageHeading>Log In</OnboardingPageHeading>
          <View style={styles.inputBox}>
            <FormInput
              value={phoneNumber}
              onChange={text => {
                setPhoneNumber(text);
              }}
              setCountryCode={v => {
                setCountryCode(v);
              }}
              type="phone"
              label="Mobile Number"
            />
          </View>
          <View style={styles.instruction}>
            <Text style={Fonts.getRegularFont(14)}>
              <Icon name="info" />
            </Text>
            <Text style={{...Fonts.getRegularFont(12), marginLeft: 5}}>
              Enter your mobile number as per Revcorp record.
            </Text>
          </View>
          <View style={styles.button}>
            {loading ? (
              <ActivityIndicator />
            ) : (
              <FormButton onPress={handleSubmit}>Get OTP</FormButton>
            )}
          </View>
        </View>
      </PageContainer>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '50%',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  inputBox: {marginTop: 40},
  instruction: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    marginVertical: 10,
  },
  button: {marginTop: 10, width: '100%'},
});

export default LoginScreen;
