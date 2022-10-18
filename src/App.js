import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUserAlt } from 'react-icons/fa';
import { getBooks } from './redux/books/books';
import Books from './Components/Books';
import Categories from './Components/Categories';
import classes from './Styles/App.module.css';

function App() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const openMenu = () => {
    document.querySelector('.mobile-menu').style.display = 'flex';
    setIsOpen(true);
  };

  const closeMenu = () => {
    document.querySelector('.mobile-menu').style.display = 'none';
    setIsOpen(false);
  };

  return (
    <>
      <nav className={classes.navbar}>
        <a href="/" className={classes.logo}>
          BookStore CMS
        </a>
        <div className={classes.navigation}>
          <Link to="/">Books</Link>
          <Link to="/categories">Categories</Link>
        </div>
        <div className={classes.iconDiv}>
          <FaUserAlt className={classes.icon} />
        </div>
      </nav>
      <nav className={classes.mobileNav}>
        {!isOpen && (
          <div className={classes.mobileMenu} onClick={openMenu} role="presentation">
            <FaBars className={classes.logo} />
          </div>
        )}
        {isOpen && (
          <div className={classes.mobileMenu} onClick={closeMenu} role="presentation">
            <FaTimes className={classes.logo} />
          </div>
        )}
        <ul className={`${classes.mobileNavList} mobile-menu`}>
          <li className={classes.mobileNavItem}>
            <a href="/" className={classes.logo} onClick={closeMenu}>
              BookStore CMS
            </a>
          </li>
          <li className={classes.mobileNavItem}>
            <Link to="/" onClick={closeMenu}>
              Books
            </Link>
          </li>
          <li className={classes.mobileNavItem}>
            <Link to="/categories" onClick={closeMenu}>
              Categories
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
