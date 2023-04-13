import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { deleteFromFavorite, getAllFavorites } from 'services/soyummyAPI';
import { Loader } from 'components/Loader';
import { RecipesCard } from 'components/RecipesCard/RecipesCard';
import { getCurrentUser } from 'redux/auth/operations';

import { NoRecipesText } from './Favorite.styled';

export const Favorite = () => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [loader, setLoader] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
    setLoader(true);
    getAllFavorites()
      .then(res => {
        console.log(res);
        if (!res) {
          return;
        }
        setAllRecipes(res);
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  const handleDelete = async (id, event) => {
    try {
      await deleteFromFavorite(id);
      setLoader(true);
      const res = await getAllFavorites();
      setAllRecipes(res ?? []);
      setLoader(false);
    } catch (error) {
      console.log(error.message);
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
                    handleDelete(_id, e);
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
