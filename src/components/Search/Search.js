import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { toast } from 'react-toastify';
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
  const lastSearchQuery = useRef('');

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
      console.log(width);
      if (width >= 1440) {
        setRecipeLimit(12);
      } else {
        setRecipeLimit(6);
      }
    };

    const debouncedHandleResize = debounce(handleResize, 500);
    debouncedHandleResize();

    window.addEventListener('resize', debouncedHandleResize);
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
      debouncedHandleResize.cancel();
    };
  }, [setRecipeLimit]);

  useEffect(() => {
    if (location?.state?.ingredient) {
      dispatch(updateSearchType('ingredient'));
      location.state.ingredient = false;
    }

    if (searchQuery && searchQuery !== lastSearchQuery.current) {
      lastSearchQuery.current = searchQuery;
    }

    if (searchType === 'title') {
      if (searchQuery) {
        getSearchByTitle(searchQuery, page, recipeLimit)
          .then(res => {
            if (res === null) {
              setIsSearchResult(true);
              dispatch(updateSearchResult([]));
              toast('Nothing... Try another search query');
            }
            console.log(res);
            dispatch(updateSearchResult(res.recipes));
            const totalPages = Math.ceil(res.total / recipeLimit);
            setCount(totalPages);
          })
          .catch(err => {
            toast.warning('Bad query');
          });
      }
    } else {
      if (searchQuery) {
        getSearchByIngredients(searchQuery, page, recipeLimit)
          .then(res => {
            if (res === null) {
              setIsSearchResult(true);
              dispatch(updateSearchResult([]));
              toast.warning('Nothing... Try another search query');
            }
            console.log(res);
            dispatch(updateSearchResult(res.recipes));
            const totalPages = Math.ceil(res.total / recipeLimit);
            setCount(totalPages);
          })
          .catch(err => toast.warning('Bad query'));
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
  ]);

  const onFormSubmit = e => {
    e.preventDefault();
    const newSearchQuery = e.target.elements.search.value;
    setPage(1);
    if (
      !newSearchQuery ||
      (newSearchQuery === searchQuery && searchResult.length === 0)
    ) {
      toast.warning('Type new query');
      return;
    }
    dispatch(updateSearchQuery(newSearchQuery));
  };

  return (
    <>
      <SearchBar onSubmit={onFormSubmit} />
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
