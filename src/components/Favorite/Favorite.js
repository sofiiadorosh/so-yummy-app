import { useEffect, useState } from 'react';
import Notiflix from 'notiflix';

import { deleteFromFavorite, getAllFavorites } from 'services/soyummyAPI';
import { Loader } from 'components/Loader';
import { RecipesCard } from 'components/RecipesCard/RecipesCard';

import { NoRecipesText } from './Favorite.styled';

export const Favorite = () => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    getAllFavorites()
      .then(res => {
        console.log(res);
        if (!res) {
          setLoader(false);
          return;
        }
        if (res.length === 0) {
          setLoader(false);
          Notiflix.Notify.warning('Your Favorites is ampty');
        }
        if (res.length > 0) {
          setLoader(false);
          setAllRecipes(res);
        }
      })
      .catch(error => {
        console.log(error.message);
        setLoader(false);
      });
  }, []);

  const handelDelete = async (id, event) => {
    try {
      await deleteFromFavorite(id);
      setLoader(true);
      Notiflix.Notify.warning('Recipe was deleted from favorite list');
      setLoader(false);

      const res = await getAllFavorites();
      console.log(res);

      if (!res) {
        return;
      }
      setAllRecipes(res ?? []);
    } catch (e) {
      console.log(e.message);
      setLoader(false);
      Notiflix.Notify.failure('Failed to delete recipe from favorite list');
    }
  };

  return (
    <>
      {loader && <Loader />}
      {!allRecipes.length ? (
        <NoRecipesText>You dont have any favorites...</NoRecipesText>
      ) : (
        <ul>
          {allRecipes.length > 0 &&
            allRecipes.map(({ _id, title, description, time, thumb }) => {
              return (
                <RecipesCard
                  key={_id}
                  id={_id}
                  title={title}
                  time={time}
                  text={description}
                  onDelete={e => {
                    handelDelete(_id, e);
                  }}
                  imgComponent={thumb}
                />
              );
            })}
        </ul>
      )}
    </>
  );
};
