import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Feed from '../../components/Feed';



export default function Home() {
  return (
    <View style={[{width: '100%', height: '100%'}, styles.container]}>
      <LinearGradient
        colors={['#416481', '#1C3449']} // Specify your gradient colors here
        style={styles.banner}
        start={{ x: 0, y: 0.5 }} // Start from the left
        end={{ x: 1, y: 0.5 }}
      >
        <SafeAreaView style={{width: '100%', height: '100%', alignItems: 'center'}}>
          <Text style={{marginTop: '20%', color: 'green', fontWeight: 600}}>
            Accumulated Balance
          </Text>
          <Text style={{ marginTop: 10, fontSize: 60, color: 'white'}}>
            7,125.87
          </Text>
          <Text style={{ marginTop: 10 }}>
            September 21, 2020
          </Text>
          <View style={[{marginTop: 65, width: '80%', height: 65, borderRadius: 15 , backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}, styles.shadow]}>
            <Text style={{fontSize: 20, fontWeight: 600}}>
              Make Payment
            </Text>
          </View>
        </SafeAreaView>


         


      </LinearGradient>
      <View style={{  width: '100%', marginTop: 445, height: '55%', marginLeft: 15}}>
        <Text style={{fontWeight: 700, fontSize: 20, marginBottom: 15 }}>
          Transactions
        </Text>
        <Feed/>
      </View>
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
    height: '40%' ,
    width: '100%',
    alignItems: 'center',
    borderRadius: 15
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});
