import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import BusinessCard from "./BusinessCard";

export default function BusinessCardContainer({ cards }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false} // optional: hide scroll bar
      contentContainerStyle={styles.container} // spacing/padding
    >
      {cards.map((card, index) => (
        <View key={index} style={styles.cardWrapper}>
          <BusinessCard title={card.title} content={card.content} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16, // padding on left/right of the list
  },
  cardWrapper: {
    marginRight: 16, // spacing between cards
  },
});
