import React, { useState, useContext } from "react";
import { View, TextInput, Text, Alert, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../contexts/userContext";
import { styles } from "../styles/styles";

export default function LogInScreen() {
  const navigation = useNavigation();
  const { setUserID } = useContext(UserContext); // pobieramy setter

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = async () => {
    if (!email || !password) {
      Alert.alert("Podaj e-mail i hasło!");
      return;
    }

    try {
      const response = await fetch("http://192.168.0.9:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setUserID(data.uid); // ustawiamy userID w Context
        navigation.navigate("BottomTabs");
      } else {
        Alert.alert("Błąd logowania", data.message || "Nieznany błąd");
      }
    } catch (error) {
      Alert.alert("Błąd", error.message);
    }
  };

  return (
    <SafeAreaView style={styles.logInContainer}>
      <View>
        <Text>Email:</Text>
        <TextInput value={email} onChangeText={setEmail} placeholder="Twój e-mail" />
        <Text>Hasło:</Text>
        <TextInput value={password} onChangeText={setPassword} placeholder="Hasło" secureTextEntry />
        <TouchableOpacity onPress={handleLogIn}>
          <Text>Zaloguj się</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );1
}
