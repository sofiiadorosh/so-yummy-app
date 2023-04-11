// import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMyRecipesList } from 'services/soyummyAPI';

import { MainPageTitle } from 'components/MainPageTitle';
import { Square } from 'components/Square';
import { MyRecipesList } from 'components/MyRecipesList';
import { Loader } from 'components/Loader';
import { MyRecipesPageSection, Container, Title, NoRecipesText } from './MyRecipesPage.styled';


export const MyRecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { recipesCard } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const data = await getMyRecipesList(recipesCard);
        setRecipes(data.recipes);
        setIsLoading(false);
      } catch (error) {
       setError(error.message);
      }
    };
    getData();
  }, [recipesCard]);

  //  const deleteHandler = id => {
  //   try {
  //     const remove = async () => {
  //       const data = await deleteFromMyRecipesList(id);
  //       return data;
  //     };
  //     remove();
  //     setRecipes(prevState => prevState.filter(elem => elem._id !== id));
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <MyRecipesPageSection>
      <Container>
        <Square />
        <Title>
          <MainPageTitle title="My recipes" />
        </Title>
        {isLoading && <Loader />}
        {recipes.length > 0 && !isLoading && <MyRecipesList items={recipes}/>}
        {error && <NoRecipesText>You dont have own recipes...</NoRecipesText>}
      </Container>
    </MyRecipesPageSection>
  );
};

// deleteMyRecipes={deleteHandler} в 56 строку