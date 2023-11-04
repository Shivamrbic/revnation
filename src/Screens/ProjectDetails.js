import React, {useEffect, useState, useLayoutEffect} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  Image,
  DatePickerIOSComponent,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  Alert,
} from 'react-native';
import {View} from 'react-native';
import MainContainer from '../Components/MainContainer';
import Fonts from '../Theme/Fonts';
import Colors from '../Theme/Colors';
import {ProgressBar} from 'react-native-paper';
import Images from '../Assets/Images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {
  timeSheetList,
  checkInData,
  checkOutData,
  labourCheckInData,
} from '../Redux/Actions/UserActions';
import Validator from '../Utils/Validator';

const ProjectDetails = ({navigation, route}) => {
  const {projectData, projectId, projectName} = route.params;
  const [workingHour, setWorkingHour] = useState(['00:00:00']);
  const [active, setActive] = useState(false);
  const [buttonText, setButtonText] = useState('Check-In');
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch();

  let timeList = useSelector(state => state?.UserReducer?.timeSheetList);
  let loading = useSelector(state => state?.UserReducer?.timeSheetListLoading);

  timeList = timeList?.filter(user => {
    return user.project_id == projectId;
  });

  let filteredUsers = projectData?.projects?.filter(user => {
    return user.id == projectId;
  });

  useEffect(() => {
    if (loading == false) {
      handleWorkTime();
      handleClick();
    }
  }, [loading]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text style={{fontSize: 15, fontWeight: '700', color: 'black'}}>
          {projectName}
        </Text>
      ),
    });
  }, []);

  useEffect(() => {
    const intervel = setInterval(() => {
      handleWorkTime();
    }, 1000);
    return () => clearInterval(intervel);
  }, [workingHour]);

  useEffect(() => {
    handleTimeSheet();
  }, []);

  const handleWorkTime = () => {
    let ans = Validator?.workingTime(timeList[0]);
    ans = ans?.split(':');
    setWorkingHour(ans);
  };

  const handleTimeSheet = () => {
    AsyncStorage.getItem('token').then(resToken => {
      //console.log('Token', resToken);

      if (resToken?.length > 0) {
        dispatch(timeSheetList(resToken));
      }
    });
  };

  const handleCheckin = () => {
    AsyncStorage.getItem('token').then(resToken => {
      if (resToken?.length > 0) {
        dispatch(checkInData(resToken, projectId));
      }
    });
  };

  const handleCheckout = () => {
    AsyncStorage.getItem('token').then(resToken => {
      if (resToken?.length > 0) {
        dispatch(checkOutData(resToken, projectId));
      }
    });
  };

  const handleClick = () => {
    if (!!timeList && timeList[0]?.is_checked_in == 1) {
      setButtonText('Check-out');
      setActive(true);
    }
    if (!!timeList && timeList[0]?.is_checked_out == 1) {
      setButtonText('Check-In');
      setActive(false);
    }
  };
  const onRefresh = () => {
    setRefreshing(true);
    handleWorkTime();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const handleCheckOutAlert = () => {
    Alert.alert('Alert!!', 'Are you sure want to Check Out', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {text: 'OK', onPress: () => handleCheckout()},
    ]);
  };

  return (
    <ScrollView
      contentContainerStyle={{flex: 1}}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {/* <MainContainer> */}
      {/* <View>
        <DatePicker date={chosenDate} onDateChange={setChosenDate} />
      </View> */}

      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 20,
              marginBottom: 15,
            }}>
            <View style={styles.hours}>
              <Text style={{...Fonts.getMediumFont(20, Colors.APP_BLACK)}}>
                {workingHour[0]}
              </Text>
            </View>
            <View style={styles.hours}>
              <Text style={{...Fonts.getMediumFont(20, Colors.APP_BLACK)}}>
                {workingHour[1]}
              </Text>
            </View>
            <View style={styles.hours}>
              <Text style={{...Fonts.getMediumFont(20, Colors.APP_BLACK)}}>
                {workingHour[2]}
              </Text>
            </View>
            <Text
              style={{
                ...Fonts.getSemiBoldFont(15, Colors.APP_BLACK),
                paddingTop: '5%',
              }}>
              HRS
            </Text>
          </View>

          <View
            style={{
              height: 2,
              backgroundColor: '#FEE9F6',
              marginHorizontal: 5,
              marginTop: 5,
            }}></View>

          {/* <ProgressBar progress={4 / 8} color={Colors.APP_FLAG} /> */}
          <View style={{alignItems: 'center', marginTop: 10}}>
            <Text
              style={{
                ...Fonts.getMediumFont(10, Colors.APP_BLACK),
                marginBottom: 10,
              }}>
              General 09:00 AM TO 06:00 PM
            </Text>
          </View>

          <View style={{alignItems: 'center', marginTop: 5, marginBottom: 5}}>
            <TouchableOpacity
              disabled={
                timeList && timeList[0]?.is_checked_out == 1 ? true : false
              }
              onPress={() => {
                !!active ? handleCheckOutAlert() : handleCheckin();
              }}
              style={{
                backgroundColor: active
                  ? Colors.APP_RED
                  : Colors.APP_GREEN_BUTTON,
                width: 122,
                height: 38,
                borderRadius: 10,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={require('../Assets/Images/stopWatch.png')} />

              <Text style={{color: 'white'}}> {buttonText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View>
            <Text
              style={{
                ...Fonts.getMediumFont(16, Colors.APP_BLACK),
                marginBottom: 5,
              }}>
              About Project
            </Text>
          </View>
          <View>
            <Text
              numberOfLines={3}
              ellipsizeMode="tail"
              style={Fonts.getRegularFont(12)}>
              {filteredUsers[0]?.description}
            </Text>
          </View>
          {/* <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text
                style={{
                  ...Fonts.getMediumFont(10, Colors.APP_BLACK),
                  marginLeft: 10,
                }}>
                Progress
              </Text>
              <Text
                style={{
                  ...Fonts.getBoldFont(14, Colors.APP_BLACK),
                  marginRight: 10,
                }}>
                45%
              </Text>
            </View>
            <View>
              <ProgressBar
                progress={45 / 100}
                style={{marginTop: 5, marginBottom: 15, borderRadius: 3}}
                color={Colors.APP_ORANGE}
              />
            </View> */}
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View>
              <Image {...Images.profileCard} />
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={{...Fonts.getRegularFont(14, Colors.APP_BLACK)}}>
                {projectData?.length > 0
                  ? projectData?.supervisor?.first_name +
                    ' ' +
                    projectData?.supervisor?.last_name
                  : null}
              </Text>
              <Text style={styles.text}>Supervisor</Text>
            </View>
          </View>

          <View
            style={{
              alignItems: 'center',
              marginTop: 40,
              marginBottom: 10,
            }}>
            <Text style={styles.hour}>__ HRS</Text>
          </View>
          <View style={{alignItems: 'center', marginBottom: 30}}>
            <Text style={styles.text}>
              Your total Working Hours in this Project
            </Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.text}>Starting Date</Text>
            <Text style={styles.text}>Deadline Date</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <Image source={require('../Assets/Images/greenFlag.png')} />
              <Text style={Fonts.getMediumFont(12, Colors.APP_BLACK)}>
                {new Date(filteredUsers[0]?.start_date).toDateString()}
              </Text>
            </View>

            {/* <View style={{width: 74}}>
                <ProgressBar progress={45 / 100} color={Colors.APP_FLAG} />
              </View> */}
            <View>
              <Image source={require('../Assets/Images/redFlag.png')} />
              <Text style={Fonts.getMediumFont(12, Colors.APP_BLACK)}>
                {new Date(filteredUsers[0]?.end_date).toDateString()}
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* </MainContainer> */}
    </ScrollView>
  );
};

