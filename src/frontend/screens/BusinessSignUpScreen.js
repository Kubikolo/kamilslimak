import React, { useState, useContext } from "react";
import { View, TextInput, Text, Alert, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { BusinessContext } from "../contexts/businessContext";
import { styles } from "../styles/styles";

export default function BusinessSignUpScreen() {
  const navigation = useNavigation();
  const { setBusinessID } = useContext(BusinessContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [buildingNumber, setBuildingNumber] = useState("");
  const [localNumber, setLocalNumber] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");

  // Funkcje walidacyjne (pozostają bez zmian)
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPassword = (password) => /^.{6,}$/.test(password);
  const isValidBusinessName = (name) => /^.{5,50}$/.test(name);
  const isValidPhone = (phone) => /^[0-9]{9}$/.test(phone);
  const isValidStreet = (street) => /^.{1,}$/.test(street);
  const isValidBuildingNumber = (num) => /^[1-9][0-9]*[A-Z]{0,1}$/.test(num);
  const isValidLocalNumber = (num) => num === "" || /^[1-9][0-9]*[A-Z]{0,1}$/.test(num);
  const isValidPostalCode = (code) => /^[0-9]{2}-[0-9]{3}$/.test(code);
  const isValidTown = (town) => /^.{1,}$/.test(town);

  const handleSignUp = async () => {
    // Sprawdzenie, czy wszystkie pola wypełnione
    if (!email || !password || !businessName || !phone || !street || !buildingNumber || !postalCode || !city) {
      Alert.alert("Podaj wszystkie dane!");
      return;
    }

    // Walidacja pól
    if (!isValidEmail(email)) { Alert.alert("Podany e-mail nie jest poprawny!"); return; }
    if (!isValidPassword(password)) { Alert.alert("Hasło musi mieć co najmniej 6 znaków."); return; }
    if (!isValidBusinessName(businessName)) { Alert.alert("Nazwa firmy musi mieć 5-50 znaków."); return; }
    if (!isValidPhone(phone)) { Alert.alert("Numer telefonu musi mieć 9 cyfr."); return; }
    if (!isValidStreet(street)) { Alert.alert("Podana ulica nie jest poprawna!"); return; }
    if (!isValidBuildingNumber(buildingNumber)) { Alert.alert("Niepoprawny numer budynku."); return; }
    if (!isValidLocalNumber(localNumber)) { Alert.alert("Niepoprawny numer lokalu."); return; }
    if (!isValidPostalCode(postalCode)) { Alert.alert("Kod pocztowy musi mieć format XX-XXX."); return; }
    if (!isValidTown(city)) { Alert.alert("Podane miasto nie jest poprawne!"); return; }

    console.log("Wysyłam request do backendu");
    // Fetch do API rejestracji biznesu
    try {
      const response = await fetch("http://192.168.0.9:5000/create-business", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          businessName,
          phone,
          street,
          buildingNumber,
          localNumber,
          postalCode,
          city
        })
      });
      console.log("Odpowiedź fetch:", response);
      const data = await response.json();
      console.log("JSON z backendu:", data);

      if (response.ok && data.uid) {
        setBusinessID(data.businessID);
        Alert.alert("Sukces", "Konto przedsiębiorcy utworzone!");
        navigation.navigate("BusinessBottomTabs");
      } else {
        Alert.alert("Błąd rejestracji", data.message || "Nieznany błąd");
      }
    } catch (error) {
      console.log("Błąd fetch:", error);
      Alert.alert("Błąd", error.message);
    }
    };

  return (
    <SafeAreaView style={styles.signUpContainer}>
      <ScrollView
        style={styles.businessSignUpScreenScrollContainer}
        contentContainerStyle={[styles.businessSignUpContent, { paddingBottom: 50 }]} // padding dolny, scroll do końca
      >
        <View style={styles.businessBox}>
          {/* cała zawartość formularza */}
          <View style={styles.businessSignUpHeader}>
            <Text style={styles.signUpHeaderText}>Rejestracja przedsiębiorcy</Text>
          </View>

          {/* Inputy */}
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

          {/* Regulamin */}
          <View style={styles.signUpTermsOfServiceContainer}>
            <Text style={styles.signUpTermsOfServiceContainerText}>
              Klikając "Zarejestruj się", potwierdzasz, że znasz i akceptujesz{" "}
              <Text
                style={styles.signUpTermsOfServiceLink}
                onPress={() => navigation.navigate("TermsOfServiceScreen")}
              >
                Regulamin
              </Text>
              .
            </Text>
          </View>

          {/* Button */}
          <View style={styles.businessSignUpBoxContainer}>
            <TouchableOpacity
              style={styles.signUpButton}
              onPress={handleSignUp}
              activeOpacity={0.9}
            >
              <Text style={styles.signUpButtonText}>Zarejestruj się</Text>
            </TouchableOpacity>
          </View>

          {/* Linki */}
          <View style={styles.businessSignUpLinkContainer}>
            <Text style={styles.businessSignUpLinkContainerText}>Masz już konto?</Text>
            <Text
              style={styles.businessSignUpLink}
              onPress={() => navigation.navigate("BusinessLogInScreen")}
            >
              Zaloguj się
            </Text>
          </View>

          <View style={styles.businessSignUpLinkContainer}>
            <Text style={styles.businessSignUpLinkContainerText}>Nie jesteś przedsiębiorcą?</Text>
            <Text
              style={styles.businessSignUpLinkBottom}
              onPress={() => navigation.navigate("SignUpScreen")}
            >
              Przejdź do panelu klienta
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
