import { NavLink } from 'react-router-dom';

// import recExmpl from '../../images/recExmpl.png';
import logoTrash from '../../images/logo-trash.png';

import {
  PicterItem,
  ItemBox,
  ItemBoxTitle,
  ItemBoxDescript,
  ItemBoxTime,
  LogoTrash,
  ItemBoxButton,
} from './MyRecipesItem.styled';




export const MyRecipesItem = ({item: { _id, time, title, description, imageURL },
}) => {
  return (
    <li style={{ display: 'flex' }}>
      <PicterItem src={imageURL} alt="title" />
      <ItemBox>
        <ItemBoxTitle>{title}</ItemBoxTitle>
        <ItemBoxDescript>{description}</ItemBoxDescript>
        <ItemBoxTime>{time} min</ItemBoxTime>
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
  );
};
