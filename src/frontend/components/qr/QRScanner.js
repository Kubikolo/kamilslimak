import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";

// We accept onClose as a prop from the parent
export default function QRScanner({ onClose }) {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);

  if (!permission) return <View />;
  
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center", color: "white" }}>
          Brak dostępu do aparatu
        </Text>
        <TouchableOpacity onPress={requestPermission} style={styles.button}>
          <Text style={{ color: "white" }}>Daj dostęp</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleBarCodeScanned = async ({ data }) => {
    // 1. Prevent multiple scans
    setScanned(true);
    
    // 2. Log the data for debugging
    console.log("Zeskanowano:", data);

    // 3. Trigger the close function to "return" to the main screen
    if (onClose) {
      onClose(data);
    }
  };

  return (
    <View style={styles.container}>
      <CameraView
        style={StyleSheet.absoluteFillObject}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
      />

      {/* Manual back button in case user wants to cancel scanning */}
      <TouchableOpacity style={styles.backButton} onPress={onClose}>
        <Text style={{ color: "white", fontWeight: "bold" }}>Anuluj</Text>
      </TouchableOpacity>

      <View style={styles.overlay}>
        <View style={styles.scannerFrame} />
        <Text style={styles.text}>Zeskanuj kod QR klienta</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "black" 
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 10,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 8,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  scannerFrame: {
    width: 250,
    height: 250,
    borderWidth: 4,
    borderColor: "#fff",
    borderRadius: 20,
  },
  text: { 
    color: "white", 
    marginTop: 20, 
    fontSize: 18, 
    fontWeight: "bold" 
  },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#EE4622",
    borderRadius: 10,
  },
});