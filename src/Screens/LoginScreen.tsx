import React, {useState} from 'react';

import {
  Text,
  Image,
  StyleSheet,
  Alert,
  View,
  ScrollView,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import {
  MainContainer,
  PageContainer,
  OnboardingPageHeading,
  FormInput,
} from '../Components';
import FormButton from '../Components/FormButton';
import FormInputLogin from '../Components/FormInputLogin';
import Toast from 'react-native-simple-toast';
import {APIService} from '../Networking/Managers/APIServices';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../Theme/Colors';
import Fonts from '../Theme/Fonts';

const LoginScreen = ({navigation}) => {
  const [confirm, setConfirm] = useState(null);
  const [employeeid, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  function handelLogin() {
    console.log(employeeid);
    if (employeeid == '') {
      Toast.show('Please Input Employee Id', Toast.LONG);
    } else if (password == '') {
      Toast.show('Please Input Password', Toast.LONG);
    } else {
      setLoading(true);
      APIService.login(employeeid, password)
        .then(res => {
          setLoading(false);
          console.log(res);
          if (res) {
            setLoading(false);
            AsyncStorage.setItem('token', JSON.stringify(res?.auth?.token));
            AsyncStorage.setItem('user', JSON.stringify(res));
            navigation.navigate('Home');
          }
        })
        .catch(error => {
          setLoading(false);
          Toast.show(error.msg, Toast.LONG);

          console.warn(error);
        });
    }
  }

  return (
    <MainContainer>
      <PageContainer>
        <ScrollView>
          <View style={styles.container}>
            <Image
              source={require('../Assets/Images/faceLogo.png')}
              style={{height: 80, width: 76, marginBottom: '10%'}}
            />
            <OnboardingPageHeading>Log In</OnboardingPageHeading>
            <View style={styles.inputBox}>
              <FormInputLogin
                value={employeeid}
                onChangeText={text => {
                  console.log(text);
                  setEmployeeId(text);
                }}
                label="Empolyee Id"
                placeholder={'Enter email'}
              />

              <FormInputLogin
                style={{marginTop: 20}}
                value={password}
                onChangeText={text => {
                  console.log(text);
                  setPassword(text);
                }}
                label="Password"
                secureTextEntry={true}
                placeholder={'min. 8 characters'}
              />

              <Pressable style={{alignItems: 'flex-end', top: 10}}>
                <Text style={styles.text}>Forgot Password?</Text>
              </Pressable>
            </View>

            <View style={styles.buttonContainer}>
              {loading ? (
                <ActivityIndicator />
              ) : (
                <FormButton
                  // onPress={() => handelLogin()}
                  onPress={() => navigation.navigate('Home')}
                  value={'Login'}
                  style={styles.button}></FormButton>
              )}
            </View>
          </View>
        </ScrollView>
      </PageContainer>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '30%',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  inputBox: {marginTop: 40},
  instruction: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    marginVertical: 10,
  },
  buttonContainer: {marginTop: 40, width: '100%', alignContent: 'center'},
  button: {width: '100%'},
  text: {...Fonts.getLightFont(12, Colors.APP_BLUE)},
});

export default LoginScreen;
