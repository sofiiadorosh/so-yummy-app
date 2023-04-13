//==================== вариант 1

// import { NavLink } from 'react-router-dom';
// import logoTrash from '../../images/logo-trash.png';

// import {
//   PicterItem,
//   ItemBox,
//   ItemBoxTitle,
//   ItemBoxDescript,
//   ItemBoxTime,
//   LogoTrash,
//   ItemBoxButton,
// } from './MyRecipesItem.styled';

// export const MyRecipesItem = ({deleteRecipe, items: { _id, time, title, description, imageURL },
// }) => {
//   return (
//     <li style={{ display: 'flex' }}>
//       <PicterItem src={imageURL} alt="title" />
//       <ItemBox>
//         <ItemBoxTitle>{title}</ItemBoxTitle>
//         <ItemBoxDescript>{description}</ItemBoxDescript>
//         <ItemBoxTime>{time} min</ItemBoxTime>
//         <LogoTrash
//           type="button"
//           onClick={() => deleteRecipe(_id)}
//         >
//           <img src={logoTrash} alt="logo" />
//         </LogoTrash>
//         <NavLink to={`/recipe/${_id}`}>
//           <ItemBoxButton>See reecipe</ItemBoxButton>
//         </NavLink>
//       </ItemBox>
//     </li>
//   );
// };



//==================== переиспользования фейворитс


import { useMediaQuery } from '@mui/material';
import { NavLink } from 'react-router-dom';

import logoTrash from '../../images/logo-trash.png';

import {
  ItemWrap,
  PicterItem,
  ItemBox,
  ItemBoxTitle,
  ItemBoxDescript,
  ItemBoxTime,
  LogoTrash,
  ItemBoxButton,
  LogoTrashMobile,
} from '../RecipesCard/RecipesCard.styled';

export function getTimeFromMins(mins) {
  let minutes = mins;
  let hours = Math.trunc(mins / 60);
  if (mins >= 60 && mins < 1440) {
    minutes = mins % 60;
    return `${hours} hours ${minutes > 0 ? `${minutes} min` : ''}`;
  }

  if (hours >= 24) {
    let days = Math.trunc(hours / 24);
    hours = hours % 24;
    minutes = mins % 60;
    return `${days} day ${hours} hours  ${minutes} min`;
  }
  return `${minutes} min`;
}

export const MyRecipesItem = ({deleteRecipe, items: { _id, time, title, description, imageURL } }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <ItemWrap>
      {isMobile && (
        <div style={{ display: 'flex' }}>
          <NavLink to={`/recipe/${_id}`}>
            <PicterItem src={imageURL} alt="title" />
          </NavLink>
          <ItemBox>
            <ItemBoxTitle>{title}</ItemBoxTitle>
            <ItemBoxDescript>{description}</ItemBoxDescript>
            <ItemBoxTime>{getTimeFromMins(time)}</ItemBoxTime>
            <LogoTrashMobile type="button" onClick={deleteRecipe}>
              <img src={logoTrash} alt="logo" />
            </LogoTrashMobile>
          </ItemBox>
        </div>
      )}
      {!isMobile && (
        <div style={{ display: 'flex' }}>
          <PicterItem src={imageURL} alt="title" />
          <ItemBox>
            <ItemBoxTitle>{title}</ItemBoxTitle>
            <ItemBoxDescript>{description}</ItemBoxDescript>
            <ItemBoxTime>{getTimeFromMins(time)}</ItemBoxTime>
            <LogoTrash type="button" onClick={deleteRecipe}>
              <img src={logoTrash} alt="logo" />
            </LogoTrash>
            <NavLink to={`/recipe/${_id}`}>
              <ItemBoxButton>See reecipe</ItemBoxButton>
            </NavLink>
          </ItemBox>
        </div>
      )}
    </ItemWrap>
  );
};


