import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import BusinessHomeScreen from '../screens/BusinessHomeScreen';
import BusinessQRScreen from '../screens/BusinessQRScreen';
import BusinessProfileScreen from '../screens/BusinessProfileScreen';

const Tab = createBottomTabNavigator();

export default function BusinessBottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Strona główna') iconName = 'home';
          else if (route.name === 'Skaner QR') iconName = 'qr-code-outline';
          else if (route.name === 'Profil') iconName = 'person';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Strona główna" component={BusinessHomeScreen} />
      <Tab.Screen name="Skaner QR" component={BusinessQRScreen} />
      <Tab.Screen name="Profil" component={BusinessProfileScreen} />
    </Tab.Navigator>
  );
}