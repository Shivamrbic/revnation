import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/Home';
import AttendanceScreen from '../Screens/Attendance';
import ServicesScreen from '../Screens/Services';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Bell from 'react-native-vector-icons/SimpleLineIcons';
import Colors from '../Theme/Colors';
import Arrow from 'react-native-vector-icons/AntDesign';
import Fonts from '../Theme/Fonts';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        headerTitleAlign: 'center',
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: Colors.APP_CARD_BORDER,
        },
        tabBarStyle: {
          position: 'absolute',
          marginBottom: 30,
          marginHorizontal: 30,
          backgroundColor: '#ffffff',
          borderRadius: 20,
          height: 60,
          shadowColor: '#000000',
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 0.1,
          shadowRadius: 40,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: '',
          tabBarIcon: ({focused, size, color}) => {
            return (
              <View style={{marginTop: 15}}>
                {focused ? (
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                      source={require('../Assets/Images/bikeIcon.png')}
                      style={styles.unfocusedImage}
                    />
                    <Text style={Fonts.getSemiBoldFont(12, Colors.APP_ORANGE)}>
                      Rides
                    </Text>
                  </View>
                ) : (
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                      source={require('../Assets/Images/unfocusedBikeIcon.png')}
                      style={styles.image}
                    />
                    <Text style={Fonts.getSemiBoldFont(12, Colors.APP_GRAY)}>
                      Rides
                    </Text>
                  </View>
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Attendance"
        component={AttendanceScreen}
        options={({navigation}) => ({
          title: '',
          headerShown: true,
          headerTitle: 'Attendance',

          // headerLeft: () => (
          //   <TouchableOpacity style={{marginLeft: 15, marginBottom: 10}}>
          //     <View style={styles.iconContainer}>
          //       <Arrow
          //         name="arrowleft"
          //         size={18}
          //         onPress={() => navigation.navigate('Home')}
          //       />
          //     </View>
          //   </TouchableOpacity>
          // ),
          // headerRight: () => (
          //   <View>
          //     <TouchableOpacity
          //       onPress={() => navigation?.navigate('Overtime')}
          //       style={{marginRight: 15}}>
          //       <Icon
          //         name="clipboard-clock-outline"
          //         size={28}
          //         color={'#5364FF'}
          //       />
          //     </TouchableOpacity>
          //   </View>
          // ),
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View style={{marginTop: 15}}>
                {focused ? (
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                      source={require('../Assets/Images/focusedGroupIcon.png')}
                      style={{height: 24, width: 28}}
                    />
                    <Text style={Fonts.getSemiBoldFont(12, Colors.APP_ORANGE)}>
                      Groups
                    </Text>
                  </View>
                ) : (
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                      source={require('../Assets/Images/groupIcon.png')}
                      style={{height: 24, width: 24}}
                    />
                    <Text style={Fonts.getSemiBoldFont(12, Colors.APP_GRAY)}>
                      Groups
                    </Text>
                  </View>
                )}
              </View>
            );
          },
        })}
      />
      <Tab.Screen
        name="Services"
        component={ServicesScreen}
        options={({navigation}) => ({
          title: '',
          headerShown: true,
          headerTitle: 'Services',
          // headerLeft: () => (
          //   <TouchableOpacity style={{marginLeft: 15}}>
          //     <View style={styles.iconContainer}>
          //       <Arrow
          //         name="arrowleft"
          //         size={18}
          //         onPress={() => navigation.navigate('Home')}
          //       />
          //     </View>
          //   </TouchableOpacity>
          // ),
          // headerRight: () => (
          //   <View>
          //     <TouchableOpacity
          //       onPress={() => navigation?.navigate('NotifyScreen')}
          //       style={{marginRight: 15}}>
          //       <View style={styles.iconContainer}>
          //         <Image
          //           source={require('../Assets/Images/notification.png')}
          //         />
          //       </View>
          //     </TouchableOpacity>
          //   </View>
          // ),
          tabBarIcon: ({focused}) => {
            return (
              <View style={{marginTop: 15}}>
                {focused ? (
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                      source={require('../Assets/Images/focusedUserIcon.png')}
                      style={{height: 26, width: 20}}
                    />
                    <Text style={Fonts.getSemiBoldFont(12, Colors.APP_ORANGE)}>
                      Me
                    </Text>
                  </View>
                ) : (
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                      source={require('../Assets/Images/userIcon.png')}
                      style={{height: 24, width: 24}}
                    />
                    <Text style={Fonts.getSemiBoldFont(12, Colors.APP_GRAY)}>
                      Me
                    </Text>
                  </View>
                )}
              </View>
            );
          },
        })}
      />
    </Tab.Navigator>
  );
}

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
    elevation: 9,
  },
  image: {
    height: 22,
    width: 32,
  },
  unfocusedImage: {
    height: 26,
    width: 32,
  },
});

export default BottomTab;
