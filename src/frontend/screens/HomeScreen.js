import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Searchbar } from 'react-native-paper';
import { styles } from '../styles/styles'
import BusinessCard from '../components/home/BusinessCard';
import BusinessCardContainer from '../components/home/BusinessCardContainer';

const FAVOURITE_ITEMS = [
  { id: 1, name: 'Klub Studio' },
  { id: 2, name: 'Salon Fryzur Anna' },
  { id: 3, name: 'Warzywniak Zielony' },
];

const ITEMS = [
  { id: 1, name: 'Klub Studio', category: 'Kluby' },
  { id: 2, name: 'Salon Fryzur Anna', category: 'Fryzjerzy' },
  { id: 3, name: 'Fryzjer Max', category: 'Fryzjerzy' },
  { id: 4, name: 'Warzywniak Zielony', category: 'Warzywa' },
  { id: 5, name: 'Bio Warzywa', category: 'Warzywa' },
  { id: 6, name: 'Silniki3000', category: 'Motoryzacja' },
];

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const [filteredItems, setFilteredItems] = useState(ITEMS);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const query = searchQuery.toLowerCase().trim();

      if (query === '') {
        setFilteredItems(ITEMS);
      } else {
        const results = ITEMS.filter(item =>
          item.name.toLowerCase().includes(query)
        );
        setFilteredItems(results);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  const categories = useMemo(() => {
    return [...new Set(filteredItems.map(item => item.category))];
  }, [filteredItems]);

  const filteredFavourites = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (query === '') return FAVOURITE_ITEMS;
    return FAVOURITE_ITEMS.filter(item =>
      item.name.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <SafeAreaView style={styles.homeContainer}>

      <Searchbar
        placeholder="Wyszukaj..."
        value={searchQuery}
        onChangeText={onChangeSearch}
        onClearIconPress={() => setSearchQuery('')}
        style={styles.homeSearch}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredFavourites.length > 0 && (
          <BusinessCardContainer title="Ulubione">
            {filteredFavourites.map(item => (
              <BusinessCard key={item.id} text={item.name} />
            ))}
          </BusinessCardContainer>
        )}

        {categories.map(category => (
          <BusinessCardContainer key={category} title={category}>
            {filteredItems
              .filter(item => item.category === category)
              .map(item => (
                <BusinessCard key={item.id} text={item.name} />
              ))}
          </BusinessCardContainer>
        ))}
      </ScrollView>

    </SafeAreaView>
  );

}