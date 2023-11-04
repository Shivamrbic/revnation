import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {MainContainer} from '../Components';
import {Text} from 'react-native-paper';
import Colors from '../Theme/Colors';
import Fonts from '../Theme/Fonts';

const MyExpense = ({navigation}) => {
  return (
    <MainContainer>
      <View
        style={{
          flexDirection: 'row',
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
              Expenses
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
              }}>
              Claims
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('LeavesDetail')}>
          <View style={styles.container}>
            <View style={styles.innerContainer}>
              <View style={styles.inputContainer}>
                <View style={styles.box}>
                  <Text style={{color: '#DC4494'}}>30000</Text>
                </View>
                <View style={styles.lineStyle} />
                <View style={{marginRight: 30}}>
                  <Text style={{...Fonts.getRegularFont(14, Colors.APP_BLACK)}}>
                    Exp.Name
                  </Text>
                  <Text style={{...Fonts.getLightFont(10)}}>
                    Demo Project Name
                  </Text>
                </View>
                <View style={styles.status}>
                  <Text style={{...Fonts.getMediumFont(12, '#5364FF')}}>
                    Pending
                  </Text>
                  <Text
                    style={{
                      ...Fonts.getLightFont(
                        10,
                        Colors.APP_FORM_FIELD_SEPARATOR,
                      ),
                    }}>
                    19-04-2023
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('LeavesDetail')}>
          <View style={styles.container}>
            <View style={styles.innerContainer}>
              <View style={styles.inputContainer}>
                <View style={styles.box}>
                  <Text style={{color: '#DC4494'}}>30000</Text>
                </View>
                <View style={styles.lineStyle} />
                <View style={{marginRight: 30}}>
                  <Text style={{...Fonts.getRegularFont(14, Colors.APP_BLACK)}}>
                    Exp.Name
                  </Text>
                  <Text style={{...Fonts.getLightFont(10)}}>
                    Demo Project Name
                  </Text>
                </View>
                <View style={styles.status}>
                  <Text style={{...Fonts.getMediumFont(12, '#5364FF')}}>
                    Pending
                  </Text>
                  <Text
                    style={{
                      ...Fonts.getLightFont(
                        10,
                        Colors.APP_FORM_FIELD_SEPARATOR,
                      ),
                    }}>
                    19-04-2023
                  </Text>
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
    height: 60,
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
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  box: {},
  status: {},
  lineStyle: {
    borderWidth: 1,
    borderColor: Colors.APP_CARD_BORDER,
    margin: 10,
    width: 33,
    transform: [{rotate: '90deg'}],
  },
});

export default MyExpense;
