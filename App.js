import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './src/frontend/navigation/BottomTabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import SignUpScreen from './src/frontend/screens/SignUpScreen';
import LogInScreen from './src/frontend/screens/LogInScreen';
import HomeScreen from './src/frontend/screens/HomeScreen';
import ProfileScreen from './src/frontend/screens/ProfileScreen';
import BusinessSignUpScreen from './src/frontend/screens/BusinessSignUpScreen';
import BusinessLogInScreen from './src/frontend/screens/BusinessLogInScreen';
import TermsOfServiceScreen from './src/frontend/screens/TermsOfServiceScreen';

const Stack = createNativeStackNavigator({
  
  screens: {
    SignUpScreen: {
      screen: SignUpScreen,   
    },
    LogInScreen: {
      screen: LogInScreen,
    },
    BusinessSignUpScreen: {
      screen: BusinessSignUpScreen,   
    },
    BusinessLogInScreen: {
      screen: BusinessLogInScreen,
    },
    HomeScreen: {
      screen: HomeScreen,
    },
    ProfileScreen: {
      screen: ProfileScreen,
    },
    TermsOfServiceScreen: {
      screen: TermsOfServiceScreen,
    },
  },

  initialRouteName: "LogInScreen",

  screenOptions: {
    headerShown: false,
    animation: "slide_from_right",
  }
});

const Navigation = createStaticNavigation(Stack);

export default function App() {
  return (<Navigation/>);
}
