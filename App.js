import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View, Image } from "react-native";
import axios from "axios";

// to get your API-Key follow this simple guide:
// https://github.com/arendruni/homebridge-pihole#how-to-get-a-pi-hole-authentication-token
export const PI_HOLE_API_KEY = "!!!REPLACE WITH KEY!!!";

export default function App() {
  function pressHandler() {
    axios.get(
      `http://pi.hole/admin/api.php?disable=30&auth=${PI_HOLE_API_KEY}`
    );
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://avatars.githubusercontent.com/u/16827203",
          width: 150,
          height: 150,
        }}
      />
      <Button title="Disable for 30 Seconds" onPress={pressHandler.call(30)} />
      <StatusBar style="auto" />
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
  image: {
    margin: 50,
  },
});
