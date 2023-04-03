import { useState, useEffect } from 'react';

import { getCategoryList } from 'services/soyummyAPI';

import { TabBar, TabItem } from './CategoriesList.styled';

export const CategoriesList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getTabsLabels = async () => {
      const tabsLabels = await getCategoryList();
      setCategories(tabsLabels.categories);
    };
    getTabsLabels();
  }, []);

  return (
    <div style={{ overflow: 'hidden' }}>
      <TabBar>
        {categories.map(category => (
          <TabItem to={`${category.toLowerCase()}`} key={category}>
            {category}
          </TabItem>
        ))}
      </TabBar>
    </div>
  );
};
