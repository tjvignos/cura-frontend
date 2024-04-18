import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { styles } from '../utils/styles';
import NavBar from '../custom-components/NavBar';
import CHeader from '../custom-components/CHeader';
import { userData } from '../utils/global';

type ProfileScreenNavigationProps = StackNavigationProp<RootStackParamList, 'profile'>;

export default function Profile() {
  const navigation = useNavigation<ProfileScreenNavigationProps>();

  return (
    <View style={styles.mainContainer} >
      <View style={styles.top}>
        <View style={styles.container}>
          <CHeader title={userData.user.username}/>
          <View>
            <Text>test</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <NavBar nav={navigation}/>
      </View>
    </ View>
  );
}