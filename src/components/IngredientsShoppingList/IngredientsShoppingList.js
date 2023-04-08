import { GrClose } from 'react-icons/gr';
import defaultIngredientsImg from '../../images/noPhoto.svg';
import { useDeleteIngridientsMutation } from '../../redux/ShoppingList/shoppingListAPI';

import {
  TitleWrapper,
  Title,
  TitleRemoveWrap,
  IngredientsList,
  IngredientsItem,
  ItemTitleWrapper,
  IngredientsTitle, 
  MeasureWrapper,
} from './IngredientsShoppingList.styled'



export const IngredientsShoppingList = ({ _id }) => {

  const [deleteIngridients] = useDeleteIngridientsMutation();
  
  return (
    < >
      <TitleWrapper>
        <Title children="Product" />
        <TitleRemoveWrap>
          <Title children="Number" />
          <Title children="Remove" />
        </TitleRemoveWrap>
      </TitleWrapper>

      <IngredientsList>
              <IngredientsItem >
                 <ItemTitleWrapper>
                    <div>
                      <img
                        src={ defaultIngredientsImg}
                        alt="Ingredient"
                      />
                    </div>
                    <IngredientsTitle children="Avokadoo" />
                </ItemTitleWrapper>
                <MeasureWrapper>
                    <p children="100" />
                     <button onClick={() => deleteIngridients(_id)} ><GrClose /></button>
                </MeasureWrapper>
            </IngredientsItem>
      </IngredientsList>
    </>
  )
};



// коли запроцює передаца ингридиентив на цю сторинку

// export const IngredientsShoppingList = ({ingredients }) => {

//   const [deleteIngridients] = useDeleteIngridientsMutation();

//   return (
//     < >
//       <TitleWrapper>
//         <Title children="Product" />
//         <TitleRemoveWrap>
//           <Title children="Number" />
//           <Title children="Remove" />
//         </TitleRemoveWrap>
//       </TitleWrapper>

//        <IngredientsList>
//         {ingredients &&
//           ingredients.map(({ id: { _id, ttl, thb }, measure }) => {
//             return (
//               <IngredientsItem key={_id}>
//                  <ItemTitleWrapper>
//                     <div>
//                       <img
//                         src={thb ? thb : defaultIngredientsImg}
//                         alt="Ingredient"
//                       />
//                     </div>
//                     <IngredientsTitle children={ttl} />
//                 </ItemTitleWrapper>
//                 <MeasureWrapper>
//                     <p children={measure} />
//                     <button onClick={() => deleteIngridients(_id)}><GrClose /></button>
//                   </MeasureWrapper>
//               </IngredientsItem>
//             );
//           })}
//       </IngredientsList>
//     </>
//   )

// }



 

