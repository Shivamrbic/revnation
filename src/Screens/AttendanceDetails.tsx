import React, {useLayoutEffect, useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {MainContainer} from '../Components';
import Checkbox from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../Theme/Colors';
import Fonts from '../Theme/Fonts';
import moment from 'moment';
import AttendanceDetailCard from '../Components/AttendanceDetailCard';
import {useDispatch, useSelector} from 'react-redux';

const AttendanceDetailsScreen = ({navigation, route}) => {
  const {item} = route.params;
  let date = moment(item?.date).format('dddd, D MMMM YYYY');
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: date,
    });
  }, []);

  const timeData = useSelector(
    state => state?.UserReducer?.attendanceData[0]?.timelogs,
  );
  let filterData = timeData.filter(data => {
    return moment(data?.date).format('YYYY-MM-DD') == item?.date;
  });

  return (
    <MainContainer>
      <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 20}}>
        <Image source={require('../Assets/Images/green_check.png')} />
        <Text style={{...Fonts.getRegularFont(13, Colors.APP_GRAY)}}>
          On Time
        </Text>
      </View>
      <View style={{marginHorizontal: 20, marginTop: 20}}>
        <Text style={{...Fonts.getRegularFont(14, Colors.APP_BLACK)}}>
          Shift Hours: 09:00 (General)
        </Text>
      </View>
      {filterData.length > 0 &&
        filterData.map((data, i) => (
          <AttendanceDetailCard data={data} key={i} />
        ))}

      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View style={styles.shiftContainer}>
          <View style={styles.innerContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <Image
                source={require('../Assets/Images/greenEllipse.png')}
                style={{marginRight: 5}}
              />
              <Text style={{...Fonts.getRegularFont(13, Colors.APP_GRAY)}}>
                Worked Hours
              </Text>
            </View>

            <Text style={{...Fonts.getSemiBoldFont(14, Colors.APP_BLACK)}}>
              {item?.hours} Hrs
            </Text>
          </View>
        </View>

        <View style={styles.shiftContainer}>
          <View style={styles.innerContainer}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../Assets/Images/redEllipse.png')}
                style={{marginRight: 5}}
              />
              <Text style={{...Fonts.getRegularFont(13, Colors.APP_GRAY)}}>
                Overtime Hours
              </Text>
            </View>

            <Text style={{...Fonts.getSemiBoldFont(14, Colors.APP_BLACK)}}>
              {item?.overtime} Hrs
            </Text>
          </View>
        </View>
      </View>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    margin: 15,
    alignItems: 'center',
  },
  shiftContainer: {
    marginTop: 20,
    borderRadius: 10,
    height: 70,
    backgroundColor: Colors.APP_WHITE,
    borderStyle: 'solid',
    marginHorizontal: 15,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.7,
    shadowRadius: 5,
    width: 150,
    elevation: 9,
  },
});

export default AttendanceDetailsScreen;
