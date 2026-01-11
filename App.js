import React, { useEffect, useState } from 'react';
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
import BusinessBottomTabs from './src/frontend/navigation/BusinessBottomTabs';
import {UserProvider} from './src/frontend/contexts/userContext';
import BusinessTabs from './src/frontend/screens/BusinessTabs';


// const Stack = createNativeStackNavigator({
  
//   screens: {
//     SignUpScreen: {
//       screen: SignUpScreen,   
//     },
//     LogInScreen: {
//       screen: LogInScreen,
//     },
//     HomeScreen: {
//       screen: HomeScreen,
//     },
//     ProfileScreen: {
//       screen: ProfileScreen,
//     },
//   },

//   screenOptions: {
//     headerShown: false,
//     animation: "slide_from_right",
//   }
// });

// const Navigation = createStaticNavigation(Stack);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ 
            headerShown: false,
            animation: "slide_from_right"
        }} initialRouteName="LogInScreen">
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="LogInScreen" component={LogInScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="BusinessScreen" component={BusinessTabs} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name="BottomTabs" component={BottomTabs}/>
          <Stack.Screen name="BusinessBottomTabs" component={BusinessBottomTabs}/>
          <Stack.Screen name="BusinessSignUpScreen" component={BusinessSignUpScreen}/>
          <Stack.Screen name="BusinessLogInScreen" component={BusinessLogInScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
