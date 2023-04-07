import { useEffect, useState } from 'react';

// import Notiflix from 'notiflix';

import {
  // addToFavorite,
  // deleteFromFavorite,
  getAllFavorites,
} from 'services/soyummyAPI';

import { Paginator } from 'components/Paginator/Paginator';
import { Loader } from 'components/Loader';
import { RecipesList } from 'components/RecipesList';

import { PaginationWrp, NoRecipesText } from './Favorite.styled';

export const Favorite = () => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    try {
      getAllFavorites(page, 4).then(res => {
        console.log(res);
        if (!res) {
          setLoader(false);
          return;
        }
        setLoader(false);
        const totalPages = Math.ceil(res.total / 4);
        setCount(totalPages);
        setAllRecipes(res.recipes);
      });
    } catch (error) {
      setLoader(false);
      console.log(error.message);
    }
  }, [page]);

  // const handelDelete = async (id, event) => {
  //   if (event.target.disabled) {
  //     return;
  //   }
  //   event.target.disabled = true;

  //   await deleteFromFavorite(id);
  //   setLoader(true);
  //   console.log(id);
  //   // Notiflix.Notify.warning('Recipe was deleted from favorite list');
  //   await getAllFavorites(page, 4)
  //     .then(res => {
  //       setLoader(false);
  //       console.log(res);
  //       if (!res) {
  //         return;
  //       }
  //       setPage(1);
  //       const totalPages = Math.ceil(res.total / 4);
  //       setCount(totalPages);
  //       setAllRecipes(res.recipes ?? []);
  //     })
  //     .catch(e => {
  //       console.log(e.message);
  //       setLoader(false);
  //     });
  // };

  const onPageChange = (e, page) => {
    setPage(page);
  };

  return (
    <>
      {loader && <Loader />}
      {allRecipes.length !== 0 && (
        <>
          <RecipesList items={allRecipes} />
          <PaginationWrp>
            {count > 1 && (
              <Paginator count={count} page={page} isChange={onPageChange} />
            )}
          </PaginationWrp>
        </>
      )}
      {!allRecipes.length && (
        <NoRecipesText>You dont have any favorites...</NoRecipesText>
      )}

      {/* <ul className={css.cardList}>
        {allRecipes.length !== 0 && (
          allRecipes.map(({ _id, title, description, time, preview }) => {
            return (
              <RecipeCard
                key={_id}
                id={_id}
                trashClass={'lightBcg'}
                title={title}
                time={time}
                text={description}
                onDelete={e => {
                  handelDelete(_id, e);
                }}
                imgComponent={preview}
              />
            );
          })
        )
        )}
      </ul>*/}
    </>
  );
};
