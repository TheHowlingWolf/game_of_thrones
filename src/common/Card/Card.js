import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import book from "@assets/img/book.png";
import { pxToRem } from "@theme/theme";

const useStyles = makeStyles((theme) => ({
  root: { padding: pxToRem(20) },
  mainContainer: {
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    padding: pxToRem(30),
    color: "darkgoldenrod",
    background: theme.palette.primary.light,
    borderRadius: pxToRem(10),
    "&:hover": {
      color: theme.palette.primary.light,
      background: "darkgoldenrod",
    },
  },
  subContainer: {
    paddingLeft: pxToRem(30),
    flexDirection: "column",
  },
  contentContainer: {
    display: "flex",
    justifyContent: "flex-start",
  },
  setImage: {
    width: pxToRem(100),
  },
}));

const Card = (props) => {
  const classes = useStyles();
  const { name, isbn, authors, released } = props;
  return (
    <div className={classes.root}>
      <Grid container className={classes.mainContainer}>
        <Grid item>
          <img src={book} alt="Books.Png" className={classes.setImage} />
        </Grid>
        <Grid item container className={classes.subContainer}>
          {name?.trim?.()?.length > 0 && (
            <Grid item className={classes.contentContainer}>
              <Typography variant="h5">Name:</Typography>{" "}
              <Typography variant="h5">{name}</Typography>
            </Grid>
          )}
          {isbn?.trim?.()?.length > 0 && (
            <Grid item className={classes.contentContainer}>
              <Typography variant="h5">ISBN:</Typography>{" "}
              <Typography variant="h5">{isbn}</Typography>
            </Grid>
          )}
          {authors?.length > 0 && (
            <Grid item className={classes.contentContainer}>
              <Typography variant="h5">Authors:</Typography>{" "}
              <Typography variant="h5">{authors?.join?.(", ")}</Typography>
            </Grid>
          )}
          {released?.trim?.()?.length > 0 && (
            <Grid item className={classes.contentContainer}>
              <Typography variant="h5">Released:</Typography>{" "}
              <Typography variant="h5">{released?.split?.("T")[0]}</Typography>
            </Grid>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  isbn: PropTypes.string,
  released: PropTypes.string,
  authors: PropTypes.array,
};

Card.defaultProps = {
  name: "",
  isbn: "",
  released: "",
  authors: [],
};

export default Card;
