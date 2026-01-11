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
        <View style={styles.modalContainer}>
            <View style={styles.modalBody}>
                <Text style={styles.modalTitle}>{title}</Text>
                <Text style={styles.modalText}>{message}</Text>
                <View style={styles.modalRow}>
                    <TouchableOpacity onPress={onClose}>
                        <Text style={styles.modalText}>Anuluj</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onConfirm}>
                        <Text style={styles.modalText}>Potwierdź</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
  );
}

