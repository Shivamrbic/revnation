import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

import Fonts from '../Theme/Fonts';
import Colors from '../Theme/Colors';
import moment from 'moment';

const AttendanceCard = ({navigation, data}) => {
  const {item} = data;

  return (
    <>
      {item.attendance === 'Sick Leave' && (
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderRadius: 5,
                  backgroundColor: '#ffa9411a',
                  width: 40,
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#ffa941'}}>L</Text>
              </View>
              <View style={{marginRight: 60}}>
                <Text style={{...Fonts.getRegularFont(14)}}>
                  {moment(item?.date).format('ddd,D MMM')}
                </Text>
              </View>
              <View style={{marginRight: 30}}>
                <Text style={{...Fonts.getRegularFont(14, '#ffa941')}}>
                  {item?.attendance}
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
      {item.attendance === 'Present' && (
        <TouchableOpacity
          style={styles.container}
          onPress={() =>
            navigation.navigate('AttendanceDetails', {item: item})
          }>
          <View style={styles.innerContainer}>
            <View style={styles.card}>
              <View
                style={{
                  borderRadius: 5,
                  backgroundColor: '#E3FEDB',
                  width: 40,
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#3FA456'}}>FD</Text>
              </View>
              <View style={{marginRight: 60}}>
                <Text style={styles.date}>
                  {moment(item?.date).format('ddd, D MMM')}
                </Text>
              </View>
              <View>
                <Text style={{...Fonts.getRegularFont(14, Colors.APP_BLACK)}}>
                  {item?.hours}m
                </Text>
              </View>
              <View>
                <Image source={require('../Assets/Images/arrowForward.png')} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}

      {item.attendance === 'Absent' && moment(item?.date).weekday() !== 0 && (
        <View
          style={{
            ...styles.container,
            borderWidth: 0.5,
            borderColor: Colors.APP_RED,
          }}>
          <View style={styles.innerContainer}>
            <View style={styles.card}>
              <View
                style={{
                  borderRadius: 5,
                  backgroundColor: '#FFE9E9',
                  width: 40,
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#CB2F32'}}>A</Text>
              </View>
              <View style={{marginRight: 70}}>
                <Text style={styles.date}>
                  {moment(item?.date).format('ddd, D MMM')}
                </Text>
              </View>
              <View style={{marginRight: 30}}>
                <Text style={{...Fonts.getRegularFont(14, '#CB2F32')}}>
                  Absent
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}

      {/* <View style={styles.container}>
          <View style={styles.innerContainer}>
            <View style={styles.card}>
              <View
                style={{
                  borderRadius: 5,
                  backgroundColor: '#ffa9411a',
                  width: 40,
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#E5780B'}}>HD</Text>
              </View>
              <View style={{marginRight: 60}}>
                <Text style={styles.date}>Mon,27 Mar</Text>
              </View>
              <View>
                <Text style={{...Fonts.getRegularFont(14, Colors.APP_BLACK)}}>
                  04h 00m
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('AttendanceDetails')}>
                  <Right name="right" size={15} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

      */}
      {moment(item?.date).weekday() === 0 && (
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <View style={styles.card}>
              <View
                style={{
                  borderRadius: 5,
                  backgroundColor: '#f5f5f5',
                  width: 40,
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: Colors.APP_FORM_FIELD_SEPARATOR}}>WO</Text>
              </View>
              <View style={{marginRight: 60}}>
                <Text style={styles.date}>
                  {moment(item?.date).format('ddd, D MMM')}
                </Text>
              </View>
              <View style={{marginRight: 10}}>
                <Text style={{...Fonts.getRegularFont(14, Colors.APP_BLACK)}}>
                  WEEKLY OFF
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default AttendanceCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderRadius: 10,
    height: 60,
    backgroundColor: Colors.APP_WHITE,
    borderStyle: 'solid',
    marginHorizontal: 15,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 9,
  },
  innerContainer: {
    margin: 15,
    justifyContent: 'center',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  date: {
    ...Fonts.getRegularFont(14, Colors.APP_BLACK),
  },
});
