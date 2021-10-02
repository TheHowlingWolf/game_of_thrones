import { makeStyles } from "@material-ui/core";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { booksApiStart, booksApiFetchMoreData } from "@actions";
import BooksComponent from "./BooksComponent";
import { bookStyles } from "./BooksStyles";

const useStyles = makeStyles((theme) => ({
  ...bookStyles(theme),
}));

const BooksContainer = () => {
  /* Destructuring Redux States */
  const { loading, data, hasNext } = useSelector((state) => ({
    loading: state.booksReducer.loading,
    data: state.booksReducer.data,
    hasNext: state.booksReducer.hasNext,
  }));

  /* redux Dispatch */
  const dispatch = useDispatch();

  /* using custom hooks for styling */
  const classes = useStyles();

  /* Onclick Handlers */
  const fetchMoreData = () => {
    dispatch(booksApiFetchMoreData());
  };

  React.useEffect(() => {
    dispatch(booksApiStart());
  }, []);

  return (
    <BooksComponent
      classes={classes}
      loading={loading}
      data={data}
      hasNext={hasNext}
      fetchMoreData={fetchMoreData}
    />
  );
};

export default BooksContainer;
