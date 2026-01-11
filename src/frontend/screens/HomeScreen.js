import React, { useState, useEffect, useMemo, useContext } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Searchbar } from 'react-native-paper';
import { styles } from '../styles/styles';
import BusinessCard from '../components/home/BusinessCard';
import BusinessCardContainer from '../components/home/BusinessCardContainer';
import { UserContext } from '../contexts/userContext';
import { Text } from 'react-native';


export default function HomeScreen() {
  const { userID } = useContext(UserContext);
  const  clientId   = userID;

  const [searchQuery, setSearchQuery] = useState('');
  const [allItems, setAllItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [favouriteItems, setFavouriteItems] = useState([]);

  const onChangeSearch = (query) => setSearchQuery(query);

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {

        const response = await fetch('http://192.168.0.9:5000/business');
        const data = await response.json();

        const itemsArray = data ? Object.entries(data).map(([id, item]) => ({
          id,
          name: item.name || 'Brak nazwy',
          icon: item.icon || null,
          category: item.category || 'Inne',
        })) : [];
        
        console.log('Pobrane firmy:', itemsArray);
        setAllItems(itemsArray);
        setFilteredItems(itemsArray);
      } catch (error) {
        console.error('Błąd pobierania firm:', error);
      }
    };

    fetchBusinesses();

    // const interval = setInterval(fetchBusinesses, 5000);
    // return () => clearInterval(interval);

  }, []);


useEffect(() => {
  const fetchFavourites = async () => {
    try {
      const response = await fetch(`http://192.168.0.9:5000/favorited_items/${clientId}`);

      const data = await response.json();

      const favouriteIds = data && typeof data === 'object' ? Object.keys(data) : [];

      const favouritesArray = allItems.filter(item => favouriteIds.includes(item.id));
      
      console.log('Pobrane ulubione:', favouritesArray);
      setFavouriteItems(favouritesArray);
    } catch (error) {
      console.error('Błąd pobierania ulubionych:', error);
    }
  };

  fetchFavourites();

  // const interval = setInterval(fetchFavourites, 5000);
  // return () => clearInterval(interval);

}, [clientId, allItems]);


useEffect(() => {
    // const timeout = setTimeout(() => {
      
    // }, 300);
    const query = searchQuery.toLowerCase().trim();
      if (query === '') {
        setFilteredItems(allItems);
      } else {
        const results = allItems.filter(item =>
          item.name.toLowerCase().includes(query)
        );
        setFilteredItems(results);
      }
    // return () => clearTimeout(timeout);

}, [searchQuery, allItems]);


  const filteredFavourites = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (query === '') return favouriteItems;
    return favouriteItems.filter(item =>
      item.name.toLowerCase().includes(query)
    );
  }, [searchQuery, favouriteItems]);


  const filteredCategories = useMemo(() => {
    return [...new Set(filteredItems.map(item => item.category))];
  }, [filteredItems]);

  // const [businesses, setBusinesses] = React.useState([]);
  // const [favoriteIds, setFavoriteIds] = useState([]);


  // useEffect(() => {
  //   const fetchBusiness = async () => {
  //     const response = await fetch("http://192.168.0.9:5000/business");
  //     const data = await response.json();

  //     const businessesArray = Object.entries(data).map(
  //       ([id, business]) => ({
  //         id,
  //         ...business,
  //       })
  //     );
  //     setBusinesses(businessesArray);
  //   };

  //   const fetchFavorites = async () => {
  //   try {
  //     const response = await fetch(
  //       `http://192.168.0.9:5000/favorited_items/${userID}`,
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error(`HTTP error ${response.status}`);
  //     }

  //     const data = await response.json();
  //     setFavoriteIds(Object.keys(data));

  //   } catch (error) {
  //     console.error("Fetch favorited items error:", error);
  //   }
  // };

  //   fetchBusiness();
  //   fetchFavorites();
  // }, []);

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
        {filteredFavourites && filteredFavourites.length > 0 && (
          <BusinessCardContainer title="Ulubione">
            {filteredFavourites.map(item => (
              <BusinessCard key={item.id} text={item.name} />
            ))}
          </BusinessCardContainer>
        )}

        {filteredCategories.map(category => (
          <BusinessCardContainer key={category} title={category}>
            {filteredItems
              .filter(item => item.category === category)
              .map(item => (
                <BusinessCard key={item.id} text={item.name} />
              ))}
          </BusinessCardContainer>
        ))}

        <Text style={styles.businessCardCategoryTitle}>
          Wszystko
        </Text>
        {allItems.map((business) => (
          <BusinessCard
            key={business.id}
            notInCategory={true}
            text={business.name}
            iconUrl={business.icon}
            initialLiked={favouriteItems.includes(business.id)}
            businessID={business.id}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
