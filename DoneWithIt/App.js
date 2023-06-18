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
  //console.log(Dimensions.get("screen"));
  // console.log(useDimensions);
  // console.log(useDeviceOrientation());
  const {landscape} = useDeviceOrientation();
  console.log('landscape is', landscape);

  return (
    <SafeAreaView style={[styles.container]}>
      <View
        style={{ backgroundColor: "dodgerblue", 
        width: "100%", 
        height: landscape ? "100%" : "30%"
      }}
      >
        <Text>Hello React Native</Text>
      </View>
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
