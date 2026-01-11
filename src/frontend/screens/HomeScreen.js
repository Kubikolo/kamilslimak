import React, { useState, useEffect, useMemo, useContext } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Searchbar } from 'react-native-paper';
import { styles } from '../styles/styles';
import BusinessCard from '../components/home/BusinessCard';
import BusinessCardContainer from '../components/home/BusinessCardContainer';
import { UserContext } from '../contexts/userContext';


export default function HomeScreen() {
  const { userID } = useContext(UserContext);
  const  clientId   = userID;
if (!clientId) console.log("clientId is undefined in HomeScreen");

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

        setAllItems(itemsArray);
        setFilteredItems(itemsArray);
      } catch (error) {
        console.error('Błąd pobierania firm:', error);
      }
    };

    //fetchBusinesses();

    // const interval = setInterval(fetchBusinesses, 5000);
    // return () => clearInterval(interval);

  }, [allItems]);


useEffect(() => {
  const fetchFavourites = async () => {
    try {
      const response = await fetch(`http://192.168.0.9:5000/favorited_items/${clientId}`);

      const data = await response.json();

      const favouriteIds = data && typeof data === 'object' ? Object.keys(data) : [];

      const favouritesArray = allItems.filter(item => favouriteIds.includes(item.id));

      setFavouriteItems(favouritesArray);
    } catch (error) {
      console.error('Błąd pobierania ulubionych:', error);
    }
  };

  //fetchFavourites();

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
      </ScrollView>
    </SafeAreaView>
  );
}
