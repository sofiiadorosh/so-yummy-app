//============================================ 1 вари

import { useState, useEffect } from 'react';
import { getMyRecipesList, deleteFromMyRecipesList } from 'services/soyummyAPI';
import { Loader } from 'components/Loader';
import { MainPageTitle } from 'components/MainPageTitle';
import { Square } from 'components/Square';
import { MyRecipesList } from 'components/MyRecipesList';

import { MyRecipesPageSection, Container, Title } from './MyRecipesPage.styled';
import { NoRecipesText } from '../../components/Favorite/Favorite.styled';


export const MyRecipesPage = () => {


const [recipes, setRecipes] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const data = await getMyRecipesList();
        setRecipes(data.recipes);
        setIsLoading(false);
      } catch (error) {
       setError(error.message);
      }
    };
    getData();
  }, []);

  const deleteHandler = id => {
    try {
      const remove = async () => {
        const data = await deleteFromMyRecipesList(id);
        console.log(data)
        return data;  
      };
      remove();
      setRecipes(prevState => prevState.filter(elem => elem._id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <MyRecipesPageSection>
      <Container>
        <Square />
        <Title>
          <MainPageTitle title="My recipes"
          />
        </Title>
        {isLoading && <Loader />}
        {!recipes.length ? (<NoRecipesText>You dont have any recipes...</NoRecipesText>
        ) : (
          <MyRecipesList
            recipes={recipes}
            onDelete = {deleteHandler}
          />
          )
        }
        {error && <p>Whoops, something went wrong...</p>}
      </Container>
    </MyRecipesPageSection>
  );
};


//==================== переиспользования фейворитс

// import { MyRecipesList } from 'components/MyRecipesList/MyRecipesList';
// import { MainPageTitle } from 'components/MainPageTitle';
// import { Square } from 'components/Square';

// import { CategoriesSection, Container, Title } from '../FavoritePage/FavoritePage.styled';

// export const MyRecipesPage = () => {
//   return (
//     <>
//       <CategoriesSection>
//         <Container>
//           <Square />
//           <Title>
//             <MainPageTitle title="My recipes" />
//           </Title>
//           <MyRecipesList />
//         </Container>
//       </CategoriesSection>
//     </>
//   );
// };