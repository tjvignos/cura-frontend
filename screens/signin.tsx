import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Image } from 'react-native';
import { RootStackParamList } from '../navigation';
import { Input, YStack } from 'tamagui';
import { Button, ButtonText } from 'tamagui';
import { CInput } from 'components/CInput';
import { CButton } from 'components/CButton';

type SigninScreenNavigationProps = StackNavigationProp<RootStackParamList, 'signin'>;

export default function Signin() {
  const navigation = useNavigation<SigninScreenNavigationProps>();

  return (
    <YStack
      style={styles.center}
      space={20}
    >
      <Image source={require('../assets/full-logo.png')} style={{width:200, height:64}} />
      <CInput label="username" />
      <CInput label="password" />
      <CButton label="sign in" />
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

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  center: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
