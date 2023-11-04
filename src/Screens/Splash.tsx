import React, {useEffect} from 'react';
import {
  Image,
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Pressable,
} from 'react-native';
import MainContainer from '../Components/MainContainer';
import Images from '../Assets/Images';
import Fonts from '../Theme/Fonts';
import Colors from '../Theme/Colors';
import FormButton from '../Components/FormButton';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    // const timer = setTimeout(() => {
    //   navigation.navigate('Login');
    // }, 2000);
  });
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.splash.source} style={styles.image}>
        <View style={styles.backgroundCover}>
          <Image
            source={require('../Assets/Images/faceLogo.png')}
            style={{height: 126, width: 120, marginBottom: '40%'}}
          />
          <View style={{margin: 10}}>
            <View style={{width: '70%', marginBottom: 10}}>
              <Text
                style={{
                  ...Fonts.getBoldFont(24, Colors.APP_WHITE),
                  lineHeight: 32,
                }}>
                Rev up Your Riding Experience with Revconnect.
              </Text>
            </View>
            <Text style={{...Fonts.getMediumFont(14, Colors.APP_WHITE)}}>
              Lorem ipsum dolor sit amet consecur. Scelerisque eleifend
              malesuada magna orci et qus...
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              marginLeft: '10%',
              marginTop: '10%',
              gap: 10,
            }}>
            <FormButton
              onPress={() => console.log()}
              value={'Create an account'}
            />
            <FormButton
              onPress={() => navigation.navigate('Login')}
              value={'Login'}
              transparent={true}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  backgroundCover: {
    backgroundColor: 'rgba(36, 33, 19, 0.4)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...Fonts.getBoldFont(24, Colors.APP_WHITE),
  },
});

export default SplashScreen;
