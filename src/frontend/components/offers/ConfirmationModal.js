import { View, Text, TouchableOpacity, Modal } from "react-native";
import { styles } from "../../styles/styles"

export default function ConfirmationModal({ visible, onClose, onConfirm, title, message }) {
  return (
    <Modal
        visible={visible}
        transparent={true}
        animationType="fade"
        onRequestClose={onClose}
        >
        <View style={styles.confirmationModalBody}>
            <View style={{ backgroundColor: '#fff', padding: 24, borderRadius: 8 }}>
                <Text style={styles.confirmationModalTitle}>{title}</Text>
                <Text style={styles.confirmationModalText}>{message}</Text>
                <View style={styles.confirmationModalRow}>
                    <TouchableOpacity onPress={onConfirm}>
                        <Text style={styles.confirmationModalText}>Anuluj</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onClose}>
                        <Text style={styles.confirmationModalText}>Potwierdź</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
  );
}

