import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "../../styles/styles"
import { useNavigation } from "@react-navigation/native";

export default function BusinessCard({ iconUrl = null, text = "Opcja", notInCategory}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={[
        !notInCategory && styles.businessCardInCategory,
        notInCategory && styles.businessCardNotInCategory,
      ]}
      onPress={() => navigation.navigate('BusinessScreen')}
      >
      <View style={styles.businessTextContainer}>
        <Text style={styles.businessCardText}>{text}</Text>
      </View>

      {/* Image below */}
      <Image
        source={
          iconUrl
            ? { uri: iconUrl }
            : require("../../../../assets/studio.jpg")
        }
        onError={(e) => console.log("Image error:", e.nativeEvent)}
        style={styles.businessCardImage}
      />
    </TouchableOpacity>
  );
}