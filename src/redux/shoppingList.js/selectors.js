const selectShoppingList = state => state.shoppingList.items;

const selectIsLoading = state => state.shoppingList.isLoading;

const selectError = state => state.shoppingList.error;

export { selectShoppingList, selectIsLoading, selectError };
