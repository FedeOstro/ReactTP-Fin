import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Header from '../components/header';

const DetailScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Detalles de Comida" />
      <Image source={{ uri: 'https://example.com/image.jpg' }} style={styles.image} />
      <Text style={styles.title}>Nombre de la Comida</Text>
      <Text style={styles.description}>
        Descripción de la comida con detalles sobre ingredientes, preparación, etc.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
  },
});

export default DetailScreen;
