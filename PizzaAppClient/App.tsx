import React from "react";
import { SafeAreaView, Text, StyleSheet } from 'react-native';
// import { NavigationContainer } from "@react-navigation/native";
// import AppNavigator from './src/navigation/AppNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  }
})

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello, World!</Text>
    </SafeAreaView>
    // <NavigationContainer>
    //   <AppNavigator />
    // </NavigationContainer>
  );
}

export default App;