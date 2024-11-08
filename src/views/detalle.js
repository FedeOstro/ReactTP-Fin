import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import Header from '../components/header';
import { getRecipeDetail } from '../lib/fetchRecipes'; 

const DetailScreen = ({ route }) => {
  const { id } = route.params; 
  const [recipe, setRecipe] = useState({}); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchRecipeDetail = async () => {
      try {
        const data = await getRecipeDetail(id); 
        console.log("Receta cargada:", data); 
        setRecipe(data)
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      } finally {
        setLoading(false); 
      }
    };
    fetchRecipeDetail();
  }, [id]); 

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FFA07A" />
      </View>
    );
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
      <Image
        source={{ uri: recipe.image }}
        style={{ width: 300, height: 300, borderRadius: 10, marginTop: 20 }}
      />
      <Text>{recipe.title}</Text>
      <Text>{recipe.healthScore}</Text>
      <Text>{recipe.vegan ? 'Vegan' : 'Not Vegan'}</Text>
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
});

export default DetailScreen;
