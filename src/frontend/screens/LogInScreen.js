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

      <View style={styles.logInHeader}>
        <Text style={styles.logInHeaderText}>Logowanie klienta</Text>
      </View>

      <View style={styles.logInInputContainer}>
        <Text style={styles.logInInputText}>e-mail</Text>
        <View style={styles.logInInputBox}>
          <TextInput 
            style={styles.logInInputBoxText}
            placeholder=" Tutaj wpisz swój e-mail"
            value={email}
            onChangeText={setEmail}
          />
        </View>        
      </View>

      <View style={styles.logInInputContainer}>
        <Text style={styles.logInInputText}>hasło</Text>
        <View style={styles.logInInputBox}>
          <TextInput 
            style={styles.logInInputBoxText}
            placeholder=" Tutaj wpisz swoje hasło"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>        
      </View>

      <View style={styles.logInBoxContainer}>
        <TouchableOpacity
          style={styles.logInButton}
          onPress={handleLogIn}
          activeOpacity={0.9}
        >
          <Text style={styles.logInButtonText}>
            Zaloguj się
          </Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.logInLinkContainer}>
        <Text style={styles.logInLinkContainerText}>Nie masz jeszcze konta?</Text>
        <Text
          style={styles.logInLink}
          onPress={() => navigation.navigate('SignUpScreen')}
        >
          Zarejestruj się
        </Text>
      </View>

      <View style={styles.signUpLinkContainer}>
        <Text style={styles.signUpLinkContainerText}>Jesteś przedsiębiorcą?</Text>
        <Text
          style={styles.signUpLink}
          onPress={() => navigation.navigate('BusinessLogInScreen')}
        >
          Przejdź do panelu przedsiębiorcy
        </Text>
      </View>

    </SafeAreaView>
  );1
}
