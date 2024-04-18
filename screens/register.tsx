import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { YStack } from 'tamagui';
import { CInput } from 'custom-components/CInput';
import { CButton } from 'custom-components/CButton';
import { RootStackParamList } from 'navigation';
import { Button, ButtonText } from 'tamagui';
import { StyleSheet, Image } from 'react-native';
import { styles } from 'utils/styles';
import { BASE_URL } from 'utils/constants';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { userData, setUserData } from 'utils/global';

type RegisterScreenNavigationProps = StackNavigationProp<RootStackParamList, 'register'>;

export default function Register() {
  const navigation = useNavigation<RegisterScreenNavigationProps>();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  async function registerUser() {
    try {
      const response = await fetch(BASE_URL + 'user/register/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "username": username,
          "password": password
        })
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  }

  return (
    <YStack
      style={styles.stack}
      space={20}
    >
      <Image source={require('../assets/full-logo.png')} style={{width:200, height:64}} />
      <View style={styles.input}>
        <CInput label="username" width={200} height={45} multi={false} onChangeText={setUsername}/>
        {usernameError != '' && <Text style={{color: 'red', fontSize: 10}}>{usernameError}</Text>}
      </View>
      <View style={styles.input}>
        <CInput label="password" width={200} height={45} multi={false} onChangeText={setPassword}/>
        {passwordError != '' && <Text style={{color: 'red', fontSize: 10}}>{passwordError}</Text>}
      </View>
      <CButton 
        label="register" 
        onPress={async () => {
          const registerData = await registerUser();
          if (registerData.hasOwnProperty('username')) {
            setPasswordError('');
            if (registerData.username[0] === "A user with that username already exists.") {
              setUsernameError('username already exists');
            } else if (registerData.username[0] === "This field may not be blank.") {
              setUsernameError('username cannot be blank');
            } else if (registerData.username[0] === "Enter a valid username. This value may contain only letters, numbers, and @/./+/-/_ characters.") {
              setUsernameError('username may only contain letters, numbers, and @/./+/-/_ characters');
            } else {
              setUsernameError('username error');
            }
          } else if (registerData.hasOwnProperty('password')) {
            setUsernameError('');
            if (registerData.password[0] === "This field may not be blank.") {
              setPasswordError('password cannot be blank');
            } else {
              setPasswordError('password error');
            }
          } else if (registerData.hasOwnProperty('token')) {
            setUsernameError('');
            setPasswordError('');
            setUserData(registerData);
            navigation.navigate('checkin');
          }
        }} 
        width={200} 
        height={45} 
      />
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