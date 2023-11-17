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
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getUserData} from '../Redux/Actions/UserActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CommanCheckInCard from '../Components/CommanCheckInCard';
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

  return <View style={{flex: 1}}></View>;
};

export default HomeScreen;
