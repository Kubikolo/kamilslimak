import { View, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from "../../styles/styles"

export default function BusinessCard({ iconName = "person", text = "Opcja"}) {
  return (
    <View style={styles.profileOption}>
      <MaterialIcons name={iconName} style={styles.profileOptionIcon} size={30} />
      <Text style={styles.profileOptionText}>{text}</Text>
    </View>
  );
}