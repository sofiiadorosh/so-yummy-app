import { useEffect, useState } from 'react';

import Notiflix from 'notiflix';

import { deleteFromFavorite, getAllFavorites } from 'services/soyummyAPI';

import { Paginator } from 'components/Paginator/Paginator';
import { Loader } from 'components/Loader';

import { PaginationWrp, NoRecipesText } from './Favorite.styled';
import { RecipesCard } from 'components/RecipesCard/RecipesCard';

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

  const handelDelete = async (id, event) => {
    if (event.target.disabled) {
      return;
    }
    event.target.disabled = true;

    await deleteFromFavorite(id);
    setLoader(true);
    console.log(id);
    Notiflix.Notify.warning('Recipe was deleted from favorite list');
    await getAllFavorites(page, 4)
      .then(res => {
        setLoader(false);
        console.log(res);
        if (!res) {
          return;
        }
        setPage(1);
        const totalPages = Math.ceil(res.total / 4);
        setCount(totalPages);
        setAllRecipes(res.recipes ?? []);
      })
      .catch(e => {
        console.log(e.message);
        setLoader(false);
      });
  };

  const onPageChange = (e, page) => {
    setPage(page);
  };

  return (
    <>
      {loader && <Loader />}
      {!allRecipes ? (
        <NoRecipesText>You dont have any favorites...</NoRecipesText>
      ) : (
        <ul>
          {allRecipes.length !== 0 &&
            allRecipes.map(({ _id, title, description, time, preview }) => {
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
                  imgComponent={preview}
                />
              );
            })}
        </ul>
      )}
      {/* <ul>
        {allRecipes.length !== 0 &&
          allRecipes.map(({ _id, title, description, time, preview }) => {
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
                imgComponent={preview}
              />
            );
          })}
      </ul> */}
      <PaginationWrp>
        {count > 1 && (
          <Paginator count={count} page={page} isChange={onPageChange} />
        )}
      </PaginationWrp>
    </>
  );
};
