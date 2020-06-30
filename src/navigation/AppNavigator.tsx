import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Local imports
import Landing from 'screens/Landing';
import Email from 'screens/Onboarding/Email';
import Username from 'screens/Onboarding/Username';
import Address from 'screens/Onboarding/Address';
import ProfilePicture from 'screens/Onboarding/ProfilePicture';

const Stack = createStackNavigator();

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Email'} headerMode={'none'}>
        <Stack.Screen
          name={'Landing Screen'}
          component={Landing}
          options={{ cardStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name={'Email'}
          component={Email}
          options={{ cardStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name={'Username'}
          component={Username}
          options={{ cardStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name={'Address'}
          component={Address}
          options={{ cardStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name={'ProfilePicture'}
          component={ProfilePicture}
          options={{ cardStyleInterpolator: forFade }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
