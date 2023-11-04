import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import Colors from '../Theme/Colors';
import Fonts from '../Theme/Fonts';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const FormInputLogin = ({
  label,
  style,
  value,
  placeholder,
  onChangeText,
  secureTextEntry,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.fieldContainer}>
        <View style={{width: '100%'}}>
          <TextInput
            style={{marginHorizontal: 15}}
            placeholder={placeholder}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            value={value}></TextInput>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {maxWidth: '100%'},
  label: {...Fonts.getRegularFont(), marginLeft: 10, marginBottom: 5},
  fieldContainer: {
    borderWidth: 0,
    borderRadius: 5,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 15,
    backgroundColor: Colors.APP_FORM_FIELD_BG,
    width: '100%',
  },
  inputContainer: {
    // height: 40,
    // width: '90%',
    backgroundColor: 'transparent',
  },
  inputTextContainer: {
    // height: 40,
    paddingVertical: -5,
    backgroundColor: 'transparent',
  },
});

export default FormInputLogin;
