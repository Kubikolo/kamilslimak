import React from 'react';
import { View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/styles'

export default function BusinessHomeScreen() {
  return (
    <SafeAreaView style={styles.homeContainer}>
        <Text>Strona główna biznesu</Text>
    </SafeAreaView>
  );
}