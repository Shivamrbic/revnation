import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import Colors from '../Theme/Colors';
import Fonts from '../Theme/Fonts';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const FormButton = ({
  onPress,
  transparent = false,
  value = '',
  style = {},
}: any): JSX.Element => {
  return (
    <Pressable onPress={onPress}>
      <View
        style={[
          transparent ? styles.transparentContainer : styles.colorContainer,
          style,
        ]}>
        <Text style={styles.text}>{value}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  colorContainer: {
    backgroundColor: 'rgba(254, 128, 1, 1)',
    width: '90%',
    height: 43,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transparentContainer: {
    backgroundColor: 'transparent',
    width: '90%',
    height: 43,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.APP_WHITE,
    borderWidth: 1,
  },
  text: {
    ...Fonts.getBoldFont(14, Colors.APP_WHITE),
    lineHeight: 19,
  },
});

export default FormButton;
