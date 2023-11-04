import React, {JSXElementConstructor} from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../Theme/Colors';

const MainContainer = ({children, style}: JSXElementConstructor) => {
  return <View style={{...styles.container, ...style}}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: Colors.APP_WHITE,
    height: '100%',
    width: '100%',
  },
});

export default MainContainer;
