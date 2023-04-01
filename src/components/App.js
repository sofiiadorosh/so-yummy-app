import { Routes, Route, Navigate } from 'react-router-dom';

import { SharedLayout } from './SharedLayout';
import { MainPage } from 'pages/MainPage';
import { CategoriesPage } from 'pages/CategoriesPage';
import { AddRecipePage } from 'pages/AddRecipePage';
import { FavoritePage } from 'pages/FavoritePage';
import { MyRecipesPage } from 'pages/MyRecipesPage';
import { RecipePage } from 'pages/RecipePage';
import { SearchPage } from 'pages/SearchPage';
import { ShoppingListPage } from 'pages/ShoppingListPage';
import { NotFoundPage } from 'pages/NotFoundPage';
// import { WelcomePage } from 'pages/WelcomePage';
// import { RegisterPage } from 'pages/RegisterPage';
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
          <Route index element={<MainPage />} />
          <Route path="main" element={<MainPage />} />
          <Route path="categories/:categoryName" element={<CategoriesPage />} />
          <Route path="add" element={<AddRecipePage />} />
          <Route path="favorite" element={<FavoritePage />} />
          <Route path="recipe/:recipeId" element={<RecipePage />} />
          <Route path="my" element={<MyRecipesPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="shopping-list" element={<ShoppingListPage />} />
          <Route path="*" element={<Navigate to={<NotFoundPage />} />} />
        </Route>
      </Routes>
    </div>
  );
};
