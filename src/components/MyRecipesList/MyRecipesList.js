//====================== вар 1 
import { List } from './MyRecipesList.styled.js';
import { MyRecipesItem } from 'components/MyRecipesItem/MyRecipesItem.js';

export const MyRecipesList = ({ onDelete, recipes }) => {
  return (
  <>
    <List>
       {recipes.map(item => (
         <MyRecipesItem
           key={item._id}
           items={item}
           onDelete={onDelete}
           />
      ))}
      </List>
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
