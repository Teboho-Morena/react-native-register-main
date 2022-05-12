import { StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";
import Login from "./components/Login";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>WELCOME!!</Text>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
  },
});
