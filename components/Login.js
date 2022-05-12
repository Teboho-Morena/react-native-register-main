import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Login() {
  return (
    <View style={StyleSheet.container}>
      <TextInput placeholder="Email Or Username" />
      <TextInput style={styles.pswd} placeholder="Password" />
      <Button title="Login" onPress={Login} />
      <View>
        <Text style={styles.noaccount}>New User?</Text>
        <Button style={styles.button} title="Create New Account" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pswd: {
    marginTop: 10,
    marginBottom: 10,
  },
  noaccount: {
    marginTop: 10,
  },
  button: {
    fontSize: 10,
  },
});
