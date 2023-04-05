import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from './SharedLayout';
import { MainPage } from 'pages/MainPage';
import { CategoriesPage } from 'pages/CategoriesPage';
import { CategoriesRecipes } from './CategoriesRecipes';
import { AddRecipePage } from 'pages/AddRecipePage';
import { MyRecipesPage } from 'pages/MyRecipesPage';
import { FavoritePage } from 'pages/FavoritePage';
import { ShoppingListPage } from 'pages/ShoppingListPage';
import { SearchPage } from 'pages/SearchPage';
import { RecipePage } from 'pages/RecipePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { WelcomePage } from 'pages/WelcomePage';
import { RegisterPage } from 'pages/RegisterPage';
// import { SigninPage } from 'pages/SigninPage';

import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Routes>

    
        {/* routing changes depending on authorizing of user */}
        {/* <Route path="/" element={<WelcomePage />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="signin" element={<SigninPage />} />
        </Route> */}
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<WelcomePage />} />
          <Route path="register" element={<RegisterPage />} />
          {/* <Route index element={<MainPage />} /> */}
          <Route path="main" element={<MainPage />} />
          <Route path="categories" element={<CategoriesPage />}>
            <Route path=":categoryName" element={<CategoriesRecipes />} />
          </Route>
          <Route path="add" element={<AddRecipePage />} />
          <Route path="my" element={<MyRecipesPage />} />
          <Route path="favorite" element={<FavoritePage />} />
          <Route path="shopping-list" element={<ShoppingListPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="recipe/:recipeId" element={<RecipePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};
