import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { YStack } from 'tamagui';
import { CInput } from 'components/CInput';
import { CButton } from 'components/CButton';
import { RootStackParamList } from 'navigation';
import { Button, ButtonText } from 'tamagui';
import { StyleSheet, Image } from 'react-native';

type RegisterScreenNavigationProps = StackNavigationProp<RootStackParamList, 'register'>;

export default function Register() {
  const navigation = useNavigation<RegisterScreenNavigationProps>();

  return (
    <YStack
      style={styles.center}
      space={20}
    >
      <Image source={require('../assets/full-logo.png')} style={{width:200, height:64}} />
      <CInput label="username" />
      <CInput label="password" />
      <CButton label="register" />
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
