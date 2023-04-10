import { NavLink } from 'react-router-dom';

import recExmpl from '../../images/recExmpl.png';
import logoTrash from '../../images/logo-trash.png';

import {
  PicterItem,
  ItemBox,
  ItemBoxTitle,
  ItemBoxDescript,
  ItemBoxTime,
  LogoTrash,
  ItemBoxButton
} from './MyRecipesItem.styled';


// export const MyRecipesItem = ({ _id}) => {
//   return (
//     <li style={{ display: 'flex' }}>
//       <PicterItem src={recExmpl} alt="plugIngr" />
//       <ItemBox>
//         <ItemBoxTitle>Apple Frangipan Tart</ItemBoxTitle>
//         <ItemBoxDescript>Apple Frangipane Tart is a classic and elegant treat fit for any dessert table. A crisp, sweet-crust is filled with rich almond frangipane filling,
//           baked with sliced apples and finished with apricot preserves.
//         </ItemBoxDescript>
//         <ItemBoxTime>20 min</ItemBoxTime>
//         <LogoTrash >
//           <img src={logoTrash} alt="logo" />
//         </LogoTrash>
//         <NavLink to={`/recipe/${_id}`}>
//           <ItemBoxButton>See reecipe</ItemBoxButton>
//         </NavLink>
//       </ItemBox>   
//     </li>   
//   )
// };


// робочий варінат з реальними даними з бд


 
 export const MyRecipesItem = ({ item: { _id, time,  title, description, thumb } }) => {
 
  return (
          <li style={{ display: 'flex' }}>
            <PicterItem src={thumb} alt="title" />
            <ItemBox>
              <ItemBoxTitle>{title}</ItemBoxTitle>
              <ItemBoxDescript>{description}</ItemBoxDescript>
              <ItemBoxTime>{time}min</ItemBoxTime>
              <LogoTrash
                type="button"
                
              >
                <img src={logoTrash} alt="logo" />
              </LogoTrash>
              <NavLink to={`/recipe/${_id}`}>
                <ItemBoxButton>See reecipe</ItemBoxButton>
              </NavLink>
            </ItemBox>   
          </li>  
  )
}
