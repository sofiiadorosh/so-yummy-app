
import { List } from './MyRecipesList.styled.js';

import { MyRecipesItem } from 'components/MyRecipesItem/MyRecipesItem.js';


// export const MyRecipesList = () => {
//   return (
//     <List>
//      < MyRecipesItem/>
//     </List>
//   );
// };


// рабоч вар


  export const MyRecipesList = ({ items }) => {
  return (
    <List>
       {items.map(item => (
        <MyRecipesItem key={item._id} item={item} />
      ))}
    </List>
  );
};


