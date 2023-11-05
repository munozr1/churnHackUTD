import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';



export default function Header(props) {

  return (
    <View style={[{ width: '100%', height: '100%' }, styles.container]}>
      <LinearGradient
        colors={['#416481', '#1C3449']} // Specify your gradient colors here
        style={styles.banner}
        start={{ x: 0, y: 0.5 }} // Start from the left
        end={{ x: 1, y: 0.5 }}
      >
        <SafeAreaView style={{ width: '100%', height: '100%', alignItems: 'center' }}>
          <Text style={{ marginTop: '20%', color: 'green', fontWeight: 600 }}>
            Accumulated Balance
          </Text>
          <View>
            <MaterialIcons name="attach-money" size={24} color="black" />
            <Text style={{ marginTop: 10, fontSize: 60, color: 'white' }}>
              {props.balance}
            </Text>
          </View>
          
          <Text style={{ marginTop: 10 }}>
            {props.date}
          </Text>

          <View style={[{ marginTop: 65, width: '80%', height: 65, borderRadius: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }, styles.shadow]}>
            <TouchableOpacity >
              <Text style={{ fontSize: 20, fontWeight: 600 }} >
                Make Payment
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>

      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0
  },
  banner: {
    top: 0,
    position: 'absolute',
    height: '40%',
    width: '100%',
    alignItems: 'center',
    borderRadius: 15
  },
  shadow: {
    width: 200,
    height: 200,
    backgroundColor: 'white',
    shadowColor: 'black', // Shadow color (iOS)
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3, // Shadow opacity (iOS)
    shadowRadius: 4, 
  }
});
