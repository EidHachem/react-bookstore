import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Books from './Components/Books';
import Categories from './Components/Categories';
import classes from './Styles/App.module.css';

function App() {
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
      </nav>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
