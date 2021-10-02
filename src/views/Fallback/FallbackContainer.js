import { makeStyles } from "@material-ui/core";
import React from "react";
import FallbackComponent from "./FallbackComponent";
import styles from "./FallbackStyles";

const useStyles = makeStyles((theme) => ({
  ...styles(theme),
}));

const FallbackContainer = () => {
  const classes = useStyles();
  return <FallbackComponent classes={classes} />;
};

export default FallbackContainer;