// ProjectDetails.navigationOptions = navData => {
//   return {
//     headerTitle: 'Home',
//     // headerRight: () => (
//     //   <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
//     //     <Item
//     //       title="Setting"
//     //       iconName="ios-settings-outline"
//     //       onPress={() => navData.navigation.navigate('Setting')}
//     //     />
//     //   </HeaderButtons>
//     // ),
//   };
// };

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: Colors.APP_WHITE,
    borderStyle: 'solid',
    marginHorizontal: 20,
    //shadowColor: '#000000',
    //shadowOffset: {width: 0, height: 0},
    //shadowOpacity: 0.7,
    //shadowRadius: 5,
    //elevation: 1,
  },
  innerContainer: {
    margin: 15,
  },
  // button: {
  //   borderRadius: 10,
  //   backgroundColor: active ? 'green' : 'red',
  //   // marginHorizontal: '30%',
  //   width: 122,
  //   height: 38,
  // },
  hours: {
    borderRadius: 5,
    backgroundColor: '#FEE9F6',
    height: 50,
    width: 50,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hour: {
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: '#5364ff1a',
    width: 106,
    height: 44,
    paddingTop: '4%',
    textAlign: 'center',
    ...Fonts.getSemiBoldFont(16, Colors.APP_BLACK),
  },
  text: {
    ...Fonts.getLightFont(12, '#7E7E7E'),
    lineHeight: 15,
  },
});

export default ProjectDetails;
