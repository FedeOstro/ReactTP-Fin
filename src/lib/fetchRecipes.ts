import axios from 'axios';
export const API_KEY = '9a510fbd7b084d4db268e001beaba018';

export const getRecipeDetail = async (id) => {
  try {
    const api = `https://api.spoonacular.com/recipes/${id}/information`
    const response = await axios.get(`${api}`, {
      params: {
        apiKey: API_KEY,
      }
    });
    const { title, image, healthScore, vegan, pricePerServing } = response.data;
    const recipeInfo = {
      title,
      image,
      healthScore,
      vegan,
      pricePerServing,
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