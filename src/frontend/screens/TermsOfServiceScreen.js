import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, Alert, TouchableOpacity, ScrollView } from "react-native";
import {styles} from '../styles/styles';
import { SafeAreaView } from "react-native-safe-area-context";
import {useNavigation} from '@react-navigation/native';



export default function TermsOfServiceScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.termsOfServiceContainer}>
      <ScrollView>
        <View style={styles.termsOfServiceHeader}>
          <Text style={styles.termsOfServiceHeaderText}>Regulamin</Text>
        </View>
        <Text style={styles.termsOfServiceText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis commodo orci, ut pulvinar ex luctus eget. Donec sed dolor iaculis, rhoncus augue consectetur, venenatis est. Vivamus sit amet felis nec eros consequat malesuada quis blandit eros. Proin sed turpis in eros sodales malesuada vitae quis augue. Etiam orci ipsum, vulputate ut ex eu, consectetur facilisis urna. Proin finibus diam nec tortor iaculis pharetra. Integer porta molestie arcu, eget fringilla metus pellentesque ut. Maecenas ut leo at mi gravida congue. Aenean bibendum libero ac sodales rutrum. In pellentesque dolor consectetur ex mollis condimentum. Quisque ac ex id ante malesuada congue. Aenean eget pellentesque enim. Nunc condimentum neque sed lorem rhoncus facilisis. Proin non sem vitae sapien finibus fringilla sit amet vel quam. Quisque quis placerat ligula. Duis condimentum nisl vitae elit scelerisque, sed dignissim nisl tincidunt.
          Donec urna tellus, tincidunt vitae suscipit id, tempus quis nulla. Sed ut odio accumsan, sodales diam suscipit, placerat libero. Proin fermentum ultrices iaculis. Curabitur magna magna, interdum ut justo nec, aliquam dignissim tortor. Donec tincidunt felis sit amet lacus luctus facilisis. Praesent quis varius mauris. Sed porttitor lorem felis, gravida pharetra eros posuere fermentum. Suspendisse eleifend neque libero, ac varius lectus fringilla ac. Vivamus non sollicitudin orci, a rutrum turpis. Sed tincidunt dictum orci, nec tincidunt sapien vehicula nec. Donec aliquam elementum sodales. Vivamus feugiat magna sit amet dictum posuere.
          Phasellus sit amet nisi nec lectus eleifend posuere vel eu dolor. Nam vel sapien sed turpis laoreet laoreet. Aliquam at semper magna. Nunc sed ipsum mollis sem iaculis euismod. Suspendisse viverra posuere velit, vel tristique quam egestas quis. Praesent a vehicula purus. Praesent vehicula sem id dui feugiat pretium. Suspendisse nec sapien dictum, congue nunc sed, elementum lorem. Aliquam et turpis pharetra, lacinia nunc eu, laoreet lacus. In vel purus sed erat varius aliquam. Cras vitae feugiat dolor. Duis ac tempor mi.
          Quisque sed nisl augue. Duis consectetur enim et massa malesuada dignissim. Donec lacinia leo quis ligula viverra, sit amet lacinia massa gravida. Ut vel diam at sapien efficitur ullamcorper et at risus. Etiam non mollis risus. Mauris non pharetra lorem. Duis lobortis magna neque, nec pulvinar ligula egestas vel. Donec sodales lacinia erat id rhoncus. Maecenas a massa enim. Proin quis velit fermentum massa interdum tempor. Vestibulum eu dui ac leo elementum consectetur. Fusce euismod tellus vel sem dapibus volutpat. Aenean fringilla euismod nisl lobortis aliquet. Morbi molestie non leo id viverra.
          In pretium diam sed velit placerat, eu blandit lorem cursus. Nam et laoreet nibh. Nullam dictum mi purus, vel venenatis eros pretium et. Proin ut elit turpis. Duis ac dui lorem. Aliquam gravida odio et tellus mollis sodales. Mauris gravida quis ex sed lacinia. Pellentesque tempor accumsan nibh quis imperdiet. Aliquam malesuada tincidunt elit, vitae pharetra elit tincidunt eu. Ut laoreet vestibulum lorem vitae porta. In varius, massa nec accumsan commodo, dolor risus pulvinar nulla, a eleifend tellus augue nec est. Nunc libero lectus, laoreet id dolor ac, convallis varius sem. Pellentesque sed ultricies neque, ac vehicula sapien. Aliquam bibendum ante urna, in viverra quam scelerisque eu. Vestibulum non nisl mi. Aenean feugiat, eros nec rhoncus consequat, purus justo semper ligula, quis interdum nisi lacus sit amet risus.
          Maecenas at sapien pellentesque, cursus velit iaculis, aliquet dolor. In vitae nisl eu ante pellentesque luctus eget eu nisl. Phasellus nec diam quis nisi auctor semper vel id sapien. Donec sed porta dui, quis finibus nisl. Nam non tellus nec lacus tincidunt consectetur. Quisque auctor metus in purus volutpat, quis sollicitudin ipsum fermentum. Nullam vitae libero nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras risus elit, aliquam eu massa vel, sodales fringilla lectus. Sed ut odio suscipit, tempor nisl ut, molestie dolor. Suspendisse potenti. Vestibulum nec elementum nulla, in auctor odio. Ut tincidunt efficitur aliquam. Fusce sollicitudin volutpat euismod.
          Sed eget velit metus. Aliquam ultricies massa a malesuada fringilla. Donec a mi ante. Nulla odio leo, elementum ut dui ac, suscipit aliquet massa. Nam eu suscipit sem, a dapibus dui. Mauris ut felis ut sem maximus ultricies. Etiam ut maximus felis. Ut mollis, est non efficitur fringilla, enim metus aliquam libero, ut semper tellus tellus et enim. Praesent ultrices felis et nisl tristique maximus. Praesent aliquam sed dui vitae consequat. Sed nec urna vitae mauris tempor varius in id ex. Pellentesque non bibendum enim. Morbi at tortor quis nulla faucibus pellentesque. Aenean egestas dolor et tempus lobortis.
          Aliquam ut lectus auctor, faucibus nisl eu, dignissim erat. Nunc risus mauris, pretium eget lacus nec, imperdiet venenatis dolor. Nam porta placerat mauris nec malesuada. Nunc venenatis consectetur lacus eu ultricies. Pellentesque ante ex, iaculis eu est at, tempus sodales orci. Ut dolor turpis, aliquet et condimentum vel, faucibus sed magna. Duis pellentesque commodo eros id egestas. Vivamus sit amet rhoncus nisl, non gravida purus. Sed nec tempus metus. Donec dictum ac diam eget tincidunt. Duis ultricies ultrices mollis. Pellentesque consectetur urna lorem, eget tempus tellus pharetra vitae. Quisque ultricies dictum volutpat. Donec sit amet velit laoreet, tincidunt ante non, blandit ante. Curabitur malesuada volutpat fringilla. 
        </Text>
        <View style={styles.termsOfServiceLinkContainer}>
          <Text
            style={styles.termsOfServiceLink}
              onPress={() => { if (navigation.canGoBack()) {
                navigation.goBack();
            }}}
          >
            Powrót
          </Text>
        </View>
      </ScrollView>
      

    </SafeAreaView>
  );
}

