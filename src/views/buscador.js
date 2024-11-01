import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Header from '../components/header';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Buscar Comida" />
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar comida..."
      />
      <Text style={styles.text}>Resultados de búsqueda aparecerán aquí</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 16,
  },
  searchInput: {
    height: 40,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
  },
});

export default SearchScreen;
