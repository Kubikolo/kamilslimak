import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Searchbar } from 'react-native-paper';
import { styles } from '../styles/styles'
import BusinessCard from '../components/home/BusinessCard';
import BusinessCardContainer from '../components/home/BusinessCardContainer';

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const [businesses, setBusinesses] = React.useState([]);
  useEffect(() => {
    const fetchBusiness = async () => {
      const response = await fetch("http://192.168.0.9:5000/business");
      const data = await response.json();

      const businessesArray = Object.entries(data).map(
        ([id, business]) => ({
          id,
          ...business,
        })
      );
      setBusinesses(businessesArray);
    };

    fetchBusiness();
  }, []);

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
          <BusinessCard text={"Klub Studio"}/>
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

        <Text style={styles.businessCardCategoryTitle}>
          Wszystko
        </Text>
        {businesses.map((business) => (
          <BusinessCard
            key={business.id}
            notInCategory={true}
            text={business.name}
            iconUrl={business.icon}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}