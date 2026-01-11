import React, { useState, useContext} from "react";
import { View, TextInput, Button, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import {styles} from '../styles/styles';
import { SafeAreaView } from "react-native-safe-area-context";
import {useNavigation} from '@react-navigation/native';
import { UserContext } from "../contexts/userContext"; 

export default function SignUpScreen() {
  const navigation = useNavigation();
  const { setUserID } = useContext(UserContext); // pobieramy setter do zapisania UID

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

    if(!isValidPassword(password)){
      Alert.alert("Hasło powinno być dłuże niż 6 znaków");
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

      const data = await response.json();

      if (response.ok && data.uid) {
        setUserID(data.uid); // zapis UID w kontekście
        Alert.alert("Sukces", "Konto utworzone!");
        navigation.navigate("BottomTabs"); // przechodzimy do BottomTabs
      } else {
        Alert.alert("Błąd", data.message || "Nie udało się utworzyć konta");
      }
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
          <Text 
          style={styles.signUpButtonText}
          onPress={() => navigation.navigate('BottomTabs')}>
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

