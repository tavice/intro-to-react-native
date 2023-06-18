import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Touch,
  Button,
} from "react-native";

export default function App() {
  console.log(require("./assets/icon.png"));
  return (
    <SafeAreaView style={styles.container}>
      <Button 
      color="orange"
      title="Click ME" 
      onPress={() => console.log("button tapped")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
