import axios from 'axios';
import { API_KEY, menu_url } from './constants';


export const getMenu = async () => {
  try {
    const response = await axios.get(menu_url, {
      params: {
        apiKey: API_KEY,
      }
    });
    return (response.data.results)
  } catch (error) {
    console.error('Error fetching recipes:', error);
  }
}

