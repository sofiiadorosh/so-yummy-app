import { Link, NavContainer } from './Nav.stylde';

const Nav = () => {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <NavContainer>
      <Link to="/search" onClick={scrollToTop}>
        Ingredients
      </Link>
      <Link to="/add" onClick={scrollToTop}>
        Add recipes
      </Link>
      <Link to="/my" onClick={scrollToTop}>
        My recipes
      </Link>
      <Link to="/favorite" onClick={scrollToTop}>
        Favorite
      </Link>
      <Link to="/shopping-list" onClick={scrollToTop}>
        Shopping list
      </Link>
    </NavContainer>
  );
};

export { Nav };
