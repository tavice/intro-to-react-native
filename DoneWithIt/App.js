import React from "react";
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
  Platform,
  StatusBar,
  
} from "react-native";

export default function App() {
  console.log(require("./assets/icon.png"));
  return (
    <SafeAreaView style={[styles.container]}>
      <Button
        title="Click ME"
        onPress={() => console.log("Button Tapped")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  
  },
});
