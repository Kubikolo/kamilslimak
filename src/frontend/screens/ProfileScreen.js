import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/styles"
import ProfileButton from "../components/profile/ProfileButton";
import ProfileBodyOption from "../components/profile/ProfileBodyOption"

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.profileContainer}>
      <View style={styles.profileHeader}>
        <Text style={styles.profileHeaderText}>Witaj Świecie!</Text>
        <ProfileButton />
      </View>

      <ScrollView contentContainerStyle={styles.profileBody}>
        <ProfileBodyOption iconName="history" text="Historia zakupów"/>
        <ProfileBodyOption iconName="receipt" text="Odebrane kupony"/>
        <ProfileBodyOption />
      </ScrollView>
    </SafeAreaView>
  );
}
