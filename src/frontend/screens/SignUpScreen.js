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
  const [username, setUsername] = useState("");

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const isValidPassword = (password) => {
    const regex = /^.{6,}$/;
    return regex.test(password);
  }


  const handleSignUp = async () => {
    if (!email || !password || !username) {
      Alert.alert("Uzupełnij wszystkie pola");
      return;
    }

    if(!isValidEmail(email)){
      Alert.alert("Zły format maila");
      return;
    }

    try {
      const response = await fetch("http://192.168.0.9:5000/create-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          username,
        }),
      });

      console.log("Status:", response.status);
      const text = await response.text();
      console.log("Response text:", text);

      if (!response.ok) {
        throw new Error("Nie udało się utworzyć konta");
      }

      const data = JSON.parse(text); // rzutowanie JSON
      if (!data.uid) throw new Error("Nie udało się utworzyć konta");

      Alert.alert("Sukces", "Konto utworzone!");
      console.log("UID:", data.uid);

      navigation.replace("HomeScreen");
    } catch (error) {
      console.error(error);
      Alert.alert("Błąd", error.message);
    }
  };


  return (
    <SafeAreaView style={styles.signUpContainer}>

      <View style={styles.signUpHeader}>
        <Text style={styles.signUpHeaderText}>Rejestracja klienta</Text>
      </View>

      <View style={styles.signUpInputContainer}>
        <Text style={styles.signUpInputText}>nazwa użytkownika</Text>
        <View style={styles.signUpInputBox}>
          <TextInput
            style={styles.signUpInputBoxText}
            placeholder=" Twoja nazwa"
            value={username}
            onChangeText={setUsername}
          />
        </View>
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

      <View style={styles.signUpTermsOfServiceContainer}>
        <Text style={styles.signUpTermsOfServiceContainerText}>
          <Text>
            Klikając "Zarejestruj się", potwierdzasz, że znasz i akceptujesz { }
          </Text>
          <Text
            style={styles.signUpTermsOfServiceLink}
            onPress={() => navigation.navigate('TermsOfServiceScreen')}
          >
            Regulamin
          </Text>
          <Text>
            .
          </Text>
        </Text>       
      </View>

      <View style={styles.signUpBoxContainer}>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={handleSignUp}
          activeOpacity={0.9}
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

      <View style={styles.signUpLinkContainer}>
        <Text style={styles.signUpLinkContainerText}>Jesteś przedsiębiorcą?</Text>
        <Text
          style={styles.signUpLink}
          onPress={() => navigation.navigate('BusinessSignUpScreen')}
        >
          Przejdź do panelu przedsiębiorcy
        </Text>
      </View>

      

    </SafeAreaView>
  );
}

