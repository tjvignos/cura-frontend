import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { BackButton } from '../components/BackButton';
import Signin from '../screens/signin';
import Register from '../screens/register';

export type RootStackParamList = {
  signin: undefined;
  register: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="signin"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="signin" component={Signin}/>
        <Stack.Screen name="register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
