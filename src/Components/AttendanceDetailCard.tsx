import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from '../Theme/Colors';
import moment from 'moment';
import Fonts from '../Theme/Fonts';
import Validator from '../Utils/Validator';

const AttendanceDetailCard = ({data}) => {
  const [workingHour, setWorkingHour] = useState();

  useEffect(() => {
    let intervel = 0;
    if (data?.is_checked_in == 1) {
      intervel = setInterval(() => {
        handleWorkTime();
      }, 1000);
    }
    return () => clearInterval(intervel);
  }, []);

  const handleWorkTime = () => {
    let ans = Validator?.workingTime(data);
    setWorkingHour(ans);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inContainer}>
        <View style={{alignItems: 'center'}}>
          <Image source={require('../Assets/Images/blueEllipse.png')} />
          <Text style={{...Fonts.getRegularFont(13, Colors.APP_GRAY)}}>
            {!!workingHour ? workingHour : data?.hours}m
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text style={{...Fonts.getRegularFont(13, Colors.APP_GRAY)}}>
              {data?.check_in_time !== null
                ? moment(data?.check_in_time).format('LT')
                : '-'}
            </Text>
            <Image source={require('../Assets/Images/greenArrow.png')} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../Assets/Images/grayEllipse.png')}
              style={{marginRight: 5}}
            />
            <Image
              source={require('../Assets/Images/grayEllipse.png')}
              style={{marginRight: 5}}
            />
            <Image
              source={require('../Assets/Images/grayEllipse.png')}
              style={{marginRight: 5}}
            />
            <Image
              source={require('../Assets/Images/grayEllipse.png')}
              style={{marginRight: 5}}
            />
          </View>
          <View>
            <Text style={{...Fonts.getRegularFont(13, Colors.APP_GRAY)}}>
              {data?.check_out_time !== null
                ? moment(data?.check_out_time).format('LT')
                : '-'}
            </Text>
            <Image source={require('../Assets/Images/redArrow.png')} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default AttendanceDetailCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: Colors.APP_WHITE,
    borderStyle: 'solid',
    marginHorizontal: 15,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 9,
  },
  inContainer: {
    margin: 15,
  },
});
