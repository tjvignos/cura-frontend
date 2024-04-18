import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation';
import { View } from 'react-native';

type SettingsScreenNavigationProps = StackNavigationProp<RootStackParamList, 'settings'>;

export default function Settings() {
  const navigation = useNavigation<SettingsScreenNavigationProps>();

  return (
    <View style={{
      height: "80%",
      backgroundColor: "#F0F0F0",
    }}/>
  );
}