import React from 'react';
import {MainContainer} from '../Components';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native';
import Colors from '../Theme/Colors';
import Fonts from '../Theme/Fonts';
import Images from '../Assets/Images';
import Calendar from 'react-native-vector-icons/AntDesign';
import Checkbox from 'react-native-vector-icons/MaterialCommunityIcons';

let {profileHome} = Images;

const LeavesDetail = () => {
  return (
    <MainContainer>
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={{marginTop: 30}}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image {...profileHome} />
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={{...Fonts.getMediumFont(16, Colors.APP_BLACK)}}>
                Harsh Sharma
              </Text>
              <Text style={{...Fonts.getMediumFont(12)}}>
                Requested on 30 Mar, 2023
              </Text>
            </View>
          </View>
        </View>

        <View style={{marginTop: 40}}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                borderRadius: 5,
                backgroundColor: '#ffa9411a',
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Calendar name="calendar" size={16} color={'#ffa941'} />
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={{...Fonts.getMediumFont(16, Colors.APP_BLACK)}}>
                Harsh Sharma
              </Text>
              <Text style={{...Fonts.getMediumFont(12)}}>
                1.0 days of unpaid Leaves
              </Text>
            </View>
          </View>
        </View>

        <View style={{marginTop: 40}}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image {...profileHome} />
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={{...Fonts.getMediumFont(16, Colors.APP_BLACK)}}>
                Harsh Sharma
              </Text>
              <Text style={{...Fonts.getMediumFont(12)}}>
                I'm still having fever,cough and cold.Please allow me one day
                extra leave.
              </Text>
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 20}}>
          <Checkbox
            name="checkbox-marked-circle"
            size={17}
            color={Colors.APP_GREEN}
          />
          <Text
            style={{
              ...Fonts.getRegularFont(14, Colors.APP_BLACK),
              marginLeft: 10,
            }}>
            Request Approved by Sitesh Sharma
          </Text>
        </View>
      </SafeAreaView>
    </MainContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  safeAreaContainer: {
    marginHorizontal: 20,
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
  },
});

export default LeavesDetail;
