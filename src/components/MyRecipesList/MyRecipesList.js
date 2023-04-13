//====================== вар 1 

import { useState, useEffect } from 'react';
// import Notiflix from 'notiflix';
import { Loader } from 'components/Loader';
// import { List } from './MyRecipesList.styled.js';
import { MyRecipesItem } from 'components/MyRecipesItem/MyRecipesItem.js';
import { deleteFromMyRecipesList, getMyRecipesList } from 'services/soyummyAPI';


export const MyRecipesList = ({ items }) => {
  
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

  // useEffect(() => {
  //   setIsLoading(true);
  //   getMyRecipesList()
  //     .then(res => {
  //       console.log(res);
  //       if (!res) {
  //         setIsLoading(false);
  //         return;
  //       }
  //       if (res.length === 0) {
  //         setIsLoading(false);
  //         Notiflix.Notify.warning('Your Favorites is ampty');
  //       }
  //       if (res.length > 0) {
  //         setIsLoading(false);
  //         getMyRecipesList(res);
  //       }
  //     })
  //     .catch(error => {
  //       console.log(error.message);
  //       setIsLoading(false);
  //     });
  // }, []);

  // const deleteHandler = async (id, event) => {
  //     try {
  //     await deleteFromMyRecipesList(id);
  //     Notiflix.Notify.warning('Recipe was deleted from favorite list');
  //     const res = await getMyRecipesList(recipes);
  //     console.log(res);
  //     if (!res) {
  //       return;
  //     }
  //     setRecipes(res ?? []);
  //   } catch (e) {
  //     console.log(e.message);
  //     Notiflix.Notify.failure('Failed to delete recipe from favorite list');
  //   }
  // };

    const deleteHandler = id => {
    try {
      const remove = async () => {
        const data = await deleteFromMyRecipesList(id);
        return data;
      };
      remove();
      setRecipes(prevState => prevState.filter(elem => elem._id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
  <>
    {isLoading && <Loader />}
    <ul>
       {recipes.map(item => (
         <MyRecipesItem
           key={item._id}
           items={item}
           deleteRecipe={deleteHandler}
           />
      ))}
      </ul>
  </>
  );
};

//==================== переиспользования фейворитс

// import { useEffect, useState } from 'react';


// import { deleteFromMyRecipesList, getMyRecipesList } from 'services/soyummyAPI';
// import { Loader } from 'components/Loader';
// import { MyRecipesItem } from 'components/MyRecipesItem/MyRecipesItem';

// import { NoRecipesText } from '../Favorite/Favorite.styled';

// export const MyRecipesList = () => {
//   const [allRecipes, setAllRecipes] = useState([]);
//   const [loader, setLoader] = useState(false);


//   useEffect(() => {
//     setLoader(true);
//     getMyRecipesList()
//       .then(res => {
//         console.log(res);
//         if (!res) {
//           setLoader(false);
//           return;
//         }
//         if (res.length === 0) {
//           setLoader(false);
//           Notiflix.Notify.warning('Your Favorites is ampty');
//         }
//         if (res.length > 0) {
//           setLoader(false);
//           setAllRecipes(res);
//         }
//       })
//       .catch(error => {
//         console.log(error.message);
//         setLoader(false);
//       });
//   }, []);

//   const handelDelete = async (id, event) => {
//     try {
//       await deleteFromMyRecipesList(id);
//       setLoader(true);
//       Notiflix.Notify.warning('Recipe was deleted from favorite list');
//       setLoader(false);

//       const res = await getMyRecipesList();
//       console.log(res);

//       if (!res) {
//         return;
//       }
//       setAllRecipes(res ?? []);
//     } catch (e) {
//       console.log(e.message);
//       setLoader(false);
//       Notiflix.Notify.failure('Failed to delete recipe from favorite list');
//     }
//   };

//   return (
//     <>
//       {loader && <Loader />}
//       {!allRecipes.length ? (
//         <NoRecipesText>You dont have any recipes...</NoRecipesText>
//       ) : (
//         <ul>
//           {allRecipes.length > 0 &&
//             allRecipes.map(({ _id, title, description, time, thumb }) => {
//               return (
//                 <MyRecipesItem
//                   key={_id}
//                   id={_id}
//                   title={title}
//                   time={time}
//                   text={description}
//                   onDelete={e => {
//                     handelDelete(_id, e);
//                   }}
//                   imgComponent={thumb}
//                 />
//               );
//             })}
//         </ul>
//       )}
//     </>
//   );
// };
