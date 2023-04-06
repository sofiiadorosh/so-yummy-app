import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PrivateRoute from 'routes/PrivateRoute';
import PublicRoute from 'routes/PublicRoute';

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
import { SigninPage } from 'pages/SigninPage';

import { selectIsLoggedIn, selectRefreshToken } from 'redux/auth/selectors';
import { getCurrentUser } from 'redux/auth/operations';

import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectRefreshToken);

  const dispatch = useDispatch();

    useEffect(() => {
    if (token === null) return;
    dispatch(getCurrentUser());
  }, [dispatch, token]);


  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={
          <PublicRoute component={<RegisterPage />} />
        } />
        <Route path="/signin" element={
          <PublicRoute component={<SigninPage />} />
        } />
        {isLoggedIn && (
          <Route path="/" element={
              <PrivateRoute component={<SharedLayout />} />
            } >
            <Route path="main" index element={
              <PrivateRoute redirectTo="/signin" component={<MainPage />} />
            } />
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
        )}
      
      </Routes>
    </div>
  );
};
