import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { store } from 'redux/store';
import { ThemeProvider } from 'styled-components';
import { theme } from '../constants';

// import PrivateRoute from 'routes/PrivateRoute';
// import PublicRoute from 'routes/PublicRoute';

import { SharedLayout } from './SharedLayout';
import { MainPage } from 'pages/MainPage';
import { CategoriesPage } from 'pages/CategoriesPage';
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

import { updateDataUser } from 'redux/auth/slice';

import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  useEffect(() => {
    const onStorageChange = e => {
      if (e.key === 'persist:refresh-user' && e.newValue !== e.oldValue) {
        try {
          const updatedLocalStorageData = JSON.parse(e.newValue);
          store.dispatch(updateDataUser(updatedLocalStorageData));
        } catch (error) {}
      }
    };

    window.addEventListener('storage', onStorageChange);

    return () => {
      window.removeEventListener('storage', onStorageChange);
    };
  }, []);

  const { darkTheme } = useSelector(state => state.theme);

  return (
    <div>
      <ThemeProvider theme={darkTheme ? theme.dark : theme.light}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/signin" element={<SigninPage />} />

          <Route path="/" element={<SharedLayout />}>
            <Route path="main" element={<MainPage />} />
            <Route index element={<MainPage />} />
            <Route
              path="categories/:categoryName"
              element={<CategoriesPage />}
            />
            <Route path="add" element={<AddRecipePage />} />
            <Route path="my" element={<MyRecipesPage />} />
            <Route path="favorite" element={<FavoritePage />} />
            <Route path="shopping-list" element={<ShoppingListPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="recipe/:recipeId" element={<RecipePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
};
