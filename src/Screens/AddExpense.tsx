import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {MainContainer} from '../Components';
import Colors from '../Theme/Colors';
import Clock from 'react-native-vector-icons/AntDesign';
import Calendar from 'react-native-vector-icons/AntDesign';
import Fonts from '../Theme/Fonts';
import Attach from 'react-native-vector-icons/Entypo';

const AddExpense = () => {
  return (
    <MainContainer>
      <View>
        <View style={styles.text}>
          <Text>Expense Category</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.innerContainer}>
            <TextInput placeholder="Demo Project Name" />
            <Clock name="down" size={16} />
          </View>
        </View>
        <View style={styles.text}>
          <Text>Project/Cost Center</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.innerContainer}>
            <TextInput placeholder="Select a value" />
            <Clock name="down" size={16} />
          </View>
        </View>
        <View style={styles.text}>
          <Text>Name the Expense</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.innerContainer}>
            <TextInput placeholder="Lorem " />
          </View>
        </View>
        <View style={styles.text}>
          <Text>incurred date</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.innerContainer}>
            <TextInput placeholder="19-04-2023" />
            <Calendar name="calendar" size={16} />
          </View>
        </View>
        <View style={styles.text}>
          <Text>Comment</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.innerContainer}>
            <TextInput placeholder="Enter a value here " />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 20,
            marginTop: 20,
          }}>
          <Attach name="attachment" color={'#1A72F2'} size={14} />
          <Text style={{color: '#1A72F2', marginLeft: 5}}>
            Add More Attachments
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
          }}>
          <View style={styles.button}>
            <Button title="Save" color={'white'} />
          </View>
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
  text: {
    marginTop: '6%',
    marginHorizontal: '5%',
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
});
export default AddExpense;
