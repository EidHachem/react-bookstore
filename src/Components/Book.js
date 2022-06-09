import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/books';
import Chart from './UI/Chart';
import classes from '../Styles/Book.module.css';
import Button from './UI/Button';

export default function Book() {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const deleteBookHandler = (id) => {
    dispatch(removeBook(id));
  };

  if (!books) return <p>No Books Available</p>;

  return (
    <>
      {books.map((book) => (
        <div className={classes.container} key={book.id}>
          <div className={classes.book}>
            <div className={classes.eachBook}>
              <p className={classes.cat}>{book.category}</p>
              <p className={classes.title}>
                {book.title}
              </p>
              <p className={classes.author}>{book.author}</p>
              &nbsp;
              <div>
                <button className={classes.btns} type="button">
                  Comments
                </button>
                <button
                  className={classes.btns}
                  type="button"
                  onClick={() => deleteBookHandler(book.id)}
                >
                  Remove
                </button>
                <button className={`${classes.btns} ${classes.lastBtn}`} type="button">
                  Edit
                </button>
              </div>
            </div>
          </div>
          <div className={classes.percentage}>
            <div className={classes.chart}>
              <Chart data={book.id} />
            </div>
            <div className={classes.percentageData}>
              <p className={classes.percentageNumber}>
                {Math.floor(book.id)}
                %
              </p>
              <p className={classes.percentageComplete}>Completed</p>
            </div>
          </div>
          <div className={classes.chapters}>
            <p className={classes.chapter}>CURRENT CHAPTER</p>
            <p className={classes.currentChapter}>
              Chapter:
              {' '}
              {Math.floor(book.id)}
            </p>
            <Button content="UPDATE PROGRESS" />
          </div>
        </div>
      ))}
    </>
  );
}
