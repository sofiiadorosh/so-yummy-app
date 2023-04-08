import { GrClose } from 'react-icons/gr';
import plugIngr from '../../images/plugIngr.png';
import { useDeleteIngridientsMutation } from '../../redux/ShoppingList/shoppingListAPI';

import {
  ListTitle,
  ProductTitle,
  NumberTitle,
  RemoveTitle,
  ListIngrid,
  // ItemIngrid,
  PicterIngrid,
  NameIngrid,
  QuantityIngrid,
  DeletIngrid
} from './IngredientsShoppingList.styled'



export const IngredientsShoppingList = ({ id }) => {

  const [deleteIngridients] = useDeleteIngridientsMutation();
  
  return (
    < >
      <ListTitle>
        <ProductTitle>Product</ProductTitle>
        <NumberTitle>Number</NumberTitle>
        <RemoveTitle>Remove</RemoveTitle>
      </ListTitle>

      <ListIngrid>
        <li style={{ display: 'flex' }} >
          <PicterIngrid>
            <img src={plugIngr} alt="plugIngr" />
          </PicterIngrid>
          <NameIngrid>Salmon</NameIngrid>
          <QuantityIngrid>5</QuantityIngrid>
          <DeletIngrid><GrClose /></DeletIngrid>
        </li>
        <li  style={{ display: 'flex' }}>
          <PicterIngrid>
            <img src={plugIngr} alt="plugIngr" />
          </PicterIngrid>
          <NameIngrid>Cucumber</NameIngrid>
          <QuantityIngrid>1000000</QuantityIngrid>
          <DeletIngrid onClick={() => deleteIngridients(id)} ><GrClose /></DeletIngrid>
        </li>
      </ListIngrid>


    </>
  )

};
