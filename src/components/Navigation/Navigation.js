import { useParams } from 'react-router-dom';
import { RiSearchLine } from 'react-icons/ri';

import { NavList, NavItem, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  const { categoryName = 'beef' } = useParams();

  const navItems = [
    { href: `/categories/${categoryName}`, text: 'Categories' },
    { href: '/add', text: 'Add recipes' },
    { href: '/my', text: 'My recipes' },
    { href: '/favorite', text: 'Favorites' },
    { href: '/shopping-list', text: 'Shopping list' },
    { href: '/search', text: 'Search', icon: RiSearchLine },
  ];

  return (
    <nav>
      <NavList>
        {navItems.map(({ href, text, icon: Icon }) => (
          <NavItem key={href}>
            <StyledLink to={href}>
              {Icon && <Icon size={24} />}
              <span>{text}</span>
            </StyledLink>
          </NavItem>
        ))}
      </NavList>
    </nav>
  );
};
