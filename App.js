import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './src/frontend/navigation/BottomTabs';
import ProfileScreen from './src/frontend/screens/ProfileScreen';

export default function App() {
  return (
    <NavigationContainer>
      <ProfileScreen/>
    </NavigationContainer>
  );
}
