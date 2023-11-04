import {View, Text, StyleSheet} from 'react-native';
import Fonts from '../Theme/Fonts';
import Colors from '../Theme/Colors';

const PageHeading = ({children}) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    ...Fonts.getMediumFont(14, Colors.APP_BLACK),
    marginHorizontal: 20,
    marginTop: 20,
  },
});

export default PageHeading;
