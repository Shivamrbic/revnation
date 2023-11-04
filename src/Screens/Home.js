import React, {useEffect, useState} from 'react';
import MainContainer from '../Components/MainContainer';
import ProjectCards from '../Components/ProjectCards';
import HeaderHome from '../Components/HeaderHome';
import PageHeading from '../Components/PageHeading';
import PageContainer from '../Components/PageContainer';
import {
  Text,
  View,
  ActivityIndicator,
  PermissionsAndroid,
  Alert,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  checkInData,
  checkOutData,
  getUserData,
} from '../Redux/Actions/UserActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CommanCheckInCard from '../Components/CommanCheckInCard';
import ReactNativeForegroundService from '@supersami/rn-foreground-service';
import RNLocation from 'react-native-location';
import {getDistanceFromLatLonInKm} from '../Utils/getDistance';
import Geolocation from '@react-native-community/geolocation';
import Fonts from '../Theme/Fonts';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    AsyncStorage.getItem('token').then(resToken => {
      if (resToken?.length > 0) {
        //console.log('token got', resToken);

        dispatch(getUserData(resToken));
      }
    });
  }, []);

  const userData = useSelector(state => state?.UserReducer?.userData);
  const loading = useSelector(state => state?.UserReducer?.userDataLoading);
  const timeList = useSelector(state => state?.UserReducer?.timeSheetList);
  const [currentLat, setCurrentLat] = useState();
  const [currentLong, setCurrentLong] = useState();

  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      success => {
        setCurrentLat(success?.coords?.latitude);
        setCurrentLong(success?.coords?.longitude);

        // console.log('watch postion success--', success);
      },
      error => {
        console.log('watch postion success--', error);
      },
      {
        showLocationDialog: true,
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0,
        distanceFilter: 0,
      },
    );
  };

  useEffect(() => {
    let difference = [];
    if (userData?.projects?.length > 0) {
      for (let projects of userData?.projects) {
        let projectLat = projects?.lat_long?.latitude;
        let projectLong = projects?.lat_long?.longitude;
        if (!!currentLat && !!currentLong) {
          let diff = getDistanceFromLatLonInKm(
            projectLat,
            projectLong,
            currentLat,
            currentLong,
          );
          difference.push({
            projectID: projects?.id,
            diff: diff,
          });
        }
      }
    }
    console.log(difference);
    const getDiff = () => {
      return difference.map(d => d.diff);
    };
    const min = () => {
      return Math.min(...getDiff());
    };
    const low = min();
    let lowest = difference.filter(d => d.diff == low);

    if (lowest[0]?.diff <= 1.0) {
      console.log('you are in the site area');

      if (
        timeList[0]?.is_checked_in === 0 &&
        timeList[0]?.is_checked_out === 0
      ) {
        AsyncStorage.getItem('token').then(resToken => {
          if (resToken?.length > 0) {
            dispatch(checkInData(resToken, lowest[0]?.projectID));
          }
        });
      }
    } else {
      console.log('else user', lowest[0]);

      if (
        timeList[0]?.is_checked_in === 1 &&
        timeList[0]?.is_checked_out === 0
      ) {
        AsyncStorage.getItem('token').then(resToken => {
          if (resToken?.length > 0) {
            dispatch(checkOutData(resToken, lowest[0]?.projectID));
          }
        });
      }
    }
  }, [userData?.projects, currentLat]);

  useEffect(() => {
    const reqPermission = async () => {
      const backgroundgranted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message:
            'We need access to your location ' +
            'so you can get live quality updates.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (backgroundgranted === PermissionsAndroid.RESULTS.GRANTED) {
        ReactNativeForegroundService.add_task(
          () => {
            subscribeLocationLocation();
          },
          {
            delay: 5000,
            onLoop: true,
            taskId: 'taskid',
            onError: e => console.log('Error logging:', e),
          },
        );
      }
    };
    reqPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"></StatusBar>
      <HeaderHome navigation={navigation} />

      <PageContainer>
        <CommanCheckInCard />

        <PageHeading>
          Assigned Projects{' '}
          <Text style={{...Fonts.getRegularFont(12)}}>{currentLat} </Text>
        </PageHeading>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <ProjectCards data={userData} navigation={navigation} />
        )}
      </PageContainer>
    </SafeAreaView>
  );
};

export default HomeScreen;
