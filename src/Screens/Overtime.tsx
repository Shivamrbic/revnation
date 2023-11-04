import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MainContainer} from '../Components';
import Colors from '../Theme/Colors';
import Fonts from '../Theme/Fonts';

const OvertimeScreen = () => {
  return (
    <MainContainer>
      <View>
        <Text>This Week</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View
            style={{
              borderRadius: 5,
              backgroundColor: '#FEE9F6',
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#DC4494'}}>Mar</Text>
          </View>
          <View>
            <Text>04h 30m</Text>
            <Text>Demo Project Name</Text>
          </View>

          <View
            style={{
              borderRadius: 5,
              backgroundColor: '#E6F0FF',
              width: 81,
              height: 29,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{...Fonts.getRegularFont(10, '#1A72F2')}}>
              Pending
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View
            style={{
              borderRadius: 5,
              backgroundColor: '#FEE9F6',
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#DC4494'}}>Mar</Text>
          </View>
          <View>
            <Text>04h 30m</Text>
            <Text>Demo Project Name</Text>
          </View>

          <View
            style={{
              borderRadius: 5,
              backgroundColor: '#E3FEDB',
              width: 81,
              height: 29,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{...Fonts.getRegularFont(10, '#3FA456')}}>
              Approved
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View
            style={{
              borderRadius: 5,
              backgroundColor: '#FEE9F6',
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#DC4494'}}>Mar</Text>
          </View>
          <View>
            <Text>04h 30m</Text>
            <Text>Demo Project Name</Text>
          </View>

          <View
            style={{
              borderRadius: 5,
              backgroundColor: '#FFE9E9',
              width: 81,
              height: 29,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{...Fonts.getRegularFont(10, '#CB2F32')}}>
              Rejected
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View
            style={{
              borderRadius: 5,
              backgroundColor: '#FEE9F6',
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#DC4494'}}>Mar</Text>
          </View>
          <View>
            <Text>04h 30m</Text>
            <Text>Demo Project Name</Text>
          </View>

          <View
            style={{
              borderRadius: 5,
              backgroundColor: '#E3FEDB',
              width: 81,
              height: 29,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{...Fonts.getRegularFont(10, '#3FA456')}}>
              Approved
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View
            style={{
              borderRadius: 5,
              backgroundColor: '#FEE9F6',
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#DC4494'}}>Mar</Text>
          </View>
          <View>
            <Text style={{...Fonts.getRegularFont(14, Colors.APP_BLACK)}}>
              04h 30m
            </Text>
            <Text>Demo Project Name</Text>
          </View>

          <View
            style={{
              borderRadius: 5,
              backgroundColor: '#E3FEDB',
              width: 81,
              height: 29,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{...Fonts.getRegularFont(10, '#3FA456')}}>
              Approved
            </Text>
          </View>
        </View>
      </View>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: Colors.APP_WHITE,
    borderStyle: 'solid',
    marginHorizontal: 15,
    shadowColor: Colors.APP_CARD_BORDER,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.7,
    shadowRadius: 5,
  },
  innerContainer: {
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default OvertimeScreen;
