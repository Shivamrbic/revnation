import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Text} from 'react-native-paper';
import Bell from 'react-native-vector-icons/SimpleLineIcons';
import Colors from '../Theme/Colors';
import Fonts from '../Theme/Fonts';
import {useSelector} from 'react-redux';
import Validator from '../Utils/Validator';

const HeaderHome = ({navigation}) => {
  const userData = useSelector(state => state?.UserReducer?.userData);

  console.log(userData);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
          marginVertical: 5,
        }}>
        <TouchableOpacity>
          <View>
            {/* {!!userData?.photo_url ? (
                <Image
                  style={styles.image}
                  source={{
                    uri: userData?.photo_url,
                  }}
                />
              ) : null} */}

            <Image
              style={styles.image}
              source={
                userData.photo_url
                  ? {uri: userData.photo_url}
                  : require('../Assets/Images/image3.png')
              }></Image>
          </View>
        </TouchableOpacity>

        <View style={{marginLeft: 10, flex: 1}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: 'black',
            }}>
            Hello {userData?.first_name}
          </Text>
          <Text
            style={{
              fontSize: 11,
              fontWeight: '600',
              color: Colors.APP_GRAY,
            }}>
            {Validator.Greetings()}
          </Text>
        </View>
      </View>

      {/* <TouchableOpacity onPress={() => navigation.navigate('NotifyScreen')}>
          <View style={styles.iconContainer}>
            <Image source={require('../Assets/Images/notification.png')} />
          </View>
        </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderBottomColor: Colors.APP_CARD_BORDER,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  iconContainer: {
    backgroundColor: Colors.APP_WHITE,
    height: 40,
    width: 40,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 9,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 15,
    resizeMode: 'contain',
  },
});

export default HeaderHome;
