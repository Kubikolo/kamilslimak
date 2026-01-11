import React from 'react';
import { View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/styles'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BusinessGetPointsScreen from './BusinessGetPointsScreen';
import BusinessSpendPointsScreen from './BusinessSpendPointsScreen';

export default function BusinessHomeScreen({ route }) {
    const businessId = route.params;
    const Tab = createMaterialTopTabNavigator();
    return (
    <SafeAreaView style={styles.businessContainer}>
            <View style={styles.businessHeader}>
                <Text style={styles.businessHeaderText}>Pizza Romana</Text>
            </View>
            <Tab.Navigator
                initialRouteName="Punkty dla klientów"
                screenOptions={{
                tabBarActiveTintColor: '#ffffff',
                tabBarLabelStyle: { fontSize: 14 },
                tabBarStyle: { backgroundColor: '#6200ee' },
                tabBarIndicatorStyle: { backgroundColor: '#ffeb3b' },
            }}>
                <Tab.Screen name="Punkty dla klientów">
                    {() => <BusinessGetPointsScreen businessId={businessId}/>}
                </Tab.Screen>
                <Tab.Screen name="Benefity dla klientów">
                    {() => <BusinessSpendPointsScreen businessId={businessId}/>}
                </Tab.Screen>
            </Tab.Navigator>
        </SafeAreaView>
  );
}