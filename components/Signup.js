import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Signup() {
  return (
    <View style={StyleSheet.container}>
      <TextInput placeholder="Name & Surname" />
      <TextInput style={styles.email} placeholder="Email Address" />
      <TextInput placeholder="Password" />
      <TextInput style={styles.confirm} placeholder="Comfirm Password" />
      <Button title="Sign Up" onPress={Signup} />
      <View>
        <Text style={styles.gotaccount}>Already have a account</Text>
        <Button style={styles.button} title="Sign in" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  email: {
    marginTop: 10,
    marginBottom: 10,
  },
  confirm: {
    marginTop: 10,
    marginBottom: 10,
  },
  gotaccount: {
    marginTop: 10,
  },
  button: {
    fontSize: 10,
  },
});
