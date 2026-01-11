import React, { useState } from 'react';
import { View, Text, FlatList} from 'react-native';
import { styles } from '../styles/styles.js';
import OfferBody from '../components/offers/OfferBody.js';
import ConfirmationModal from '../components/offers/ConfirmationModal.js';

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
    const [modalVisible, setModalVisible] = useState(false);

    const handleConfirm = () => {
        setModalVisible(false);
    };

        return (
            <View style={styles.businessContainer}>
                <ConfirmationModal
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    onConfirm={handleConfirm}
                    title="Potwierdź aktywację"
                    message="Czy na pewno chcesz aktywować wybraną ofertę?"
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
                                showActivateButton={true} 
                                onActivate={() => setModalVisible(true)}
                            />
                        )}
                    />
                </View>
            </View>
        );
}