import { Link, NavContainer } from './Nav.stylde';

const Nav = () => {
  return (
    <NavContainer>
      <Link to="/search">Ingredients</Link>
      <Link to="/add">Add recipes</Link>
      <Link to="/my">My recipes</Link>
      <Link to="/favorite">Favorite</Link>
      <Link to="/shopping-list">Shopping list</Link>
    </NavContainer>
  );
};

export { Nav };
