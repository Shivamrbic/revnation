import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../Screens/Splash';
import BottomTab from './BottomTab';
// import VerificationScreen from '../Screens/Verification';
import ProjectDetails from '../Screens/ProjectDetails';
import LeavesScreen from '../Screens/Leave';
import OvertimeScreen from '../Screens/Overtime';
import OvertimeRequestScreen from '../Screens/OvertimeRequest';
import AttendanceDetailsScreen from '../Screens/AttendanceDetails';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Plus from 'react-native-vector-icons/AntDesign';
import ApplyLeave from '../Screens/ApplyLeaves';
import Fonts from '../Theme/Fonts';
import Header from '../Components/HeaderHome';
import Colors from '../Theme/Colors';
import {StyleSheet} from 'react-native';
import Arrow from 'react-native-vector-icons/AntDesign';
import LeavesDetail from '../Screens/LeavesDetails';
import Project from '../Screens/Projects';
import MyExpense from '../Screens/MyExpenses';
import AddExpense from '../Screens/AddExpense';
import NotifyScreen from '../Screens/NotificationScreen';
import LeaveBalance from '../Screens/LeaveBalance';
import LoginScreen from '../Screens/LoginScreen';
const Stack = createNativeStackNavigator();

const StackNavigator = props => {
  //
  const {isLogin} = props;
  console.log('data', isLogin);

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}
      initialRouteName={isLogin ? 'Home' : 'Splash'}>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Verification"
        component={VerificationScreen}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="Home"
        component={BottomTab}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ProjectDetails"
        component={ProjectDetails}
        options={({route, navigation}) => ({
          // headerLeft: () => (
          //   <TouchableOpacity
          //     style={{marginLeft: 5}}
          //     onPress={() => navigation.navigate('Home')}>
          //     <View style={styles.iconContainer}>
          //       <Image source={require('../Assets/Images/BackArrow.png')} />
          //     </View>
          //   </TouchableOpacity>
          // ),
          // headerTitle: () => (
          //   <Text style={{fontSize: 15, fontWeight: '700', color: 'black'}}>
          //     {projectName}
          //   </Text>
          // ),
          // headerRight: () => (
          //   <TouchableOpacity
          //     style={styles.iconContainer}
          //     onPress={() => navigation?.navigate('Overtime')}>
          //     <Icon
          //       name="clipboard-clock-outline"
          //       size={28}
          //       color={'#5364FF'}
          //     />
          //   </TouchableOpacity>
          // ),
        })}
      />

      <Stack.Screen
        name="Overtime"
        component={OvertimeScreen}
        options={({navigation}) => ({
          headerTitle: 'Overtime Requests',
          headerRight: () => (
            <View>
              <TouchableOpacity
                onPress={() => navigation?.navigate('OvertimeRequest')}>
                <Plus name="plus" size={28} color={Colors.APP_BLUE} />
              </TouchableOpacity>
            </View>
          ),
        })}
      />

      <Stack.Screen
        name="OvertimeRequest"
        component={OvertimeRequestScreen}
        options={{headerTitle: 'Overtime Request'}}
      />
      <Stack.Screen
        name="AttendanceDetails"
        component={AttendanceDetailsScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Leaves"
        component={LeavesScreen}
        options={({route, navigation}) => ({
          headerLeft: () => (
            <TouchableOpacity style={{marginLeft: 5, marginBottom: 10}}>
              <View style={styles.iconContainer}>
                <Arrow
                  name="arrowleft"
                  size={18}
                  onPress={() => navigation.navigate('Services')}
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View>
              <TouchableOpacity
                onPress={() => navigation?.navigate('ApplyLeave')}>
                <Plus name="plus" size={28} color={Colors.APP_BLUE} />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="ApplyLeave"
        component={ApplyLeave}
        options={({route, navigation}) => ({
          headerTitle: 'Apply Leaves',
          headerLeft: () => (
            <TouchableOpacity style={{marginLeft: 5, marginBottom: 10}}>
              <View style={styles.iconContainer}>
                <Arrow
                  name="arrowleft"
                  size={18}
                  onPress={() => navigation.navigate('Leaves')}
                />
              </View>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="LeavesDetail"
        component={LeavesDetail}
        options={({route, navigation}) => ({
          headerTitle: 'Leaves Details',
          headerLeft: () => (
            <TouchableOpacity style={{marginLeft: 5, marginBottom: 10}}>
              <View style={styles.iconContainer}>
                <Arrow
                  name="arrowleft"
                  size={18}
                  onPress={() => navigation.navigate('Leaves')}
                />
              </View>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Project"
        component={Project}
        options={({route, navigation}) => ({
          headerTitle: 'Projects ',
          headerLeft: () => (
            <TouchableOpacity style={{marginLeft: 5, marginBottom: 10}}>
              <View style={styles.iconContainer}>
                <Arrow
                  name="arrowleft"
                  size={18}
                  onPress={() => navigation.navigate('Services')}
                />
              </View>
            </TouchableOpacity>
          ),
        })}
      />

      <Stack.Screen
        name="MyExpense"
        component={MyExpense}
        options={({route, navigation}) => ({
          headerTitle: 'My Expense',
          headerLeft: () => (
            <TouchableOpacity style={{marginLeft: 5, marginBottom: 10}}>
              <View style={styles.iconContainer}>
                <Arrow
                  name="arrowleft"
                  size={18}
                  onPress={() => navigation.navigate('Services')}
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View>
              <TouchableOpacity
                onPress={() => navigation?.navigate('AddExpense')}>
                <Plus name="plus" size={28} color={Colors.APP_BLUE} />
              </TouchableOpacity>
            </View>
          ),
        })}
      />

      <Stack.Screen
        name="AddExpense"
        component={AddExpense}
        options={({route, navigation}) => ({
          headerTitle: 'Add Expenses ',
          headerLeft: () => (
            <TouchableOpacity style={{marginLeft: 5, marginBottom: 10}}>
              <View style={styles.iconContainer}>
                <Arrow
                  name="arrowleft"
                  size={18}
                  onPress={() => navigation.navigate('MyExpense')}
                />
              </View>
            </TouchableOpacity>
          ),
        })}
      />

      <Stack.Screen
        name="NotifyScreen"
        component={NotifyScreen}
        options={({route, navigation}) => ({
          headerTitle: 'Notifications',
          headerLeft: () => (
            <TouchableOpacity style={{marginLeft: 5, marginBottom: 10}}>
              <View style={styles.iconContainer}>
                <Arrow
                  name="arrowleft"
                  size={18}
                  onPress={() => navigation.navigate('Home')}
                />
              </View>
            </TouchableOpacity>
          ),
        })}
      />

      <Stack.Screen
        name="LeaveBalance"
        component={LeaveBalance}
        options={({route, navigation}) => ({
          headerTitle: 'Leaves',
          headerLeft: () => (
            <TouchableOpacity style={{marginLeft: 5, marginBottom: 10}}>
              <View style={styles.iconContainer}>
                <Arrow
                  name="arrowleft"
                  size={18}
                  onPress={() => navigation.navigate('Services')}
                />
              </View>
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: Colors.APP_WHITE,
    height: 40,
    width: 40,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
});
export default StackNavigator;
