import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {MainContainer} from '../Components';
import Fonts from '../Theme/Fonts';
import Colors from '../Theme/Colors';

const LeavesScreen = ({navigation}) => {
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
            width: '50%',
            height: 44,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity>
            <Text style={{...Fonts.getMediumFont(14, Colors.APP_WHITE)}}>
              Leave History
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderRadius: 2,
            width: '50%',
            height: 44,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('LeaveBalance')}>
            <Text
              style={{
                ...Fonts.getMediumFont(14, Colors.APP_FORM_FIELD_SEPARATOR),
              }}>
              Leave Balance
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
                  <Text style={{color: '#DC4494'}}>3</Text>
                </View>
                <View style={{marginRight: 30}}>
                  <Text style={{...Fonts.getRegularFont(14, Colors.APP_BLACK)}}>
                    Sick Leave
                  </Text>
                  <Text style={{...Fonts.getLightFont(10)}}>
                    30-Mar-2023 to 01-Apr-2023
                  </Text>
                </View>
                <View style={styles.status}>
                  <Text style={{...Fonts.getRegularFont(10, '#1A72F2')}}>
                    Pending
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.container}>
            <View style={styles.innerContainer}>
              <View style={styles.inputContainer}>
                <View style={styles.box}>
                  <Text style={{color: '#DC4494'}}>1</Text>
                </View>
                <View style={{marginRight: 90}}>
                  <Text style={{...Fonts.getRegularFont(14, Colors.APP_BLACK)}}>
                    Sick Leave
                  </Text>
                  <Text style={{...Fonts.getLightFont(10)}}>27-Mar-2023</Text>
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
          </View>
        </TouchableOpacity>

        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <View style={styles.inputContainer}>
              <View
                style={{
                  borderRadius: 5,
                  backgroundColor: '#ffa9411a',
                  width: 40,
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#ffa941'}}>0.5</Text>
              </View>
              <View style={{marginRight: 90}}>
                <Text style={{...Fonts.getRegularFont(14, Colors.APP_BLACK)}}>
                  Paid Leave
                </Text>
                <Text style={{...Fonts.getLightFont(10)}}>30-Mar-2023</Text>
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
        </View>
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
  box: {
    borderRadius: 5,
    backgroundColor: '#FEE9F6',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  status: {
    borderRadius: 5,
    backgroundColor: '#E6F0FF',
    width: 81,
    height: 29,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default LeavesScreen;
