import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Feed from '../../components/Feed';



export default function Home() {
  const [linkToken, setLinkToken] = React.useState(null);
  const address = Platform.OS === 'ios' ? '172.20.10.2' : '10.0.2.2';
  // const address = 

  const createLinkToken = React.useCallback(async () => {
    console.log("createLinkToken => address => ",address);
    await fetch(`http://${address}:8080/api/create_link_token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ address: address })
    })
      .then((response) => response.json())
      .then((data) => {
        setLinkToken(data.link_token);
      })
      .catch((err) => {
        console.log("createLinkToken => ",err);
      });
  }, [setLinkToken])

  React.useEffect(() => {
    if (linkToken == null) {
      createLinkToken();
    }
  }, [linkToken]);

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
            <TouchableOpacity onPress={createLinkToken}>
              <Text style={{ fontSize: 20, fontWeight: 600 }} >
                Make Payment
              </Text>
            </TouchableOpacity>
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
