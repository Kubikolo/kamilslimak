import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Searchbar } from 'react-native-paper';
import { styles } from '../styles/styles'
import BusinessCard from '../components/home/BusinessCard';
import BusinessCardContainer from '../components/home/BusinessCardContainer';

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.homeContainer}>
      <Searchbar
        placeholder="Wyszukaj..."
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={ styles.homeSearch }
      />
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
        <BusinessCardContainer title={"Twoje ulubione"}>
          <BusinessCard/>
          <BusinessCard/>
          <BusinessCard/>
        </BusinessCardContainer>

        <BusinessCardContainer title={"Fryzjerzy"}>
          <BusinessCard/>
          <BusinessCard/>
          <BusinessCard/>
        </BusinessCardContainer>

        <BusinessCardContainer title={"Warzywa"}>
          <BusinessCard/>
          <BusinessCard/>
          <BusinessCard/>
        </BusinessCardContainer>
      </ScrollView>
    </SafeAreaView>
  );
}