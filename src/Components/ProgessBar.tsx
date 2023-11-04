import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ProgressBar =
  () =>
  {
    return (
      <View>
        <View style={{justifyContent: 'center'}}>
          <View
            style={styles.container}
          />
          <View
            style={styles.filler}
          />
          <View
            style={styles.label}>
            {/* <Text style={{textAlign: 'right'}}>{getPercentage}</Text> */}
          </View>
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {},
  filler: {
    height: 100,
    backgroundColor:
  },
  label: {
    padding: 5,
    color: 'white',
    fontWeight:'bold',
  },
});

export default ProgressBar;
