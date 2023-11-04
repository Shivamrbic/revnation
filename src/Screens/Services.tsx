import React from 'react';
import MainContainer from '../Components/MainContainer';
import {Card, Text} from 'react-native-paper';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Colors from '../Theme/Colors';
import Fonts from '../Theme/Fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ServicesScreen = ({navigation}) => {
  const handleLogOut = async () => {
    AsyncStorage.clear();
    navigation.navigate('Login');
  };

  return (
    <MainContainer>
      <ScrollView>
        <TouchableOpacity onPress={() => handleLogOut()}>
          <View style={styles.container}>
            <View style={styles.innerContainer}>
              <View style={styles.text}>
                <View style={styles.imageBox}>
                  <Image
                    source={require('../Assets/Images/Logout.png')}
                    style={styles.imageStyle}
                  />
                </View>
                <Text style={Fonts.getSemiBoldFont(16, Colors.APP_BLACK)}>
                  Logout
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        {/*  <TouchableOpacity onPress={() => navigation.navigate('Leaves')}>
          <View style={styles.container}>
            <View style={styles.innerContainer}>
              <View style={styles.text}>
                <Image source={require('../Assets/Images/Leave.png')} />
                <Text>Leave</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Overtime')}>
          <View style={styles.container}>
            <View style={styles.innerContainer}>
              <View style={styles.text}>
                <Image source={require('../Assets/Images/Overtime.png')} />
                <Text>Overtime Request</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.container}>
            <View style={styles.innerContainer}>
              <View style={styles.text}>
                <Image source={require('../Assets/Images/benefits.png')} />
                <Text style={styles.text}>Benefits</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.container}>
            <View style={styles.innerContainer}>
              <View style={styles.text}>
                <Image source={require('../Assets/Images/Perform.png')} />
                <Text>Performance</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Project')}>
          <View style={styles.container}>
            <View style={styles.innerContainer}>
              <View style={styles.text}>
                <Image source={require('../Assets/Images/Project.png')} />
                <Text>Projects</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.container}>
            <View style={styles.innerContainer}>
              <View style={styles.text}>
                <Image source={require('../Assets/Images/Organization.png')} />
                <Text>Organization</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('MyExpense')}>
          <View style={styles.container}>
            <View style={styles.innerContainer}>
              <View style={styles.text}>
                <Image source={require('../Assets/Images/Pending.png')} />
                <Text>Pending Expenses</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.container}>
            <View style={styles.innerContainer}>
              <View style={styles.text}>
                <Image source={require('../Assets/Images/Report.png')} />
                <Text>Reports</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity> */}
      </ScrollView>

      {/* <View>
        <Card style={styles.card}>
          <Card.Content>
            <Text>
              <Image source={require('../Assets/Images/Report.png')} />
              Reports
            </Text>
          </Card.Content>
        </Card>
      </View> */}
    </MainContainer>
  );
};

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
    height: 60,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 8,
  },
  innerContainer: {
    display: 'flex',
    margin: 10,
    // justifyContent: 'center',
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
  },
  text: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    width: '100%',
  },
  arrow: {
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
  },
  imageBox: {
    padding: 1,
    backgroundColor: 'rgba(215, 169, 76, 0.1)',
    borderRadius: 5,
  },
  imageStyle: {
    width: 20,
    height: 20,
    margin: 10,
    tintColor: 'rgba(215, 169, 76, 1)',
  },
});
export default ServicesScreen;
