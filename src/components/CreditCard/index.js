import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const cardData = [
  {
    id: 1,
    cardImage: require('../../../assets/american-express-blue-cash-everyday.png'),
    cardTitle: 'Card 1',
  },
  {
    id: 2,
    cardImage: require('../../../assets/united-explorers-card.png'),
    cardTitle: 'Card 2',
  },
  {
    id: 3,
    cardImage: require('../../../assets/bofa-unlimited-cash-rewards.png'),
    cardTitle: 'Card 3',
  },
];

export default function CreditCard() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView vertical style={{marginTop: 100}}>
        {cardData.map((card, index) => (
          <View key={card.id} style={styles.cardContainer}>
            <TouchableOpacity>
              <Image source={card.cardImage} style={styles.cardImage} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={{marginBottom: 100}}>
        <AntDesign name="plus" size={24} color="black"  />
      </TouchableOpacity>
    </SafeAreaView>
  ); j
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    width: 410,
    height: 250,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: -140, // Adjust the margin to overlap vertically by 80%
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  cardDetails: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardNumber: {
    fontSize: 16,
  },
  cardExpiry: {
    fontSize: 16,
  },
});
