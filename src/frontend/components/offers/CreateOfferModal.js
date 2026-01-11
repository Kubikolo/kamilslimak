import { View, Text, TouchableOpacity, Modal } from "react-native";
import { styles } from "../../styles/styles"
import { TextInput } from "react-native-paper";
import { useState } from "react";

export default function CreateOfferModal({ visible, onClose, onConfirm, title, firstText, secondText}) {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
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
                <Text style={styles.modalText}>{firstText}</Text>
                <TextInput style={styles.modalTextInput}
                value={value1}
                onChangeText={setValue1}
                multiline={false}
                contentStyle={{
                    paddingVertical: 0,
                    textAlignVertical: 'center',
                }}></TextInput>

                <Text style={styles.modalText}>{secondText}</Text>
                <TextInput style={styles.modalTextInput}
                value={value2}
                onChangeText={setValue2}
                multiline={false}
                contentStyle={{
                    paddingVertical: 0,
                    textAlignVertical: 'center',
                }}></TextInput>
                <View style={styles.modalRow}>
                    <TouchableOpacity onPress={onClose}>
                        <Text style={styles.modalText}>Anuluj</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onConfirm(value1, value2)}>
                        <Text style={styles.modalText}>Potwierdź</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
  );
}

