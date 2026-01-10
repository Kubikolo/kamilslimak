import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from "../../styles/styles"

export default function BusinessCard({ iconName = "person", text = "Opcja"}) {
  return (
    <TouchableOpacity style={styles.businessCard}>
      <View style={styles.businessTextContainer}>
        <Text style={styles.businessText}>{text}</Text>
      </View>

      {/* Image below */}
      <Image
        source={imageUrl ? { uri: imageUrl } : require("../../../assets/studio.jpg")}
        style={styles.businessCardImage}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
}