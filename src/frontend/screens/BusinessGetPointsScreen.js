import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../styles/styles.js';
import OfferBody from '../components/offers/OfferBody.js';
import ConfirmationModal from '../components/offers/ConfirmationModal.js';
import CreateOfferModal from '../components/offers/CreateOfferModal.js';

export default function BusinessGetPointsScreen({ businessId }) {
    const [offers, setOffers] = useState([]);
    const [offerToDelete, setOfferToDelete] = useState(null);
    const [confirmationModalVisible, setConfirmationModalVisible] = useState(false);
    const [offerModalVisible, setOfferModalVisible] = useState(false);
    
    useEffect(() => {
    if (!businessId) return;

    const fetchOffers = async () => {
      try {
        const response = await fetch(`http://192.168.0.9:5000/business/${businessId}`);
        const data = await response.json();

        const filteredOffers = (data.offers || []).filter(
            offer => offer.cost_points === 0
        );

        setOffers(filteredOffers);
        } catch (error) {
            console.error("Fetch offers error:", error);
            Alert.alert("Błąd przy pobieraniu ofert");
        }
    };

    fetchOffers();
  }, [businessId]);

    const handleConfirm = async () => {
        if (!offerToDelete) return;

        try {
            await fetch(
                `http://192.168.0.9:5000/business/${businessId}/${offerToDelete}/remove`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            setOffers(prev => prev.filter(o => o.id !== offerToDelete));
            setOfferToDelete(null);
            setConfirmationModalVisible(false);
        } catch (err) {
            console.error(err);
            Alert.alert("Błąd", "Nie udało się usunąć oferty");
        } 
    };
    
    const handleCreateOffer = async (productName, points) => {
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
        try {
            const response = await fetch(
                `http://192.168.0.9:5000/business/${businessId}/offer/create`,
                {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: productName.trim(),
                    description: "...",
                    price: 20,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIibPbOeDQQscm9g-fDNdCvROokQJukg8nYQ&s",
                    add_points: parsed,
                    cost_points: 0
                }),
                }
            );

            if (!response.ok) throw new Error("Błąd przy dodawaniu oferty");

            const data = await response.json();

            const newOffer = {
                id: data.offer_id,
                name: productName.trim(),
                points: parsed
            };

            setOffers((prev) => [...prev, newOffer]);
            setOfferModalVisible(false);
            } catch (error) {
            console.error("Add offer error:", error);
            Alert.alert("Błąd przy dodawaniu oferty");
            }
    };
    return (
    <View style={styles.businessContainer}>
        <ConfirmationModal
                            visible={confirmationModalVisible}
                            onClose={() => setConfirmationModalVisible(false)}
                            onConfirm={handleConfirm}
                            title="Potwierdź usunięcie"
                            message="Czy na pewno chcesz usunąć wybraną ofertę?"
                        />
        <CreateOfferModal
                            visible={offerModalVisible}
                            onClose={() => setOfferModalVisible(false)}
                            onConfirm={handleCreateOffer}
                            title="Dodawanie oferty"
                            firstText="Produkt/usługa:"
                            secondText="Liczba punktów uzyskiwanych za zakup:"
                        />
        <Text style={styles.businessText}>Dodaj lub usuń oferty zdobywania punktów dla klientów:</Text>
        <View style={styles.businessListContainer}>
             <FlatList
                style={styles.businessContainer}
                showsVerticalScrollIndicator={false}
                data={offers}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <OfferBody 
                        name={item.name}
                        points={item.points}
                        showDeleteButton={true}
                        buttonText='Usuń'
                        onActivate={() => {
                            setOfferToDelete(item.id);
                            setConfirmationModalVisible(true);
                        }}
                    />
                )}/>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={() => setOfferModalVisible(true)}>
            <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
    </View>
  );
}