import { useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';

import { TabBar, TabItem } from './CategoriesList.styled';

export const CategoriesList = () => {
  const categories = [
    'Beef',
    'Breakfast',
    'Chicken',
    'Dessert',
    'Goat',
    'Lamb',
    'Miscellaneous',
    'Pasta',
    'Pork',
    'Seafood',
    'Side',
    'Starter',
    'Vegan',
    'Vegetarian',
  ];

  const tabRef = useRef();
  const { events } = useDraggable(tabRef);

  return (
    <div style={{ overflow: 'hidden' }}>
      <TabBar {...events} ref={tabRef}>
        {categories.map(category => (
          <TabItem to={`/categories/${category.toLowerCase()}`} key={category}>
            {category}
          </TabItem>
        ))}
      </TabBar>
    </div>
  );
};
