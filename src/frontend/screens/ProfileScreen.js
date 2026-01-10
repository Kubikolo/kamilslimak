import React from "react";
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/styles"
import ProfileButton from "../components/profile/ProfileButton";
import ProfileBodyOption from "../components/profile/ProfileBodyOption"
import {useEffect, useState} from "react"

export default function ProfileScreen() {
const [points, setPoints] = useState({});
  const [loading, setLoading] = useState(true);

  const clientId = "fR0zS3zHbBUA6AUpx7fFeR4RvoA3"; // UID z logowania

  // fetchowanie punktów z API
  const fetchPoints = async () => {
    try {
      const response = await fetch(`http://192.168.0.9:5000/client-points/${clientId}`);
      if (!response.ok) throw new Error("Błąd pobierania danych");
      const data = await response.json();
      setPoints(data);
    } catch (error) {
      console.error("Fetch points error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPoints();
  }, []);

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

        <ProfileBodyOption iconName="history" text="Historia zakupów" />
        <ProfileBodyOption iconName="receipt" text="Odebrane kupony" />
      </ScrollView>
    </SafeAreaView>
  );
}
