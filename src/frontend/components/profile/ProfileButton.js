import { View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "../../styles/styles"

export default function ProfileButton() {
  const size = 48;

  return (
    <View style={[styles.profileButton, { width: size, height: size, borderRadius: size / 2 }]}>
      <Ionicons name="person" size={size * 0.6} color={"#FFF"} />
    </View>
  );
}