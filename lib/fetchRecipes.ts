import axios from 'axios';
import { API_KEY, recipes_url } from './constants';


export const searchRecipes = async (chars) => {
  try {
    const response = await axios.get(recipes_url, {
      params: {
        apiKey: API_KEY,
        query: chars
      }
    });
    return (response.data.results)
  } catch (error) {
    console.error('Error fetching recipes:', error);
  }
}

