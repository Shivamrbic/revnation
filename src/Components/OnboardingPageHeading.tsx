import {View, Text, StyleSheet} from 'react-native';
import Fonts from '../Theme/Fonts';
import Colors from '../Theme/Colors';

const OnboardingPageHeading = ({children}) => {
  return (
    <View style={{marginTop: 15}}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.APP_WHITE,
  },
  text: Fonts.getBoldFont(24, Colors.APP_BLACK),
});

export default OnboardingPageHeading;
