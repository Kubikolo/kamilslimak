import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import {styles} from '../styles/styles';
import { SafeAreaView } from "react-native-safe-area-context";
import {useNavigation} from '@react-navigation/native';


export default function SignUpScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  //const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  //const [passwordError, setPasswordError] = useState("");

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const isValidPassword = (password) => {
    const regex = /^.{6,}$/;
    return regex.test(password);
  }


  const handleSignUp = async () => {
    if (!email && !password) {
      Alert.alert("Podaj e-mail i hasło!");
      return;
    }
    if (!email) {
      Alert.alert("Podaj e-mail!");
      return;
    }
    if (!password) {
      Alert.alert("Podaj hasło!");
      return;
    } 
    if (!isValidEmail(email)) {
      Alert.alert("Podany e-mail nie jest poprawny!");
      return;
    }
    if (!isValidPassword(password)) {
      Alert.alert("Podane hasło nie jest poprawne!");
      return;
    }
       
    try {
      // await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Sukces", "Konto utworzone!");
      navigation.navigate("HomeScreen");
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
          onPress={() => navigation.navigate('LogInScreen')}
        >
          Zaloguj się
        </Text>
      </View>

    </SafeAreaView>
  );
}

