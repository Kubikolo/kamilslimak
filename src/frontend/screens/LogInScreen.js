import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import {styles} from '../styles/styles';
import { SafeAreaView } from "react-native-safe-area-context";
import {useNavigation} from '@react-navigation/native';


export default function LogInScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = async () => {
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
       
    try {
      // await logInWithEmailAndPassword(email, password);
      navigation.navigate("HomeScreen");
    } catch (error) {
      Alert.alert("Błąd", error.message);
    }
  };

  return (
    <SafeAreaView style={styles.logInContainer}>

      <View style={styles.logInHeader}>
        <Text style={styles.logInHeaderText}>Logowanie</Text>
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
          activeOpacity={0.7}
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

    </SafeAreaView>
  );
}

