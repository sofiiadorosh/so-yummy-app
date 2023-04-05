// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useLocation } from 'react-router';
// import { toast } from 'react-toastify';

// import {
//   selectSearchQuery,
//   selectSearchResult,
//   selectSearchType,
// } from 'redux/search/searchSelectors';
// import {
//   clearSearch,
//   updateSearchQuery,
//   updateSearchResult,
//   updateSearchType,
// } from 'redux/search/searchSlice';

// import { getSearchByIngredients, getSearchByTitle } from 'services/soyummyAPI';

// import { RecipesList } from 'components/RecipesList';
// import { SearchBar } from 'components/SearchBar';
// import { NoRecipesImg, NoRecipesText, PaginationWrp } from './Search.styled';

export const Search = () => {
  // const location = useLocation();
  // const dispatch = useDispatch();
  // const searchQuery = useSelector(selectSearchQuery);
  // const searchType = useSelector(selectSearchType);
  // const searchResult = useSelector(selectSearchResult);
  // const [count, setCount] = useState(1);
  // const [page, setPage] = useState(1);
  // const [isSearchResult, setIsSearchResult] = useState(false);

  // // const onPageChange = (e, page) => {
  // //   setPage(page);
  // // };

  // useEffect(() => {
  //   return () => {
  //     dispatch(clearSearch());
  //   };
  // }, [dispatch]);

  // useEffect(() => {
  //   if (location?.state?.ingredient) {
  //     dispatch(updateSearchType('ingredient'));
  //     location.state.ingredient = false;
  //   }
  //   if (searchType === 'title') {
  //     if (searchQuery) {
  //       getSearchByTitle(searchQuery, page)
  //         .then(res => {
  //           if (res.recipes.length === 0) {
  //             toast.warning('Nothing... Try another search query');
  //           }
  //           dispatch(updateSearchResult(res.recipes));
  //           const totalPages = Math.ceil(res.total / res.limit);
  //           setCount(totalPages);
  //           setIsSearchResult(true);
  //         })
  //         .catch(err => {
  //           toast.warning('Bad query');
  //         });
  //     }
  //   } else {
  //     if (searchQuery) {
  //       getSearchByIngredients(searchQuery, page)
  //         .then(res => {
  //           if (res.recipes.length === 0) {
  //             toast.warning(' Nothing... Try another search query');
  //           }
  //           dispatch(updateSearchResult(res.recipes));
  //           const totalPages = Math.ceil(res.total / res.limit);
  //           setCount(totalPages);
  //           setIsSearchResult(true);
  //         })
  //         .catch(err => toast.warning('Bad query'));
  //     }
  //   }
  // }, [
  //   dispatch,
  //   location,
  //   location.state?.ingredient,
  //   page,
  //   searchQuery,
  //   searchType,
  // ]);

  // return (
  //   <>
  //     <SearchBar />
  //     {searchResult.length === 0 && (
  //       <>
  //         <NoRecipesImg />
  //         {!isSearchResult && <NoRecipesText>Enter query</NoRecipesText>}
  //         {isSearchResult && (
  //           <NoRecipesText>Try looking for something else..</NoRecipesText>
  //         )}
  //       </>
  //     )}
  //     {searchResult.length !== 0 && (
  //       <>
  //         <RecipesList items={searchResult} />
  //         <PaginationWrp>
  //           {count > 1 && (
  //             <BasicPagination
  //               count={count}
  //               page={page}
  //               isChange={onPageChange}
  //             />
  //           )}
  //         </PaginationWrp>
  //       </>
  //     )}
  //   </>
  // );
};
