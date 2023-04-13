import instance from '../redux/auth/operations';

const getCategoryList = async () => {
  try {
    const response = await instance.get('recipes/category-list');
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const getCategoryRecipes = async quantity => {
  try {
    const response = await instance.get(`recipes/main-page?limit=${quantity}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const getRecipesByCategory = async category => {
  try {
    const response = await instance.get(`recipes/category/${category}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const getRecipesById = async id => {
  try {
    const response = await instance.get(`recipes/${id}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getSearchByTitle = async (query, page = 1, limit) => {
  try {
    const response = await instance.get(
      `/search?title=${query}&page=${page}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const getSearchByIngredients = async (query, page = 1, limit) => {
  try {
    const response = await instance.get(
      `/search?ingredients=${query}&page=${page}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

const getAllFavorites = async () => {
  try {
    const response = await instance.get(`/favorite`);
    if (response && response.data) {
      return response.data;
    }
    return null;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

const addToFavorite = async id => {
  try {
    const response = await instance.post(`/favorite`, {
      favorite: id,
    });
    return response;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

const deleteFromFavorite = async id => {
  try {
    const response = await instance.delete(`/favorite/${id}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

const getMyRecipesList = async () => {
  try {
    const response = await instance.get('/ownRecipes');
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
const addToMyRecipesList = async id => {
  try {
    const response = await instance.post('ownRecipes', { recipe: id });
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
const deleteFromMyRecipesList = async id => {
  try {
    const response = await instance.delete(`ownRecipes/${id}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};


const getShoppingList = async () => {
  try {
    const response = await instance.get('shopping-list');
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const addToShoppingList = async ingredient => {
  try {
    const response = await instance.post('shopping-list', ingredient);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const deleteFromShoppingList = async id => {
  try {
    const response = await instance.delete(`/shopping-list/${id}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export {
  getCategoryList,
  getCategoryRecipes,
  getRecipesByCategory,
  getRecipesById,
  addToMyRecipesList,
  getMyRecipesList,
  deleteFromMyRecipesList,
  getShoppingList,
  addToShoppingList,
  deleteFromShoppingList,
  getAllFavorites,
  addToFavorite,
  deleteFromFavorite,
};
