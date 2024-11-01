import axios from 'axios';
import { API_KEY, recipes_url } from './constants';


export const searchRecipes = async () => {
  try {
    const response = await axios.get(recipes_url, {
      params: {
        apiKey: API_KEY,
      }
    });
    return (response.data.results)
  } catch (error) {
    console.error('Error fetching recipes:', error);
  }
}

