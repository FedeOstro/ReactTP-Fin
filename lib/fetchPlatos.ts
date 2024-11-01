import axios from 'axios';



export const fetchRecipes = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apiKey: API_KEY,
      }
    });
    return (response.data.results)
  } catch (error) {
    console.error('Error fetching recipes:', error);
  }
}

fetchRecipes();
