import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import { debounce } from 'lodash';

import {
  selectSearchQuery,
  selectSearchResult,
  selectSearchType,
} from 'redux/search/searchSelectors';
import {
  clearSearch,
  updateSearchQuery,
  updateSearchResult,
  updateSearchType,
} from 'redux/search/searchSlice';

import { getSearchByIngredients, getSearchByTitle } from 'services/soyummyAPI';

import { RecipesList } from 'components/RecipesList';
import { SearchBar } from 'components/SearchBar';
import { Paginator } from 'components/Paginator/Paginator';
import { Loader } from 'components/Loader';
import { NoRecipesImg, NoRecipesText, PaginationWrp } from './Search.styled';

export const Search = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const searchQuery = useSelector(selectSearchQuery);
  const searchType = useSelector(selectSearchType);
  const searchResult = useSelector(selectSearchResult);

  const [count, setCount] = useState(1);
  const [page, setPage] = useState(1);
  const [isSearchResult, setIsSearchResult] = useState(false);
  const [recipeLimit, setRecipeLimit] = useState(6);
  const [loader, setLoader] = useState(false);

  const lastSearchQuery = useRef('');
  const [searchParams, setSearchParams] = useSearchParams({});

  const onPageChange = (e, page) => {
    setPage(page);
  };

  useEffect(() => {
    return () => {
      dispatch(clearSearch());
    };
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1440) {
        setRecipeLimit(12);
      } else {
        setRecipeLimit(6);
      }
    };
    const debouncedHandleResize = debounce(handleResize, 1000);
    debouncedHandleResize();

    window.addEventListener('resize', debouncedHandleResize);
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
      debouncedHandleResize.cancel();
    };
  }, [setRecipeLimit]);

  useEffect(() => {
    const searchQuery = searchParams.get('query');

    if (location?.state?.ingredient) {
      dispatch(updateSearchType('ingredient'));
      location.state.ingredient = false;
    }

    if (searchQuery && searchQuery !== lastSearchQuery.current) {
      lastSearchQuery.current = searchQuery;
    }

    if (searchType === 'title') {
      if (searchQuery) {
        setLoader(true);
        getSearchByTitle(searchQuery, page, recipeLimit)
          .then(res => {
            setLoader(false);
            if (res === null) {
              setIsSearchResult(true);
              dispatch(updateSearchResult([]));
              Notiflix.Notify.warning('Try another search query');
            }
            console.log(res);
            dispatch(updateSearchResult(res.recipes));
            const totalPages = Math.ceil(res.total / recipeLimit);
            setCount(totalPages);
          })
          .catch(err => {
            setLoader(false);
          });
      }
    } else {
      if (searchQuery) {
        setLoader(true);
        getSearchByIngredients(searchQuery, page, recipeLimit)
          .then(res => {
            setLoader(false);
            if (res === null) {
              setIsSearchResult(true);
              dispatch(updateSearchResult([]));
              Notiflix.Notify.warning('Try another search query');
            }
            console.log(res);
            dispatch(updateSearchResult(res.recipes));
            const totalPages = Math.ceil(res.total / recipeLimit);
            setCount(totalPages);
          })
          .catch(err => {
            setLoader(false);
          });
      }
    }
  }, [
    dispatch,
    location,
    location.state?.ingredient,
    page,
    searchQuery,
    searchType,
    recipeLimit,
    searchParams,
  ]);

  const onFormSubmit = e => {
    e.preventDefault();
    const newSearchQuery = e.target.elements.search.value;
    setSearchParams(newSearchQuery ? { query: newSearchQuery } : {});
    setPage(1);
    // if (
    //   !newSearchQuery ||
    //   (newSearchQuery === searchQuery && searchResult.length === 0)
    // ) {
    //   Notiflix.Notify.warning('Type new query');
    //   return;
    // }

    dispatch(updateSearchQuery(newSearchQuery));
  };

  return (
    <>
      <SearchBar onSubmit={onFormSubmit} searchParams={searchParams} />
      {loader && <Loader />}
      {searchResult.length === 0 && (
        <>
          <NoRecipesImg></NoRecipesImg>
          {!isSearchResult && (
            <NoRecipesText>Enter your search query</NoRecipesText>
          )}
          {isSearchResult && (
            <NoRecipesText>Try looking for something else..</NoRecipesText>
          )}
        </>
      )}
      {searchResult.length !== 0 && (
        <>
          <RecipesList items={searchResult} />
          <PaginationWrp>
            {count > 1 && (
              <Paginator count={count} page={page} isChange={onPageChange} />
            )}
          </PaginationWrp>
        </>
      )}
    </>
  );
};
