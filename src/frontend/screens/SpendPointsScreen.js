import React from 'react';
import { View, Text} from 'react-native';
import { styles } from '../styles/styles.js';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SpendPointsScreen({ businessId }) {
  return (
    <SafeAreaView style={styles.businessContainer}>
        <View style={styles.businessHeader}>
            <Text style={styles.businessHeaderText}>Cos tam</Text>
        </View>
        <View style={styles.businessBody}>
            <Text style={styles.businessText}>{businessId}</Text>
        </View>
    </SafeAreaView>
  );
}