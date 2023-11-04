import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Fonts from '../Theme/Fonts';
import Colors from '../Theme/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {
  timeSheetList,
  checkInData,
  checkOutData,
} from '../Redux/Actions/UserActions';
import Validator from '../Utils/Validator';

const CommanCheckInCard = () => {
  const [buttonText, setButtonText] = useState('Check-In');
  const [active, setActive] = useState(false);
  const [workingHour, setWorkingHour] = useState(['00:00:00']);

  const dispatch = useDispatch();
  let timeList = useSelector(state => state?.UserReducer?.timeSheetList);
  let loading = useSelector(state => state?.UserReducer?.timeSheetListLoading);

  const filterdata = data => {
    if (data.is_checked_in == 1) {
      return data;
    } else if (data.project_id == null) {
      return data;
    }
  };
  let checkData = timeList?.filter(user => filterdata(user));

  useEffect(() => {
    const intervel = setInterval(() => {
      handleWorkTime();
    }, 1000);
    return () => clearInterval(intervel);
  }, [workingHour]);

  const handleWorkTime = () => {
    let ans = Validator?.workingTime(checkData[0]);
    setWorkingHour(ans);
  };

  useEffect(() => {
    if (loading == false) {
      handleClick();
    }
  }, [loading]);

  useEffect(() => {
    handleTimeSheet();
  }, []);

  const handleTimeSheet = () => {
    AsyncStorage.getItem('token').then(resToken => {
      if (resToken?.length > 0) {
        dispatch(timeSheetList(resToken));
      }
    });
  };

  const handleCheckin = () => {
    AsyncStorage.getItem('token').then(resToken => {
      if (resToken?.length > 0) {
        dispatch(checkInData(resToken, checkData[0]?.project_id));
      }
    });
  };

  const handleCheckout = () => {
    AsyncStorage.getItem('token').then(resToken => {
      if (resToken?.length > 0) {
        dispatch(checkOutData(resToken, checkData[0]?.project_id));
      }
    });
  };

  const handleClick = () => {
    if (!!checkData && checkData[0]?.is_checked_in == 1) {
      setButtonText('Check-out');
      setActive(true);
    }
    if (!!checkData && checkData[0]?.is_checked_out == 1) {
      setButtonText('Check-In');
      setActive(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{...Fonts.getRegularFont(16, Colors.APP_BLACK)}}>
            Let's Start to work
          </Text>
          <Image
            style={{marginStart: 10}}
            source={require('../Assets/Images/LabourImage.png')}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <TouchableOpacity
            onPress={() => (!!active ? handleCheckout() : handleCheckin())}
            disabled={
              checkData && checkData[0]?.is_checked_out == 1 ? true : false
            }
            style={{
              backgroundColor: active
                ? Colors.APP_RED
                : Colors.APP_GREEN_BUTTON,
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 25,
              paddingVertical: 10,
              marginBottom: 5,
            }}>
            <Image
              style={{width: 15, height: 15}}
              source={require('../Assets/Images/stopWatch.png')}
            />

            <Text style={{color: 'white', fontSize: 12}}> {buttonText}</Text>
          </TouchableOpacity>
          <Text
            style={{
              ...Fonts.getMediumFont(11, Colors.APP_GRAY),
              marginTop: 10,
            }}>
            {checkData?.length > 0 && checkData[0]?.hours !== null
              ? `Clocked-in for ${workingHour} `
              : "You don't have Assign Projects"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CommanCheckInCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: Colors.APP_WHITE,
    borderStyle: 'solid',
    marginHorizontal: 20,
  },
  innerContainer: {
    margin: 18,
  },
});
