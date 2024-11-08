import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert, FlatList, Image, TouchableOpacity } from 'react-native';
import Header from '../components/header';
import { searchRecipe } from '../lib/fetchRecipes';
import { useMenu } from '../context/MenuContext';

const SearchScreen = () => {
  const [name, setName] = useState('');
  const [platos, setPlatos] = useState([]);
  const { addPlato } = useMenu(); 

  const fetchPLato = async (name) => {
    try {
      const result = await searchRecipe(name);
      setPlatos(result);
      console.log(result);
    } catch (error) {
      console.error('Error al buscar la receta:', error);
    }
  };

  const handleSearch = () => {
    if (name.length <= 2) {
      Alert.alert('ERROR: La búsqueda tiene que tener más de dos caracteres');
    } else if (name.trim() !== '') {
      fetchPLato(name);
    } else {
      Alert.alert('El campo de búsqueda está vacío');
    }
  };

  const handleAddToMenu = (item) => {
    addPlato(item);
    Alert.alert('Plato añadido al menú:', item.title);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{item.title}</Text>
      <TouchableOpacity onPress={() => handleAddToMenu(item)} style={styles.addButton}>
        <Text style={styles.addButtonText}>Añadir</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title="Buscar Comida" />
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar comida..."
        value={name}
        onChangeText={setName}
      />
      <Button title="Buscar" onPress={handleSearch} />
      <FlatList
        data={platos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text>No se encontraron resultados</Text>}
      />
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
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#EEE',
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  itemTitle: {
    flex: 1,
    fontSize: 12,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default SearchScreen;
