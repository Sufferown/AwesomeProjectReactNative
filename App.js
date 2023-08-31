import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./Content/img/Silvestre.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Gatitos Encantadores</Text>
      <Text style={styles.subtitle}>Explora el mundo felino</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ver Gatitos</Text>
      </TouchableOpacity>
      <Text style={styles.greeting}>¡Hola, amante de los gatos!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: '#666',
  },
  button: {
    backgroundColor: '#ff7f50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  greeting: {
    marginTop: 20,
    fontSize: 20,
    color: '#444',
  },
});

export default App;
