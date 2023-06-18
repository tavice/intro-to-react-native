import React from 'react';
import { StyleSheet, View, Text, Image, Button, ImageBackground } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require('./assets/background.jpg')} // replace this with your own image path
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('./assets/logo-red.png')} // replace this with your own image path
          />
          <Text style={styles.logoText}>Sell What You Don't Need</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <Button title="Login" color="#fc5c65" onPress={() => {}} />
          <Button title="Register" color="#4ECDC4" onPress={() => {}} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    position: 'absolute',
    top: '20%',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    width: '100%',
    height: 70,
    padding: 0,
    backgroundColor: 'transparent', // make sure the button container has no background
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default WelcomeScreen;
