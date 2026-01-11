import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from '../styles/styles.js';
import OfferBody from '../components/offers/OfferBody.js';

export default function BusinessGetPointsScreen({ businessId }) {
    const offers = [
        { id: '1', name: 'Kawa', points: 10 },
        { id: '2', name: 'Pizza', points: 20 },
        { id: '3', name: 'Pizza', points: 20 },
        { id: '4', name: 'Pizza', points: 20 },
        { id: '5', name: 'Pizza', points: 20 },
        { id: '6', name: 'Pizza', points: 20 },
        { id: '7', name: 'Pizza', points: 20 },
        { id: '8', name: 'Pizza', points: 20 },
        { id: '9', name: 'Pizza', points: 20 },
        { id: '10', name: 'Pizza', points: 20 },
        // ...
    ];
  return (
    <View style={styles.businessContainer}>
        <Text style={styles.businessText}>Możesz dodawać oraz usuwać oferty zdobywania punktów dla klientów:</Text>
        <View style={styles.businessListContainer}>
             <FlatList
                style={styles.businessContainer}
                showsVerticalScrollIndicator={false}
                data={offers}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <OfferBody name={item.name}/>
            )}/>
        </View>
    </View>
  );
}