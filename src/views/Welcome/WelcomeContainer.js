import { makeStyles } from "@material-ui/core";
import React from "react";
import WelcomeComponent from "./WelcomeComponent";
import styles from "./WelcomeStyles";

const useStyles = makeStyles((theme) => ({
  ...styles(theme),
}));

const WelcomeContainer = () => {
  const classes = useStyles();
  return <WelcomeComponent classes={classes} />;
};

export default WelcomeContainer;
