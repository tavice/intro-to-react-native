import { StatusBar } from "expo-status-bar";
import { StyleSheet, 
  Text, 
  View, 
  Image, 
  SafeAreaView, 
  TouchableWithoutFeedback,
   TouchableOpacity, 
   TouchableHighlight,
  TouchableNativeFeedback } from "react-native";

export default function App() {
  console.log(require("./assets/icon.png"));
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello React Native</Text>
      <TouchableNativeFeedback onPress={() => console.log("Image tapped")}>
      <View style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }} />
      </TouchableNativeFeedback>
      
      <Image
        blurRadius={10}
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300",
        }}
      />
      <StatusBar style="ativeauto" />
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
