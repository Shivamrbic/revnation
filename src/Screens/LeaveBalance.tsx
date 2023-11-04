import React from 'react';
import {MainContainer} from '../Components';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native';
import Fonts from '../Theme/Fonts';
import Colors from '../Theme/Colors';

const LeaveBalance = ({navigation}) => {
  return (
    <MainContainer>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View
          style={{
            borderRadius: 2,
            width: '50%',
            height: 44,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Leaves')}>
            <Text
              style={{
                ...Fonts.getMediumFont(14, Colors.APP_FORM_FIELD_SEPARATOR),
              }}>
              Leave History
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderRadius: 2,
            backgroundColor: '#5364FF',
            width: '50%',
            height: 44,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity>
            <Text
              style={{
                ...Fonts.getMediumFont(14, Colors.APP_WHITE),
              }}>
              Leave Balance
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <TouchableOpacity>
          <View style={styles.container}>
            <View style={styles.innerContainer}>
              <View style={styles.inputContainer}>
                <View style={styles.box}>
                  <Text style={{color: '#DC4494'}}>3</Text>
                </View>
                <View style={{marginRight: 60}}>
                  <Text style={{...Fonts.getRegularFont(14, Colors.APP_BLACK)}}>
                    Casual Leave
                  </Text>
                  <Text style={{...Fonts.getLightFont(10)}}>
                    Days Available
                  </Text>
                </View>
                <View style={styles.status}>
                  <Text style={{...Fonts.getRegularFont(10, '#5364FF')}}>
                    Apply
                  </Text>
                </View>
              </View>
              <View style={styles.line} />
              <View style={{flexDirection: 'row'}}>
                <View style={{alignItems: 'center'}}>
                  <Text>1.5</Text>
                  <Text style={styles.text}>Accured so far</Text>
                </View>
                <View style={styles.lineStyle} />
                <View style={{alignItems: 'center'}}>
                  <Text>0.5</Text>
                  <Text style={styles.text}>consumed</Text>
                </View>
                <View style={styles.lineStyle} />
                <View style={{alignItems: 'center'}}>
                  <Text>6</Text>
                  <Text style={styles.text}>annual quota</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.container}>
            <View style={styles.innerContainer}>
              <View style={styles.inputContainer}>
                <View style={styles.paidbox}>
                  <Text style={{color: '#3CD6C3'}}>3</Text>
                </View>
                <View style={{marginRight: 60}}>
                  <Text style={{...Fonts.getRegularFont(14, Colors.APP_BLACK)}}>
                    Paid Leave
                  </Text>
                  <Text style={{...Fonts.getLightFont(10)}}>
                    Days Available
                  </Text>
                </View>
                <View style={styles.status}>
                  <Text style={{...Fonts.getRegularFont(10, '#5364FF')}}>
                    Apply
                  </Text>
                </View>
              </View>
              <View style={styles.line} />
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderColor: Colors.APP_CARD_BORDER,
                    padding: 5,
                    width: '35%',
                  }}>
                  <Text>1.5</Text>
                  <Text style={styles.text}>Accured so far</Text>
                </View>
                {/* <View style={styles.lineStyle} /> */}
                <View
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderColor: Colors.APP_CARD_BORDER,
                    padding: 5,
                    width: '35%',
                  }}>
                  <Text>0.5</Text>
                  <Text style={styles.text}>consumed</Text>
                </View>
                {/* <View style={styles.lineStyle} /> */}

                <View
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderColor: Colors.APP_CARD_BORDER,
                    padding: 5,
                    width: '35%',
                  }}>
                  <Text>6</Text>
                  <Text style={styles.text}>annual quota</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </MainContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderRadius: 10,
    height: 113,
    backgroundColor: Colors.APP_WHITE,
    borderStyle: 'solid',
    marginHorizontal: 15,
    borderColor: Colors.APP_CARD_BORDER,
    borderWidth: 1,
  },
  innerContainer: {
    margin: 15,
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paidbox: {
    borderRadius: 5,
    backgroundColor: '#3CD6C31A',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    borderRadius: 5,
    backgroundColor: '#FEE9F6',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  status: {
    borderRadius: 20,
    backgroundColor: '#5264ff1a',
    width: 81,
    height: 29,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lineStyle: {
    borderWidth: 1,
    borderColor: Colors.APP_CARD_BORDER,
    margin: 10,
    width: 33,
    transform: [{rotate: '90deg'}],
  },
  line: {
    borderWidth: 1,
    borderColor: Colors.APP_CARD_BORDER,
    margin: 7,
    width: '100%',
  },
  text: {
    ...Fonts.getLightFont(10, Colors.APP_FORM_FIELD_SEPARATOR),
  },
});
export default LeaveBalance;
