import axios from 'axios';
export const API_KEY = '35d60d8d6b0c40a3ad0047d40fd4ca6f';

export const getRecipeDetail = async (id) => {
  try {
    const api = `https://api.spoonacular.com/recipes/${id}/information`
    const response = await axios.get(`${api}`, {
      params: {
        apiKey: API_KEY,
      }
    });
    const { title, image, healthScore, vegan } = response.data;
    const recipeInfo = {
      title,
      image,
      healthScore,
      vegan
    }
    return (recipeInfo)
  } catch (error) {
    console.error('Error fetching recipe detail:', error);
    return error
  }
};

export const searchRecipe = async (name) => {
  try{
    const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`,{
      params: {
       apiKey: API_KEY,
       query: name
      }
    })
    return (response.data.results)
  }catch(error){
    console.error('Error searchReacipe ' + error)
    return error
  }
}