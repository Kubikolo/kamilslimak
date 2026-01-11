import React from 'react';
import { Text, Linking, StyleSheet, View } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default function QRScanner({ onScan }) {
  const handleScan = e => {
    console.log('Scanned data:', e.data);
    if (onScan) onScan(e.data);
    // Example: open URL
    if (e.data.startsWith('http')) Linking.openURL(e.data);
  };

  return (
    <View style={{ flex: 1 }}>
      <QRCodeScanner
        onRead={handleScan}
        topContent={<Text style={styles.centerText}>Scan a QR code</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  centerText: { fontSize: 18, padding: 32, color: '#777' },
});
