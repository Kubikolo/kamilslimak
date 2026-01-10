import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import {styles} from '../styles/styles';
import { SafeAreaView } from "react-native-safe-area-context";


export default function SignUpScreen() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };


  const handleSignUp = async () => {
    if (!isValidEmail(email)) {
      Alert.alert("Podany e-mail nie jest poprawny!");
      return;
    }
    if (!email || !password) {
      Alert.alert("Podaj e-mail i hasło!");
      return;
    }    
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Sukces", "Konto utworzone!");
      navigation.navigate("Home");
    } catch (error) {
      Alert.alert("Błąd", error.message);
    }
  };

  return (
    <SafeAreaView style={styles.signUpContainer}>

      <View style={styles.signUpHeader}>
        <Text style={styles.signUpHeaderText}>Rejestracja</Text>
      </View>

      <View style={styles.signUpInputContainer}>
        <Text style={styles.signUpInputText}>e-mail</Text>
        <View style={styles.signUpInputBox}>
          <TextInput 
            style={styles.signUpInputBoxText}
            placeholder=" Tutaj wpisz swój e-mail"
            value={email}
            onChangeText={setEmail}
          />
        </View>        
      </View>

      <View style={styles.signUpInputContainer}>
        <Text style={styles.signUpInputText}>hasło</Text>
        <View style={styles.signUpInputBox}>
          <TextInput 
            style={styles.signUpInputBoxText}
            placeholder=" Tutaj wpisz swoje hasło"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>        
      </View>

      <View style={styles.signUpBoxContainer}>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={handleSignUp}
          activeOpacity={0.7}
        >
          <Text style={styles.signUpButtonText}>
            Zarejestruj się
          </Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.signUpLinkContainer}>
        <Text style={styles.signUpLinkContainerText}>Masz już konto?</Text>
        <Text
          style={styles.signUpLink}
          onPress={() => navigation.navigate("SignIn")}
        >
          Zaloguj się
        </Text>
      </View>

    </SafeAreaView>
  );
}

