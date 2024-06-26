import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { BackButton } from '../components/BackButton';
import Signin from '../screens/signin';
import Register from '../screens/register';
import CheckIn from '../screens/checkin';
import Circles from '../screens/circles';
import Circle from '../screens/circle';
import Settings from '../screens/settings';
import Profile from '../screens/profile';

export type RootStackParamList = {
  signin: undefined;
  register: undefined;
  checkin: undefined;
  circles: undefined;
  profile: undefined;
  circle: { circleInput: any };
  settings: undefined;
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
        <Stack.Screen name="signin" component={Signin} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="checkin" component={CheckIn} />
        <Stack.Screen name="circles" component={Circles} />
        <Stack.Screen name="circle" component={Circle} />
        <Stack.Screen name="settings" component={Settings} />
        <Stack.Screen name="profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
