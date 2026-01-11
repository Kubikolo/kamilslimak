import React from 'react';
import { View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/styles'
import QRScanner from '../components/qr/QRScanner';

export default function BusinessQRScreen() {
  return (
    <SafeAreaView style={styles.homeContainer}>
        <Text>Skaner QR</Text>
        <QRScanner onScan={(data) => alert(`Scanned QR: ${data}`)} />
    </SafeAreaView>
  );
}