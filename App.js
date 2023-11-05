import React from 'react';
import { StyleSheet } from 'react-native';
import { AuthStateProvider } from './src/providers/AuthProvider';
// import { FirestoreProvider } from './src/providers/FirestoreProvider';
import Main from './src/main';


export default function App() {

  return (
    <AuthStateProvider>
      {/* <FirestoreProvider> */}
        <Main></Main>
      {/* </FirestoreProvider> */}
    </AuthStateProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
