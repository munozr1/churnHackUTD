import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View>
      <View style={styles.banner}>
      </View>
      <Text>
        testing 2
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    // flex: 1,
    backgroundColor: '#43a15c',
    height: '35%',
    width: '100%',
  },
});
