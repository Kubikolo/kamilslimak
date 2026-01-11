import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, Alert, TouchableOpacity, ScrollView } from "react-native";
import {styles} from '../styles/styles';
import { SafeAreaView } from "react-native-safe-area-context";
import {useNavigation} from '@react-navigation/native';



export default function BusinessSignUpScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [buildingNumber, setBuildingNumber] = useState("");
  const [localNumber, setLocalNumber] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
    


  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const isValidPassword = (password) => {
    const regex = /^.{6,}$/;
    return regex.test(password);
  }

  const isValidBusinessName = (businessName) => {
    const regex = /^.{5,50}$/;
    return regex.test(businessName);
  }

  const isValidPhone = (phone) => {
    const regex = /^[0-9]{9}$/;    
    return regex.test(phone);
  }

  const isValidStreet = (street) => {
    const regex = /^.{1,}$/;
    return regex.test(street);
  }

  const isValidBuildingNumber = (buildingNumber) => {
    const regex = /^[1-9][0-9]{0,}[A-Z]{0,1}$/;
    return regex.test(buildingNumber);
  }

  const isValidLocalNumber = (localNumber) => {
    const regex1 = /^[1-9][0-9]{0,}[A-Z]{0,1}$/;
    const regex2 = /^$/;
    return regex1.test(localNumber) || regex2.test(localNumber);
  }

  const isValidPostalCode = (postalCode) => {
    const regex = /^([0-9]{2})-([0-9]{3})$/;
    return regex.test(postalCode);
  }

  const isValidTown = (town) => {
    const regex = /^.{1,}$/;
    return regex.test(town);
  }

  const handleSignUp = async () => {
    if (!email || !password || !businessName || !phone || !street || !buildingNumber || !postalCode || !town) {
      Alert.alert("Podaj wszystkie dane!");
      return;
    }
    if (!isValidEmail(email)) {
      Alert.alert("Podany e-mail nie jest poprawny!");
      return;
    }
    if (!isValidPassword(password)) {
      Alert.alert("Podane hasło nie jest poprawne! Hasło musi mieć co najmniej 6 znaków.");
      return;
    }
    if (!isValidBusinessName(businessName)) {
      Alert.alert("Podana nazwa firmy nie jest poprawna! Musi składać się z od 5 do 50 znaków.");
      return;
    }
    if (!isValidPhone(phone)) {
      Alert.alert("Podany numer telefonu nie jest poprawny! Numer telefonu musi składać się z 9 cyfr.");
      return;
    }
    if (!isValidStreet(street)) {
      Alert.alert("Podana ulica nie jest poprawna!");
      return;
    }
    if (!isValidBuildingNumber(buildingNumber)) {
      Alert.alert("Podany numer budynku nie jest poprawny! Musi zaczynać się od cyfry różnej od 0 i może zawierać na końcu jedną wielką literę.");
      return;
    }
    if (!isValidLocalNumber(localNumber)) {
      Alert.alert("Podany numer lokalu nie jest poprawny! Musi zaczynać się od cyfry różnej od 0 i może zawierać na końcu jedną wielką literę. Pole może też pozostać puste.");
      return;
    }
    if (!isValidPostalCode(postalCode)) {
      Alert.alert("Podany kod pocztowy nie jest poprawny! Kod pocztowy musi mieć format XX-XXX, gdzie X to cyfra.");
      return;
    }
    if (!isValidTown(town)) {
      Alert.alert("Podane miasto nie jest poprawne!");
      return;
    }
       
    try {
      Alert.alert("Sukces", "Konto utworzone!");
      navigation.navigate("BusinessBottomTabs");
    } catch (error) {
      Alert.alert("Błąd", error.message);
    }
  };

  return (
    <SafeAreaView style={styles.signUpContainer}>
     <ScrollView style={styles.businessSignUpScreenScrollContainer}
                    contentContainerStyle={styles.businessSignUpContent}> 
      <View style={styles.businessBox}>
        <View style={styles.businessSignUpHeader}>
          <Text style={styles.signUpHeaderText}>Rejestracja przedsiębiorcy</Text>
        </View>

        <View style={styles.businessSignUpInputContainer}>
          <Text style={styles.signUpInputText}>E-mail</Text>
            <View style={styles.signUpInputBox}>
            <TextInput 
                style={styles.signUpInputBoxText}
                placeholder=" Tutaj wpisz swój e-mail"
                value={email}
                onChangeText={setEmail}
            />
          </View>     
        </View>

        <View style={styles.businessSignUpInputContainer}>
            <Text style={styles.signUpInputText}>Hasło</Text>
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

        <View style={styles.businessSignUpInputContainer}>
            <Text style={styles.signUpInputText}>Nazwa firmy</Text>
            <View style={styles.signUpInputBox}>
            <TextInput 
                style={styles.signUpInputBoxText}
                placeholder=" Tutaj wpisz nazwę swojej firmy"
                value={businessName}
                onChangeText={setBusinessName}
            />
            </View>        
        </View>

        <View style={styles.businessSignUpInputContainer}>
            <Text style={styles.signUpInputText}>Numer telefonu</Text>
            <View style={styles.signUpInputBox}>
            <TextInput 
                style={styles.signUpInputBoxText}
                placeholder=" Tutaj wpisz numer telefonu"
                value={phone}
                onChangeText={setPhone}
            />
            </View>        
        </View>

        <View style={styles.businessSignUpInputContainer}>
            <Text style={styles.signUpInputText}>Ulica</Text>
            <View style={styles.signUpInputBox}>
            <TextInput 
                style={styles.signUpInputBoxText}
                placeholder=" Tutaj wpisz ulicę"
                value={street}
                onChangeText={setStreet}
            />
            </View>        
        </View>

        <View style={styles.businessSignUpInputContainer}>
            <Text style={styles.signUpInputText}>Numer budynku</Text>
            <View style={styles.signUpInputBox}>
            <TextInput 
                style={styles.signUpInputBoxText}
                placeholder=" Tutaj wpisz numer budynku"
                value={buildingNumber}
                onChangeText={setBuildingNumber}
            />
            </View>        
        </View>

        <View style={styles.businessSignUpInputContainer}>
            <Text style={styles.signUpInputText}>Numer lokalu (jeśli dotyczy)</Text>
            <View style={styles.signUpInputBox}>
            <TextInput 
                style={styles.signUpInputBoxText}
                placeholder=" Tutaj wpisz numer lokalu"
                value={localNumber}
                onChangeText={setLocalNumber}
            />
            </View>        
        </View>

        <View style={styles.businessSignUpInputContainer}>
            <Text style={styles.signUpInputText}>Kod pocztowy</Text>
            <View style={styles.signUpInputBox}>
            <TextInput 
                style={styles.signUpInputBoxText}
                placeholder=" Tutaj wpisz kod pocztowy"
                value={postalCode}
                onChangeText={setPostalCode}
            />
            </View>        
        </View>

        <View style={styles.businessSignUpInputContainer}>
            <Text style={styles.signUpInputText}>Miasto</Text>
            <View style={styles.signUpInputBox}>
            <TextInput 
                style={styles.signUpInputBoxText}
                placeholder=" Tutaj wpisz miasto"
                value={city}
                onChangeText={setCity}
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

        <View style={styles.businessSignUpBoxContainer}>
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
        
        <View style={styles.businessSignUpLinkContainer}>
            <Text style={styles.businessSignUpLinkContainerText}>Masz już konto?</Text>
            <Text
            style={styles.businessSignUpLink}
            onPress={() => navigation.navigate('BusinessLogInScreen')}
            >
            Zaloguj się
            </Text>
        </View>

        <View style={styles.businessSignUpLinkContainer}>
            <Text style={styles.businessSignUpLinkContainerText}>Nie jesteś przedsiębiorcą?</Text>
            <Text
            style={styles.businessSignUpLinkBottom}
            onPress={() => navigation.navigate('SignUpScreen')}
            >
            Przejdź do panelu klienta
            </Text>
        </View>
      </View>
      
      </ScrollView>
      

    </SafeAreaView>
  );
}

