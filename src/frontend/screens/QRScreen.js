import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../styles/styles.js';
import QRCode from 'react-native-qrcode-svg';

export default function QRScreen() {
  return (
    <View style={styles.qrContainer}>
        <View style={styles.qrHeader}>
            <Text style={styles.qrHeaderText}>Twój Kod QR</Text>
        </View>
        <View style={styles.qrCode}>
            <QRCode size={200} value='AdLDK1lt1kIidZWJdk7Y'></QRCode>
        </View>
        <View style={styles.qrBody}>
            <Text style={styles.qrText}>Zeskanuj powyższy kod u sprzedawcy, aby otrzymać jego punkty!</Text>
        </View>
    </View>
  );
}