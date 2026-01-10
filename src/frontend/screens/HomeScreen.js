import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Searchbar } from 'react-native-paper';
import { styles } from '../styles/styles'
import BusinessCard from '../components/home/BusinessCard';

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
      <BusinessCard></BusinessCard>
    </SafeAreaView>
  );
}