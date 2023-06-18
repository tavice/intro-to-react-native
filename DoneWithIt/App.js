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
  Dimensions,
} from "react-native";
import { useDimensions } from "@react-native-community/hooks";
import { useDeviceOrientation } from "./components/useDeviceOrientation";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row", // row, column, row-reverse, column-reverse
        justifyContent: "center", // flex-start, flex-end, center, space-around, space-between, space-evenly
        alignItems: "center", // flex-start, flex-end, center, stretch, baseline
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          alignSelf: "flex-start",
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
