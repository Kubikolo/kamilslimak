import React, { useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
import { styles } from '../../styles/styles'

export default function BusinessCardContainer({ children, title}) {
  return (
    <View style={styles.businessCardCategory}>
        <Text style={styles.businessCardCategoryTitle}>
            {title}
        </Text>
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.businessCardContainer}
        >

        {React.Children.map(children, (child, index) => (
            <View key={index} style={styles.businessCardWrapper}>
                {child}
            </View>
        ))}
        </ScrollView>
    </View>
  );
}