// Buscador.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert, FlatList, Image, TouchableOpacity } from 'react-native';
import { useMenu } from '../context/MenuContext';  
import { searchRecipe } from '../lib/fetchRecipes';

const SearchScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [platos, setPlatos] = useState([]);
  const { addPlato } = useMenu();  

  const fetchPLato = async (name) => {
    try {
      const result = await searchRecipe(name);  
      setPlatos(result);
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

  const handleDetail = (item) => {
    navigation.navigate('Detalle', { id: item.id });
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => handleAddToMenu(item)} style={styles.addButton}>
            <Text style={styles.addButtonText}>Añadir</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDetail(item)} style={styles.detailButton}>
            <Text style={styles.detailButtonText}>Detalle</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
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
        ListEmptyComponent={<Text style={styles.textoSinRes}>No se encontraron resultados</Text>}
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
  textoSinRes: {
    textAlign: 'center',
    marginTop: 30
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
  },
  detailButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginLeft: 8,
  },
  detailButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default SearchScreen;
