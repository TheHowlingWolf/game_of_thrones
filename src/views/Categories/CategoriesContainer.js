import { optionMenuApiStart } from "@actions";
import { makeStyles } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoriesComponent from "./CategoriesComponent";
import { cateStyles } from "./CategoriesStyles";

const useStyles = makeStyles((theme) => ({
  ...cateStyles(theme),
}));

const CategoriesContainer = () => {
  /* Redux Selectors */
  const { loading, data } = useSelector((state) => ({
    loading: state.optionReducer.loading,
    data: state.optionReducer.data,
  }));

  /* Redux Dispatch */
  const dispatch = useDispatch();

  /* Using Custom hooks for generating styles */
  const classes = useStyles();

  React.useEffect(() => {
    dispatch(optionMenuApiStart());
  }, []);

  return (
    <CategoriesComponent classes={classes} loading={loading} data={data} />
  );
};

export default CategoriesContainer;
