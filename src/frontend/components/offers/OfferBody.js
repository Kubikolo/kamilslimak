import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles/styles"

export default function OfferBody({name = "Opcja", points = 123, showActivateButton, onActivate}) {
  return (
    <View style={styles.offerBody}>
        <View style={styles.offerRow}>
            <Text style={styles.offerText}>{name}</Text>
            <Text style={styles.offerText}>{points} pkt.</Text>
        </View>
        {showActivateButton && (
            <TouchableOpacity style={styles.activateButton} onPress={onActivate}>
            <Text style={styles.activateButtonText}>Aktywuj</Text>
            </TouchableOpacity>
        )}
    </View>
  );
}