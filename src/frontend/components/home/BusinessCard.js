import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from "../../styles/styles"

export default function BusinessCard({ iconName = "person", text = "Opcja"}) {
  return (
    <TouchableOpacity style={styles.businessCard}>
      <Text style={styles.businessText}>{text}</Text>
    </TouchableOpacity>
  );
}