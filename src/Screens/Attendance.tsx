import React, {useEffect, useState, useCallback} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View,
  FlatList,
  Dimensions,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import {useDispatch, useSelector} from 'react-redux';
import {userAttendance} from '../Redux/Actions/UserActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import AttendanceCard from '../Components/AttendanceCard';
import {MainContainer} from '../Components';
import Fonts from '../Theme/Fonts';
import Colors from '../Theme/Colors';
import Validator from '../Utils/Validator';
const dimensions = Dimensions.get('screen');
const viewHeight = dimensions.height - 210;

const AttendanceScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const userID = useSelector(state => state?.UserReducer?.userData?.id);
  const attendanceData = useSelector(
    state => state?.UserReducer?.attendanceData,
  );
  const loading = useSelector(state => state?.UserReducer?.attendanceLoading);

  const startOfMonth = moment().startOf('month').format('YYYY-MM-DD');
  const currentDate = moment().format('YYYY-MM-DD');

  const [filterAttdedanceData, setFilterAttendanceData] = useState([]);

  useEffect(() => {
    if (attendanceData?.length > 0) {
      let attArray = Validator.timeSheetArray(
        attendanceData[0]?.timelogs,
        attendanceData[0]?.leaves,
        startOfMonth,
        currentDate,
      );
      setFilterAttendanceData(attArray.reverse());
    } else {
      console.log('no data for attendance');
    }
  }, [attendanceData]);

  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem('token').then(resToken => {
        if (resToken?.length > 0) {
          let data = {
            start_date: startOfMonth,
            end_date: currentDate,
            user_id: userID,
          };
          dispatch(userAttendance(resToken, data));
          console.log('attendance api call');
        }
      });
    }, []),
  );

  return (
    <MainContainer>
      {/* <View
        style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity>
          <View
            style={{
              borderRadius: 2,
              backgroundColor: '#5364FF',
              width: 180,
              height: 44,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{...Fonts.getMediumFont(14, Colors.APP_WHITE)}}>
              Weekly
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              borderRadius: 2,
              width: 180,
              height: 44,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                ...Fonts.getMediumFont(14, Colors.APP_FORM_FIELD_SEPARATOR),
              }}>
              Monthly
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginHorizontal: 10,
          marginTop: 7,
        }}>
        <Text style={{fontSize: 15}}> This Week</Text>
      </View> */}
      <View
        style={{
          flex: 1,
          maxHeight: viewHeight,
          marginTop: 10,
        }}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            keyExtractor={item => item?.date}
            data={filterAttdedanceData}
            renderItem={item => (
              <AttendanceCard navigation={navigation} data={item} />
            )}
          />
        )}
      </View>
    </MainContainer>
  );
};

const styles = StyleSheet.create({});
export default AttendanceScreen;
