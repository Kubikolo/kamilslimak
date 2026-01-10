import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../styles/styles.js';
import QRCode from 'react-native-qrcode-svg';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function QRScreen() {
  return (
    <SafeAreaView style={styles.qrContainer}>
        <View style={styles.qrHeader}>
            <Text style={styles.qrHeaderText}>Twój Kod QR</Text>
        </View>
        <View style={styles.qrCode}>
            <QRCode size={200} value='AdLDK1lt1kIidZWJdk7Y'></QRCode>
        </View>
        <View style={styles.qrBody}>
            <Text style={styles.qrText}>Zeskanuj powyższy kod u sprzedawcy, aby otrzymać jego punkty!</Text>
        </View>
    </SafeAreaView>
  );
}