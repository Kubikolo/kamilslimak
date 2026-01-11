import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/styles';
import QRScanner from '../components/qr/QRScanner'; 

export default function BusinessQRScreen() {
  const [isScanning, setIsScanning] = useState(false);
  const [scannedData, setScannedData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCloseScanner = (data) => {
    setIsScanning(false);
    if (data) {
      setScannedData(data); // Store the scanned string
      setShowModal(true);   // Show the pop-up
    }
  };

  if (isScanning) {
    return <QRScanner onClose={handleCloseScanner} />;
  }

  return (
    <SafeAreaView style={styles.homeContainer}>
      <View style={localStyles.centerContent}>
        <Text style={localStyles.title}>Panel Biznesowy</Text>
        
        <TouchableOpacity 
          style={localStyles.scanButton}
          onPress={() => setIsScanning(true)}
        >
          <Text style={localStyles.buttonText}>Zeskanuj kod QR klienta</Text>
        </TouchableOpacity>
      </View>

      {/* Result Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={localStyles.modalOverlay}>
          <View style={localStyles.modalView}>
            <Text style={localStyles.modalTitle}>Wynik skanowania</Text>
            <Text style={localStyles.modalText}>Dane: {scannedData}</Text>
            
            <TouchableOpacity 
              style={localStyles.closeModalButton}
              onPress={() => setShowModal(false)}
            >
              <Text style={localStyles.buttonText}>Zamknij</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView> 
  );
}

const localStyles = StyleSheet.create({
  centerContent: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, marginBottom: 20, fontWeight: 'bold' },
  scanButton: { backgroundColor: '#EE4622', padding: 20, borderRadius: 15 },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  
  // Modal Styles
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
  modalText: { fontSize: 16, marginBottom: 20, textAlign: 'center' },
  closeModalButton: { backgroundColor: '#EE4622', padding: 10, borderRadius: 10, minWidth: 100, alignItems: 'center' },
});