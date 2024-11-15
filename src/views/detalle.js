import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Header from '../components/header';
import { getRecipeDetail } from '../lib/fetchRecipes'; 
import { useMenu } from '../context/MenuContext';

const DetailScreen = ({ route, navigation }) => {
  const { id } = route.params; 
  const [recipe, setRecipe] = useState({}); 
  const [loading, setLoading] = useState(true); 
  const { searchPlato, removePlato, addPlato } = useMenu()
  const [inMenu, setInMenu] = useState(false)

  useEffect(() => {
    const fetchRecipeDetail = async () => {
      try {
        const data = await getRecipeDetail(id); 
        console.log("Receta cargada:", data); 
        setRecipe(data)
        setInMenu(searchPlato(data))
        console.log(inMenu)
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      } finally {
        setLoading(false); 
      }
    };
    fetchRecipeDetail();
  }, [id]); 

  const handleRemove = () => {
    removePlato(recipe.id)
    navigation.navigate('Home')
  }

  const handleAdd = () => {
    addPlato(recipe.id)
    navigation.navigate('Home')
  }

  if (!recipe) {
    return ( 
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>No se pudo cargar la información del plato.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
    <Header title="Detalles de Comida" />
    <Text style={styles.titleText}> {recipe.title}</Text>
    <Image
      source={{ uri: recipe.image }}
      style={{ width: 300, height: 300, borderRadius: 10, marginTop: 20, marginLeft: 28 }}
    />
    <Text> Puntuacion: {recipe.healthScore}</Text>
    <Text>Tipo de Plato:{recipe.vegan ? 'Vegan' : 'Not Vegan'}</Text>
    {inMenu ? (
      <TouchableOpacity onPress={handleRemove} style={[styles.button, styles.red]}>
        <Text style={styles.buttonText}>Eliminar</Text>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity onPress={handleAdd} style={[styles.button, styles.blue]}>
        <Text style={styles.buttonText}>Añadir</Text>
      </TouchableOpacity>
    )}
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
    marginBottom: 16,
  },
  ingredientsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  ingredients: {
    fontSize: 16,
    marginBottom: 16,
  },
  instructionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  instructions: {
    fontSize: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  titleText: {
    fontSize: 30,
    marginTop: 20,
    textAlign: 'center'
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 16,
  },
  red: {
    backgroundColor: 'red',
  },
  blue: {
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default DetailScreen;
