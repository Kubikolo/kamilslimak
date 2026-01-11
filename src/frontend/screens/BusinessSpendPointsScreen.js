import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../styles/styles.js';
import OfferBody from '../components/offers/OfferBody.js';
import ConfirmationModal from '../components/offers/ConfirmationModal.js';
import CreateOfferModal from '../components/offers/CreateOfferModal.js';

export default function BusinessSpendPointsScreen({ businessId }) {
    const offers = [
        { id: '1', name: 'Zniżka 15% na skibidi', points: 10 },
        { id: '2', name: 'Zniżka 15% na skibidi', points: 20 },
        { id: '3', name: 'Zniżka 15% na skibidi', points: 20 },
        { id: '4', name: 'Zniżka 15% na skibidi', points: 20 },
        { id: '5', name: 'Zniżka 15% na skibidi', points: 20 },
        { id: '6', name: 'Zniżka 15% na skibidi', points: 20 },
        { id: '7', name: 'Zniżka 15% na skibidi', points: 20 },
        { id: '8', name: 'Zniżka 15% na skibidi', points: 20 },
        { id: '9', name: 'Zniżka 15% na skibidi', points: 20 },
        { id: '10', name: 'Zniżka 15% na skibidi', points: 20 },
        // ...
    ];
    const [modalVisible, setConfirmationModalVisible] = useState(false);
    const [offerModalVisible, setOfferModalVisible] = useState(false);

    const handleConfirm = () => {
        setConfirmationModalVisible(false);
    };

    const handleCreateOffer = (productName, points) => {
        if (!productName.trim() || !points.trim()) {
                Alert.alert("Podaj dane oferty!");
                return;
        }
        const parsed = parseInt(points, 10);

        if (isNaN(parsed) || parsed <= 0) {
            Alert.alert("Liczba punktów musi być liczbą całkowitą > 0!");
            return;
        }
        // do API!!!
        setOfferModalVisible(false);
    };

    return (
        <View style={styles.businessContainer}>
            <ConfirmationModal
                visible={modalVisible}
                onClose={() => setConfirmationModalVisible(false)}
                onConfirm={handleConfirm}
                title="Potwierdź usunięcie"
                message="Czy na pewno chcesz usunąć wybraną ofertę?"
            />
            <CreateOfferModal
                visible={offerModalVisible}
                onClose={() => setOfferModalVisible(false)}
                onConfirm={handleCreateOffer}
                title="Dodawanie benefitu"
                firstText="Produkt/usługa:"
                secondText="Liczba punktów do uzyskania benefitu:"
            />
            
            <Text style={styles.businessText}>Możesz dodawać i usuwać benefity za punkty dla klientów</Text>
            <View style={styles.businessListContainer}>
                <FlatList
                    style={styles.businessContainer}
                    showsVerticalScrollIndicator={false}
                    data={offers}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <OfferBody 
                            name={item.name} 
                            showDeleteButton={true}
                            buttonText='Usuń'
                            onActivate={() => setConfirmationModalVisible(true)}
                        />
                    )}
                />
            </View>
            <TouchableOpacity style={styles.addButton} onPress={() => setOfferModalVisible(true)}>
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
}