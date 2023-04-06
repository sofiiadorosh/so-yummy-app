import { GrClose } from 'react-icons/gr';
import plugIngr from '../../images/plugIngr.png';

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

// import { delIngridSchoppingListById } from 'services/soyummyAPI';

export const IngredientsShoppingList = ({id}) => {
  return (
    < >
      <ListTitle>
        <ProductTitle>Product</ProductTitle>
        <NumberTitle>Number</NumberTitle>
        <RemoveTitle>Remove</RemoveTitle>
      </ListTitle>

      <ListIngrid>
        <ul style={{ display: 'flex' }}>
          <PicterIngrid>
            <img src={plugIngr} alt="plugIngr" />
          </PicterIngrid>
          <NameIngrid>Salmon</NameIngrid>
          <QuantityIngrid>5</QuantityIngrid>
          <DeletIngrid><GrClose /></DeletIngrid>
        </ul>
        <ul  style={{ display: 'flex' }}>
          <PicterIngrid>
            <img src={plugIngr} alt="plugIngr" />
          </PicterIngrid>
          <NameIngrid>Cucumber</NameIngrid>
          <QuantityIngrid>10000</QuantityIngrid>
          <DeletIngrid><GrClose /></DeletIngrid>
        </ul>
      </ListIngrid>


    </>
  )

};
