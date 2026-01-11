import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "../../styles/styles"
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState, useContext } from "react";
import { UserContext } from "../../contexts/userContext"

export default function BusinessCard({ iconUrl = null, text = "Usługa", notInCategory, initialLiked = false, businessID}) {
  const navigation = useNavigation();
  const [liked, setLiked] = useState(initialLiked);
  const { userID } = useContext(UserContext);

  const handleLikePress = async () => {
  const newLiked = !liked;
  setLiked(newLiked);

  try {
    const url = `http://192.168.0.9:5000/client/${userID}/favorites/${businessID}/${newLiked ? "add" : "remove"}`;
    const method = newLiked ? "POST" : "DELETE";

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    console.log(`Successfully ${newLiked ? "added" : "removed"} favorite!`);
  } catch (error) {
    console.error("Error updating favorite:", error);
    setLiked(!newLiked);
  }
};


  return (
    <TouchableOpacity style={[
        !notInCategory && styles.businessCardInCategory,
        notInCategory && styles.businessCardNotInCategory,
      ]}
      onPress={() => navigation.navigate('BusinessScreen')}
      >
      <View style={styles.businessTextContainer}>
        <Text style={styles.businessCardText}>{text}</Text>

        <TouchableOpacity onPress={handleLikePress}>
          <MaterialIcons
            name={liked ? "favorite" : "favorite-border"}
            size={22}
            color={liked ? "red" : "#000"}
          />
        </TouchableOpacity>
      </View>

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