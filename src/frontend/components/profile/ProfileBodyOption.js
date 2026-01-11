import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from "../../styles/styles"

export default function ProfileBodyOption({ iconName = "person", text = "Opcja", textColor = "black", onPress=()=>{}}) {
  return (
    <TouchableOpacity style={styles.profileOption} onPress={onPress}>
      <MaterialIcons name={iconName} style={[styles.profileOptionIcon, {color: textColor}]} size={30} />
      <Text style={[styles.profileOptionText, {color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  );
}