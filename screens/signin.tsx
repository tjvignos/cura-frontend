import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Image } from 'react-native';
import { RootStackParamList } from '../navigation';
import { Input, YStack } from 'tamagui';
import { Button, ButtonText } from 'tamagui';
import { CInput } from 'custom-components/CInput';
import { CButton } from 'custom-components/CButton';
import { styles } from 'styles';

type SigninScreenNavigationProps = StackNavigationProp<RootStackParamList, 'signin'>;

export default function Signin() {
  const navigation = useNavigation<SigninScreenNavigationProps>();

  return (
    <YStack style={styles.stack} space={20}>
      <Image source={require('../assets/full-logo.png')} style={{width:200, height:64}} />
      <CInput label="username" width={200} height={45} multi={false}/>
      <CInput label="password" width={200} height={45} multi={false}/>
      <CButton label="sign in" nav={() => navigation.navigate('checkin')} width={200} height={45}/>
      <Button
        size="$1"
        chromeless
        onPress={() => navigation.navigate('register')}
      >
        <ButtonText color="#C0A1DD" >new member? register here</ButtonText>
      </Button>
    </YStack>
  );
}