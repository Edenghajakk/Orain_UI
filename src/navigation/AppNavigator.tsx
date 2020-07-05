import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Local imports
import SignUp from 'screens/Onboarding/SignUp';
import Login from 'screens/Onboarding/Login';
import Username from 'screens/Onboarding/Username';
import Address from 'screens/Onboarding/Address';
import ProfilePicture from 'screens/Onboarding/ProfilePicture';
import Success from 'screens/Onboarding/Success';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Email'} headerMode={'none'}>
        <Stack.Screen name={'SignUp'} component={SignUp} />
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'Username'} component={Username} />
        <Stack.Screen name={'Address'} component={Address} />
        <Stack.Screen name={'ProfilePicture'} component={ProfilePicture} />
        <Stack.Screen name={'Success'} component={Success} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
