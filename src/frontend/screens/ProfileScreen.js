import React, { useState, useEffect, useContext } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/styles";
import ProfileButton from "../components/profile/ProfileButton";
import ProfileBodyOption from "../components/profile/ProfileBodyOption";
import { UserContext } from "../contexts/userContext";
import {useNavigation} from '@react-navigation/native';

export default function ProfileScreen() {
  const { userID } = useContext(UserContext);
  const [points, setPoints] = useState({});
  const [loading, setLoading] = useState(true);
  const { setUserID } = useContext(UserContext);
  const navigation = useNavigation();

  function logOut() {
    setUserID(null);
    navigation.navigate("LogInScreen")
  }

  useEffect(() => {
    if (!userID) return;
    const fetchPoints = async () => {
      try {
        const response = await fetch(`http://192.168.0.9:5000/client-points/${userID}`);
        const data = await response.json();
        setPoints(data);
      } catch (error) {
        console.error("Fetch points error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPoints();
  }, [userID]);



  return (
    <SafeAreaView style={styles.profileContainer}>
      <View style={styles.profileHeader}>
        <Text style={styles.profileHeaderText}>Witaj Użytkowniku!</Text>
        <ProfileButton />
      </View>

      <ScrollView contentContainerStyle={styles.profileBody}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          Object.entries(points).map(([businessName, pointValue]) => (
            <ProfileBodyOption
              key={businessName}
              iconName="star"
              text={`${businessName}: ${pointValue} punktów`}
            />
          ))
        )}

        <ProfileBodyOption iconName="info" text="Informacja"/>
        <ProfileBodyOption iconName="logout" text="Wyloguj" textColor="red" onPress={logOut}/>
      </ScrollView>
    </SafeAreaView>
  );
}
