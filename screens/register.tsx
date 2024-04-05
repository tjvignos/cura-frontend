import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { YStack } from 'tamagui';
import { CInput } from 'custom-components/CInput';
import { CButton } from 'custom-components/CButton';
import { RootStackParamList } from 'navigation';
import { Button, ButtonText } from 'tamagui';
import { StyleSheet, Image } from 'react-native';
import { styles } from 'styles';

type RegisterScreenNavigationProps = StackNavigationProp<RootStackParamList, 'register'>;

export default function Register() {
  const navigation = useNavigation<RegisterScreenNavigationProps>();

  return (
    <YStack
      style={styles.stack}
      space={20}
    >
      <Image source={require('../assets/full-logo.png')} style={{width:200, height:64}} />
      <CInput label="username" width={200} height={45} multi={false}/>
      <CInput label="password" width={200} height={45} multi={false}/>
      <CButton label="register" nav={() => navigation.navigate('checkin')} width={200} height={45} />
      <Button
        size="$1"
        chromeless
        onPress={() => navigation.navigate('signin')}
      >
        <ButtonText color="#C0A1DD" >already a member? sign in here</ButtonText>
      </Button>
    </YStack>
      
      
  );
}