

import { ListTitle, ProductTitle, NumberTitle } from './IngredientsShoppingList.styled'


export const IngredientsShoppingList = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <ListTitle>
        <ProductTitle>Product</ProductTitle>
        <NumberTitle>Number</NumberTitle>
        <p>Remove</p>
        
      </ListTitle>
    </div>
  )

};
