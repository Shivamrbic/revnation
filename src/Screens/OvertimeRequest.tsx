import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {MainContainer} from '../Components';
import Colors from '../Theme/Colors';
import Calendar from 'react-native-vector-icons/AntDesign';
import Clock from 'react-native-vector-icons/AntDesign';
import Down from 'react-native-vector-icons/AntDesign';
import FormButton from '../Components/FormButton';
import Fonts from '../Theme/Fonts';

const OvertimeRequestScreen = () => {
  return (
    <MainContainer>
      <SafeAreaView>
        <View style={styles.text}>
          <Text>Select Date*</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.innerContainer}>
            <TextInput placeholder="19-04-2023" />
            <Calendar name="calendar" size={16} />
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <View style={styles.text}>
              <Text>From Time*</Text>
            </View>
            <View style={styles.timeContainer}>
              <View style={styles.innerContainer}>
                <TextInput placeholder="06:00 PM" />
                <Clock name="clockcircleo" size={16} />
              </View>
            </View>
          </View>
          <View>
            <View style={styles.text}>
              <Text>To Time*</Text>
            </View>
            <View style={styles.timeContainer}>
              <View style={styles.innerContainer}>
                <TextInput placeholder="10:00 PM" />
                <Clock name="clockcircleo" size={16} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.text}>
          <Text>Select site/Project</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.innerContainer}>
            <TextInput placeholder="Demo project" />
            <Down name="down" size={16} />
          </View>
        </View>
        <View style={styles.text}>
          <Text>Description</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.innerContainer}>
            <TextInput placeholder="lorem2" />
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
          }}>
          <View style={styles.button}>
            <Button title="Request Overtime" color={'white'} />
          </View>
        </View>
      </SafeAreaView>
    </MainContainer>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 8,
    borderRadius: 5,
    backgroundColor: Colors.APP_FORM_FIELD_BG,
    borderStyle: 'solid',
    marginHorizontal: 15,
  },
  innerContainer: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#5364FF',
    width: '90%',
    height: 45,
    marginTop: 20,
    marginBottom: 10,
    justifyContent: 'center',
    ...Fonts.getSemiBoldFont(14, Colors.APP_WHITE),
  },
  text: {
    marginTop: '6%',
    marginHorizontal: '5%',
  },
  timeContainer: {
    marginTop: 8,
    borderRadius: 5,
    backgroundColor: Colors.APP_FORM_FIELD_BG,
    borderStyle: 'solid',
    marginHorizontal: 15,
    width: 150,
  },
});

export default OvertimeRequestScreen;
