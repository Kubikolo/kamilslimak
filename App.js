import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './src/frontend/navigation/BottomTabs';
import SignUpScreen from './src/frontend/screens/SignUpScreen';

export default function App() {
  return (
    <NavigationContainer>
      <SignUpScreen/>
    </NavigationContainer>
  
    
  );
}
