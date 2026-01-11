import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles.js';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GetPointsScreen from './GetPointsScreen.js';
import SpendPointsScreen from './SpendPointsScreen.js';


const Tab = createMaterialTopTabNavigator();

export default function BusinessTabs({ route }) {
    const { businessId } = route.params;

    const [businessName, setBusinessName] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBusiness = async () => {
            try {
                const response = await fetch(
                    `http://192.168.0.9:5000/business/${businessId}`
                );
                const data = await response.json();

                setBusinessName(data.name || "Brak nazwy");
            } catch (err) {
                console.error("Fetch business error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchBusiness();
    }, [businessId]);
    
    return (
    <SafeAreaView style={styles.businessContainer}>
        <View style={styles.businessHeader}>
            <Text style={styles.businessHeaderText}>{businessName}</Text>
        </View>
        <Tab.Navigator
            initialRouteName="Jak zdobyć"
            screenOptions={{
            tabBarActiveTintColor: '#ffffff',
            tabBarLabelStyle: { fontSize: 14 },
            tabBarStyle: { backgroundColor: '#6200ee' },
            tabBarIndicatorStyle: { backgroundColor: '#ffeb3b' },
        }}>
            <Tab.Screen name="Jak zdobyć">
                {() => <GetPointsScreen businessId={businessId} businessName={businessName}/>}
            </Tab.Screen>
            <Tab.Screen name="Jak wykorzystać">
                {() => <SpendPointsScreen businessId={businessId} businessName={businessName}/>}
            </Tab.Screen>
        </Tab.Navigator>
    </SafeAreaView>
    
  );
}

