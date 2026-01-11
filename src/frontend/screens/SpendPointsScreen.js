import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList} from 'react-native';
import { styles } from '../styles/styles.js';
import { SafeAreaView } from 'react-native-safe-area-context';
import OfferBody from '../components/offers/OfferBody.js';
import ConfirmationModal from '../components/offers/ConfirmationModal.js';
import { UserContext } from '../contexts/userContext.js';

export default function SpendPointsScreen({ businessId, businessName }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [offers, setOffers] = useState([]);
    const { userID } = useContext(UserContext);
    const [userPoints, setUserPoints] = useState(0);
    
        useEffect(() => {
            const fetchOffers = async () => {
                try {
                    const response = await fetch(`http://192.168.0.9:5000/business/${businessId}`);
                    const data = await response.json();
    
                    const offersArray = data.offers
                    ? Object.entries(data.offers).map(([id, offer]) => ({ id, ...offer }))
                    : [];

                    const filteredOffers = offersArray.filter(o => o.add_points === 0);
    
                    setOffers(filteredOffers);

                    const pointsResp = await fetch(`http://192.168.0.9:5000/client-points/${userID}`);
                    const pointsData = await pointsResp.json();
                    const pointsForBusiness = pointsData[businessId] || 0;
                    setUserPoints(pointsForBusiness);


                } catch (err) {
                    console.error("Fetch offers error:", err);
                    Alert.alert("Błąd", "Nie udało się pobrać ofert");
                }
            };
            fetchOffers();
        }, [businessId]);

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
                <Text style={styles.businessText}>Możesz wykorzystać punkty w {businessName}, wymieniając je na poniższe usługi. Obecnie masz {userPoints} punktów.</Text>
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
                                showActivateButton={true} 
                                onActivate={() => setModalVisible(true)}
                            />
                        )}
                    />
                </View>
            </View>
        );
}