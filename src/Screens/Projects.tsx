import React from 'react';
import {MainContainer} from '../Components';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Colors from '../Theme/Colors';
import Fonts from '../Theme/Fonts';
import Images from '../Assets/Images';
import Flag from 'react-native-vector-icons/Ionicons';

let {profileHome} = Images;

const Project = ({navigation, route}) => {
  return (
    <MainContainer>
      <View style={{marginLeft: 20, marginTop: 10}}>
        <Text>Assigned Projects</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('ProjectDetails')}>
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <View style={styles.inputContainer}>
              <Image {...profileHome} />
            </View>
            <View style={{marginLeft: 15}}>
              <Text>Demo Project Name</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{...Fonts.getLightFont(10)}}>Sitesh Sharma</Text>
                <Flag name="md-flag" style={styles.flag} />
                <Text style={{...Fonts.getLightFont(10)}}>19-04-2023</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.inputContainer}>
            <Image {...profileHome} />
          </View>
          <View style={{marginLeft: 15}}>
            <Text>Demo Project Name</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{...Fonts.getLightFont(10)}}>Sitesh Sharma</Text>
              <Flag name="md-flag" style={styles.flag} />
              <Text style={{...Fonts.getLightFont(10)}}>19-04-2023</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.inputContainer}>
            <Image {...profileHome} />
          </View>
          <View style={{marginLeft: 15}}>
            <Text>Demo Project Name</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{...Fonts.getLightFont(10)}}>Sitesh Sharma</Text>
              <Flag name="md-flag" style={styles.flag} />
              <Text style={{...Fonts.getLightFont(10)}}>19-04-2023</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.inputContainer}>
            <Image {...profileHome} />
          </View>
          <View style={{marginLeft: 15}}>
            <Text>Demo Project Name</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{...Fonts.getLightFont(10)}}>Sitesh Sharma</Text>
              <Flag name="md-flag" style={styles.flag} />
              <Text style={{...Fonts.getLightFont(10)}}>19-04-2023</Text>
            </View>
          </View>
        </View>
      </View>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: Colors.APP_WHITE,
    borderStyle: 'solid',
    marginHorizontal: 15,
    shadowColor: Colors.APP_CARD_BORDER,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.7,
    shadowRadius: 5,
    height: 60,
  },
  innerContainer: {
    margin: 15,
    flexDirection: 'row',
  },
  inputContainer: {
    borderRadius: 5,
    // backgroundColor: '#FEE9F6',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flag: {
    fontSize: 15,
    color: Colors.APP_FLAG,
    marginRight: 5,
    marginLeft: '43%',
  },
});

export default Project;
