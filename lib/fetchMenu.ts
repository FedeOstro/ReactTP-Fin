import axios from 'axios';

const SPOONACULAR_API_KEY = 'e057e1df4c4143b1a4589fedac7b11a9'; // Reemplaza con tu API Key de Spoonacular
const SPOONACULAR_URL = 'https://api.spoonacular.com/recipes/random';
     
export const fetchMenu = async () => {
  try {
    const response = await axios.get(SPOONACULAR_URL, {
      params: {
        number: 10, // Número de platos que deseas obtener
        apiKey: SPOONACULAR_API_KEY,
      },
    });
    return response.data.recipes; // La respuesta de Spoonacular contiene los platos en `recipes`
  } catch (error) {
    console.error("Error al obtener el menú:", error);
    return [];
  }
};
