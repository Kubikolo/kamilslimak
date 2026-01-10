import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles.js';

export default function QRScreen() {
  return (
    <View style={styles.qrContainer}>
      <Text style={styles.qrHeader}>Twój Kod QR</Text>
    </View>
  );
}