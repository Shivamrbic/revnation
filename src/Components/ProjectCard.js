import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Fonts from '../Theme/Fonts';
import Colors from '../Theme/Colors';
import {ProgressBar} from 'react-native-paper';
import Images from '../Assets/Images';
import Flag from 'react-native-vector-icons/Ionicons';

const ProjectCard = ({navigation, data, labourData}) => {
  //console.log('labourData--', labourData?.supervisor);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('ProjectDetails', {
          projectData: labourData,
          projectId: data?.id,
          projectName: data?.name,
        });
      }}>
      <View style={styles.innerContainer}>
        <View>
          <Text
            style={{
              ...Fonts.getMediumFont(16, Colors.APP_BLACK),
            }}>
            {data?.name}
          </Text>
        </View>
        <View>
          <Text
            numberOfLines={3}
            ellipsizeMode="tail"
            style={{fontSize: 11, color: Colors.APP_GRAY, marginTop: 3}}>
            {data.description}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
          <Text
            style={{
              ...Fonts.getSemiBoldFont(10, Colors.APP_BLACK),
              marginLeft: 10,
            }}>
            Progress
          </Text>
          <Text
            style={{
              ...Fonts.getBoldFont(14, Colors.APP_BLACK),
              marginRight: 10,
            }}>
            {data.progress} 45%
          </Text>
        </View>
        <View>
          <ProgressBar
            progress={45 / 100}
            style={{marginBottom: 15, borderRadius: 3}}
            color={Colors.APP_ORANGE}
          />
        </View>
        <View
          style={{
            marginTop: 5,
            marginBottom: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View>
              <Image {...Images.profileCard} />
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={{...Fonts.getRegularFont(14, Colors.APP_BLACK)}}>
                {labourData?.length > 0
                  ? labourData?.supervisor?.first_name +
                    ' ' +
                    labourData?.supervisor?.last_name
                  : null}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{width: 10, width: 10}}
              source={require('../Assets/Images/greenFlag.png')}
            />

            <Text style={{fontSize: 12, color: 'black', marginStart: 8}}>
              {new Date(data.end_date).toDateString()}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    borderRadius: 15,
    backgroundColor: Colors.APP_WHITE,
    borderStyle: 'solid',
    marginHorizontal: 20,
  },
  innerContainer: {
    margin: 15,
  },
  heading: {},
});

export default ProjectCard;
