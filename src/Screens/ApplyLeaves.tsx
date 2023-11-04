import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Checkbox from 'react-native-vector-icons/Fontisto';
import {MainContainer} from '../Components';
import Colors from '../Theme/Colors';
import Clock from 'react-native-vector-icons/AntDesign';
import Calendar from 'react-native-vector-icons/AntDesign';
import Fonts from '../Theme/Fonts';
import {Button} from 'react-native';
import Attach from 'react-native-vector-icons/Entypo';

const ApplyLeave = () => {
  const [checked, setChecked] = useState(false);
  return (
    <MainContainer>
      <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 20}}>
        <Text>Half Day Leave</Text>
        <Checkbox name="checkbox-active" style={{marginLeft: 20}} />
        <Text style={{marginLeft: 10}}>Do You Need Half Day Leave</Text>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <View style={styles.text}>
            <Text>From Time*</Text>
          </View>
          <View style={styles.timeContainer}>
            <View style={styles.innerContainer}>
              <TextInput placeholder="06:00 PM" />
              <Calendar name="calendar" size={16} />
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
              <Calendar name="calendar" size={16} />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.text}>
        <Text>Leave Type*</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.innerContainer}>
          <TextInput placeholder="Unpaid Leave" />
          <Clock name="down" size={16} />
        </View>
      </View>
      <View style={styles.text}>
        <Text>Reason*</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.innerContainer}>
          <TextInput placeholder="Body check up" />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 20,
          marginTop: 20,
        }}>
        <Attach name="attachment" color={'#1A72F2'} />
        <Text style={{color: '#1A72F2', marginLeft: 5}}>Add Attachments</Text>
      </View>
      <View
        style={{
          alignItems: 'center',
        }}>
        <View style={styles.button}>
          <Button title="Apply Leave" color={'white'} />
        </View>
      </View>
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
export default ApplyLeave;
