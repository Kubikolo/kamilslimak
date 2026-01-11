import React, {useState, useEffect} from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from '../styles/styles.js';
import OfferBody from '../components/offers/OfferBody.js';

export default function GetPointsScreen({ businessId, businessName }) {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        const fetchOffers = async () => {
            try {
                const response = await fetch(`http://192.168.0.9:5000/business/${businessId}`);
                const data = await response.json();

                const offersArray = data.offers
                    ? Object.entries(data.offers).map(([id, offer]) => ({ id, ...offer }))
                    : [];

                const filteredOffers = offersArray.filter(o => o.cost_points === 0);

                setOffers(filteredOffers);
            } catch (err) {
                console.error("Fetch offers error:", err);
                Alert.alert("Błąd", "Nie udało się pobrać ofert");
            }
        };
        fetchOffers();
    }, [businessId]);

    return (
    <View style={styles.businessContainer}>
        <Text style={styles.businessText}>Możesz wykorzystać punkty w {businessName}, kupując następujące usługi:</Text>
        <View style={styles.businessListContainer}>
             <FlatList
                style={styles.businessContainer}
                showsVerticalScrollIndicator={false}
                data={offers}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <OfferBody name={item.name} points={item.points}/>
            )}/>
        </View>
    </View>
  );
}