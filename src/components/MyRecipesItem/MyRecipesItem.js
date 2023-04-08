import recExmpl from '../../images/recExmpl.png';
import logoTrash from '../../images/logo-trash.png';

import {
  PicterItem,
  ItemBox,
  ItemBoxTitle,
  ItemBoxText,
  ItemBoxTime,
  LogoTrash,
  ItemBoxButton
} from './MyRecipesItem.styled';


export const MyRecipesItem = () => {
  return(
    <li style={{ display: 'flex' }}>
      <PicterItem src={recExmpl} alt="plugIngr" />
      <ItemBox>
        <ItemBoxTitle>Apple Frangipan Tart</ItemBoxTitle>
        <ItemBoxText>Apple Frangipane Tart is a classic and elegant treat fit for any dessert table. A crisp, sweet-crust is filled with rich almond frangipane filling,
          baked with sliced apples and finished with apricot preserves.
        </ItemBoxText>
        <ItemBoxTime>20 min</ItemBoxTime>
        <LogoTrash >
          <img src={logoTrash} alt="logo" />
        </LogoTrash>
        <ItemBoxButton>See reecipe</ItemBoxButton>

      </ItemBox>
    </li>
  )
};
