import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Modal} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Feed from '../../components/Feed';
import { AntDesign } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import CreditCard from "../../components/CreditCard";
import FList from "../../components/FList";
import * as LocalAuthentication from 'expo-local-authentication';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics'

const rnBiometrics = new ReactNativeBiometrics()


const startWallet = [
  {
    "Issuer": "American Express",
    "Tier": "Blue Business Cash Card",
    "Spending Type": "Business",
    "Cash Back %": 2,
    "Bonus": 250,
    "Bonus Requirement": 5000,
    "Annual Fee": 0,
    "Free First Year?": "yes",
    "Link": "https://www.americanexpress.com/en-us/business/credit-cards/blue-business-cash/"
  },
  {
    "Issuer": "Chase",
    "Tier": "United Explorers Card",
    "Spending Type": "Travel",
    "Cash Back %": 2,
    "Bonus": 500,
    "Bonus Requirement": 3000,
    "Annual Fee": 95,
    "Free First Year?": "yes",
    "Link": "https://creditcards.chase.com/travel-credit-cards/united/united-explorer"
  },
  {
    "Issuer": "Capital One",
    "Tier": "SavorOne",
    "Spending Type": "Dining, Streaming Service, Entertainment, Grocery",
    "Cash Back %": 3,
    "Bonus": 200,
    "Bonus Requirement": 500,
    "Annual Fee": 0,
    "Free First Year?": "yes",
    "Link": "https://www.capitalone.com/credit-cards/savorone-dining-rewards/"
  },
  {
    "Issuer": "Bank of America",
    "Tier": "Unlimited Cash Rewards Card",
    "Spending Type": "Any",
    "Cash Back %": 1.5,
    "Bonus": 200,
    "Bonus Requirement": 1000,
    "Annual Fee": 0,
    "Free First Year?": "yes",
    "Link": "https://secure.bankofamerica.com/apply-credit-cards/public/icai-single/#/info/"
  }
]



export default function Home() {
  const [wallet, setWallet] = React.useState(startWallet);
  const [walletModal, setWalletModal] = React.useState(false);
  const [guideModal, setGuide] = React.useState(false);
  const [linkToken, setLinkToken] = React.useState('link-sandbox-76978d26-014f-43a7-bec2-7db43efa9202');
  const [paymentModal, setPaymentModal] = React.useState(false);
  // const address = Platform.OS === 'ios' ? '172.20.10.2' : '10.0.2.2';
  const address = 'localhost'

  const createLinkToken = React.useCallback(async () => {
    console.log("createLinkToken => address => ",address);
    await fetch(`http://172.20.10.2:8080/api/create_link_token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ address: address })
    })
      .then((response) => response.json())
      .then((data) => {
        setLinkToken(data.link_token);
        console.log("createLinkToken => ",data.link_token);
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

  

  const toggelWallet = () => {
    setWalletModal(!walletModal);
  }

  const toggelGuide = () => {
    setGuide(!guideModal);
  }

  const onFaceId = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    if (hasHardware) {
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();
      if (isEnrolled) {
        const { success } = await LocalAuthentication.authenticateAsync();
        if (success) {
          console.log("success");
        } else {
          console.log("failed");
        }
      }
    }
  }

  const togglePayment = async () => {
    setPaymentModal(!paymentModal);
    if(!paymentModal) await onFaceId();
  }

  return (
    <View style={[{width: '100%', height: '100%'}, styles.container]}>
      
      <LinearGradient
        colors={['#416481', '#1C3449']} // Specify your gradient colors here
        style={styles.banner}
        start={{ x: 0, y: 0.5 }} // Start from the left
        end={{ x: 1, y: 0.5 }}
      >
        <SafeAreaView style={{width: '100%', height: '100%', alignItems: 'center'}}>
          <View style={{flexDirection: 'row', width: '100%'}}>
            <TouchableOpacity onPress={toggelGuide} style={{ marginTop: 20, marginLeft: 20, left: 0, position: 'absolute' }}>
              <Ionicons  name="list-outline" size={32} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggelWallet} style={{ marginTop: 20, marginRight: 20, right: 0, position: 'absolute' }}>
              <Ionicons  name="wallet-outline" size={32} color="white" />
            </TouchableOpacity>
          </View>
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
            <TouchableOpacity onPress={togglePayment}>
              <Text style={{ fontSize: 20, fontWeight: 600 }} >
                Make Payment
              </Text>
              
            </TouchableOpacity>
          </View>
        </SafeAreaView>

      </LinearGradient>
      <Modal
      visible={paymentModal}
      animationType="fade"
      presentationStyle="fullScreen"
      onRequestClose={togglePayment}
      >
        <SafeAreaView style={{bottom: 0,alignItems:'center',width: '100%',position: 'absolute', height: '100%', borderWidth: 1, borderColor: 'red'}}>
          <TouchableOpacity onPress={togglePayment}>
            <Text>cancel</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>

      <Modal 
      visible={walletModal}
      animationType="slideInUp"
      presentationStyle="pageSheet"
      onRequestClose={toggelWallet}
      propagateSwipe={true}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <CreditCard/>
        </SafeAreaView>
      </Modal>
      <Modal
        visible={guideModal}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={toggelGuide}
      >
        <SafeAreaView style={{ flex: 1 , justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 30, fontWeight: 600, marginTop: 30}}>Next Steps Guide</Text>
          <FList style={{marginTop: 50}}/>
        </SafeAreaView>
      </Modal>

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
