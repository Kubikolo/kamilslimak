import React, { useState, useContext } from "react";
import { View, TextInput, Text, Alert, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { BusinessContext } from "../contexts/businessContext";
import { styles } from "../styles/styles";

export default function BusinessLogInScreen() {
  const navigation = useNavigation();
  const { setBusinessID } = useContext(BusinessContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = async () => {
    if (!email || !password) {
      Alert.alert("Podaj e-mail i hasło!");
      return;
    }

    try {
      const response = await fetch("http://192.168.0.9:5000/business/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      console.log("Odpowiedź fetch:", data);

      if (response.ok && data.status === "ok" && data.uid) {
        setBusinessID(data.uid); 
        navigation.navigate("BusinessBottomTabs");
      } else {
        Alert.alert("Błąd logowania", data.message || "Nieznany błąd");
      }
    } catch (error) {
      console.log("Błąd fetch:", error);
      Alert.alert("Błąd", error.message);
    }
  };

  return (
    <SafeAreaView style={styles.logInContainer}>
      <View style={styles.logInHeader}>
        <Text style={styles.logInHeaderText}>Logowanie przedsiębiorcy</Text>
      </View>

      <View style={styles.logInInputContainer}>
        <Text style={styles.logInInputText}>E-mail</Text>
        <View style={styles.logInInputBox}>
          <TextInput
            style={styles.logInInputBoxText}
            placeholder="Twój e-mail"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>
      </View>

      <View style={styles.logInInputContainer}>
        <Text style={styles.logInInputText}>Hasło</Text>
        <View style={styles.logInInputBox}>
          <TextInput
            style={styles.logInInputBoxText}
            placeholder="Twoje hasło"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
      </View>

      <View style={styles.logInBoxContainer}>
        <TouchableOpacity
          style={styles.logInButton}
          onPress={handleLogIn}
          activeOpacity={0.9}
        >
          <Text style={styles.logInButtonText}>Zaloguj się</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.logInLinkContainer}>
        <Text style={styles.logInLinkContainerText}>Nie masz jeszcze konta?</Text>
        <Text
          style={styles.logInLink}
          onPress={() => navigation.navigate("BusinessSignUpScreen")}
        >
          Zarejestruj się
        </Text>
      </View>

      <View style={styles.signUpLinkContainer}>
        <Text style={styles.signUpLinkContainerText}>Nie jesteś przedsiębiorcą?</Text>
        <Text
          style={styles.signUpLink}
          onPress={() => navigation.navigate("LogInScreen")}
        >
          Przejdź do panelu klienta
        </Text>
      </View>
    </SafeAreaView>
  );
}
