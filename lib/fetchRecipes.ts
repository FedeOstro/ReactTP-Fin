import axios from 'axios';
import { API_KEY, recipe_detail_url } from './constants';

export const getRecipeDetail = async (id) => {
  try {
    const response = await axios.get(`${recipe_detail_url}/${id}/information`, {
      params: {
        apiKey: API_KEY,
      }
    });

    return {
      title: response.data.title,
      image: response.data.image,
      description: response.data.summary, // El campo suele llamarse `summary` en la API
      ingredients: response.data.extendedIngredients.map((ingredient) => ingredient.original),
      instructions: response.data.instructions,
    };
  } catch (error) {
    console.error('Error fetching recipe detail:', error);
    throw error;
  }
};
