import React from 'react';
import { AuthStateContext } from './providers/AuthProvider';
import { View, Text , StyleSheet} from 'react-native';
import Home from './screens/home';



export default function Main() {
  const {
    $authState,
    $setAuthState,
  } = React.useContext(AuthStateContext);



  return (
    <>
    <View style={styles.container}>
      <Home style={styles.container}></Home>
    </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    height:'100%',
  },
  banner: {
    // flex: 1,
    backgroundColor: '#43a15c',
    height: '35%',
    width: '100%',
  },
});


