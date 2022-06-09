import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { getBooks } from './redux/books/books';
import Books from './Components/Books';
import Categories from './Components/Categories';
import classes from './Styles/App.module.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

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
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
