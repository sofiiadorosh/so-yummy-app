// import { Outlet } from 'react-router-dom';
 import { useState, useEffect } from 'react'


import { MainPageTitle } from 'components/MainPageTitle';
import { Square } from 'components/Square';
import { MyRecipesList } from 'components/MyRecipesList';

import { MyRecipesPageSection, Container, Title} from './MyRecipesPage.styled';

// export const MyRecipesPage = () => {
//   return (
//     <MyRecipesPageSection>
//       <Container>
//         <Square />
//         <Title>
//           <MainPageTitle title="My recipes" />
//         </Title>
//         <MyRecipesList />

//       </Container>
//     </MyRecipesPageSection>
//   );
// };


// робочий варінт




 export const MyRecipesPage = () => {
 
 const [recipes, setRecipes] = useState([]);
 const [error, setError] = useState(null);

  useEffect(() => {

    const getData = async () => {
      try {
        setRecipes(recipes);
      } catch (error) {
        setError(error.message);
      }
    };
    getData();
  }, [recipes]);

  return (
    <MyRecipesPageSection>
      <Container>
        <Square />
        <Title>
          <MainPageTitle title="My recipes" />
        </Title>
        <MyRecipesList items={recipes} />

      </Container>
    </MyRecipesPageSection>
  );
};

