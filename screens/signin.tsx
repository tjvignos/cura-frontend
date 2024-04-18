import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Image } from 'react-native';
import { RootStackParamList } from '../navigation';
import { Input, YStack } from 'tamagui';
import { Button, ButtonText } from 'tamagui';
import { CInput } from 'custom-components/CInput';
import { CButton } from 'custom-components/CButton';
import { styles } from 'utils/styles';
import { useState } from 'react';
import { BASE_URL } from 'utils/constants';
import { View, Text } from 'react-native';
import { userData, setUserData } from 'utils/global';

type SigninScreenNavigationProps = StackNavigationProp<RootStackParamList, 'signin'>;

export default function Signin() {
  const navigation = useNavigation<SigninScreenNavigationProps>();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  async function signInUser() {
    try {
      const response = await fetch(BASE_URL + 'user/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log("error!");
      console.log(error);
      return error;
    }
  }

  return (
    <YStack style={styles.stack} space={20}>
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
        label="sign in" 
        onPress={async () =>{
          const signInData = await signInUser();
          
          if (signInData.hasOwnProperty('detail')) {
            setPasswordError('');
            if (signInData.detail === 'Not found.') {
              setUsernameError('username not found');
            }
          } else if (signInData.hasOwnProperty('token')) {
            setUsernameError('');
            setPasswordError('');
            setUserData(signInData);
            navigation.navigate('checkin');
          } else {
            setUsernameError('');
            setPasswordError('incorrect password');
          }
        }} 
        width={200} 
        height={45}
      />
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