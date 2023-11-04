import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {MainContainer} from '../Components';
import {Text} from 'react-native';
import Fonts from '../Theme/Fonts';
import Colors from '../Theme/Colors';
import {SafeAreaView} from 'react-native';

const NotifyScreen = () => {
  return (
    <MainContainer>
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 5,
          }}>
          <View
            style={{
              borderRadius: 2,
              backgroundColor: '#5364FF',
              width: 180,
              height: 44,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity>
              <Text style={{...Fonts.getMediumFont(14, Colors.APP_WHITE)}}>
                Active
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderRadius: 2,
              width: 180,
              height: 44,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  ...Fonts.getMediumFont(14, Colors.APP_FORM_FIELD_SEPARATOR),
                  marginTop: 22,
                }}>
                Archive
              </Text>
            </TouchableOpacity>
            <View style={styles.lineStyle} />
          </View>
        </View>

        <View>
          <Text style={styles.heading}>Pending Action from Web (1)</Text>
        </View>
        <View>
          <Text style={styles.msg}>
            Kindly use the web portal to take action on these tasks.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: Colors.APP_CARD_BORDER,
              height: 24,
              width: 24,
              borderRadius: 18,
              marginLeft: '5%',
            }}
          />
          <Text style={{marginRight: '60%'}}>Pulse</Text>
          <Text style={{marginRight: '10%'}}>1</Text>
        </View>
        <View style={styles.lineStyle} />
      </SafeAreaView>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  heading: {
    ...Fonts.getMediumFont(14, Colors.APP_BLACK),
    marginTop: 15,
  },
  msg: {
    marginTop: 10,
  },
  lineStyle: {
    borderWidth: 1,
    borderColor: Colors.APP_CARD_BORDER,
    margin: 15,
    width: '100%',
    // transform: [{rotate: '90deg'}],
  },
});

export default NotifyScreen;
