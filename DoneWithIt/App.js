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
  Alert,
  Button,
} from "react-native";

export default function App() {
  console.log(require("./assets/icon.png"));
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button 
      color="blue"
      title="Click ME" 
      onPress={() => Alert.prompt('My Mitle', 'My message', text => console.log(text))} />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
