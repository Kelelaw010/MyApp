import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../components/quran.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Quran App</Text>
      <Text style={styles.subtitle}>Learn Quran and Recite once everyday</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4EFFD',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    height: 200,
    marginBottom: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#6C4AB6',
  },
  subtitle: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#FF896B',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
