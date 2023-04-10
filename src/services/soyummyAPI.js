// import axios from 'axios';

// axios.defaults.baseURL = 'https://so-yummy-app-backend.onrender.com/api/';

// const getCategoryList = async () => {
//   try {
//     const response = await axios.get('recipes/category-list');
//     return response.data;
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// const getCategoryRecipes = async quantity => {
//   try {
//     const response = await axios.get(`recipes/main-page?limit=${quantity}`);
//     return response.data;
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// const getRecipesByCategory = async category => {
//   try {
//     const response = await axios.get(`recipes/category/${category}`);
//     return response.data;
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// const getRecipesById = async id => {
//   try {
//     const response = await axios.get(`recipes/${id}`);
//     return response.data;
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const getSearchByTitle = async (query, page = 1, limit) => {
//   try {
//     const response = await axios.get(
//       `/search?title=${query}&page=${page}&limit=${limit}`
//     );
//     return response.data;
//   } catch (error) {
//     console.log(error.message);
//     return null;
//   }
// };

// export const getSearchByIngredients = async (query, page = 1, limit) => {
//   try {
//     const response = await axios.get(
//       `/search?ingredients=${query}&page=${page}&limit=${limit}`
//     );
//     return response.data;
//   } catch (error) {
//     console.log(error.message);
//     return null;
//   }
// };

// export {
//   getCategoryList,
//   getCategoryRecipes,
//   getRecipesByCategory,
//   getRecipesById,
// };


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

const geMyRecipesList = async () => {
   try {
    const response = await instance.get('ownRecipes');
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
 }


export {
  getCategoryList,
  getCategoryRecipes,
  getRecipesByCategory,
  getRecipesById,
  geMyRecipesList
};
