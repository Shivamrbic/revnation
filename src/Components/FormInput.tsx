import {StyleSheet, View, Text, KeyboardAvoidingView} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import Colors from '../Theme/Colors';
import Fonts from '../Theme/Fonts';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const FormInput = ({
  type,
  label,
  style = {},
  value,
  onChange,
  setCountryCode,
}: any): JSX.Element => {
  if (type == 'phone') {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.fieldContainer}>
          <View style={{width: '90%'}}>
            <PhoneInput
              defaultCode="AE"
              autoFocus
              onChangeText={onChange}
              onChangeFormattedText={text => {
                setCountryCode(text);
              }}
              value={value}
              containerStyle={styles.inputContainer}
              textContainerStyle={styles.inputTextContainer}
              textInputStyle={{
                ...Fonts.getRegularFont(15, Colors.APP_BLACK),
              }}
              codeTextStyle={Fonts.getRegularFont(15, Colors.APP_BLACK)}
            />
          </View>

          <View style={{width: '10%'}}>
            <Text>
              <Icon name="phone" style={{fontSize: 20}} />
            </Text>
          </View>
        </View>
      </View>
    );
  }
  return <View></View>;
};

const styles = StyleSheet.create({
  container: {maxWidth: '100%'},
  label: {...Fonts.getRegularFont(), marginLeft: 20, marginBottom: 5},
  fieldContainer: {
    borderWidth: 0,
    borderRadius: 14,
    // height: 54,
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

export default FormInput;
