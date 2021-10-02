import { makeStyles } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { pxToRem } from "../../theme/theme";

const useStyles = makeStyles((theme) => ({
  backContainer: {
    position: "absolute",
    width: pxToRem(50),
    height: pxToRem(50),
    borderRadius: "50%",
    padding: pxToRem(10),
    background: theme.palette.primary.light,
    top: pxToRem(20),
    left: pxToRem(20),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  backIcon: {
    width: pxToRem(30),
    height: pxToRem(30),
  },
}));

const BackButton = (props) => {
  const { to } = props;
  const classes = useStyles();
  return (
    <Link to={to}>
      <div className={classes.backContainer}>
        <ChevronLeftIcon className={classes.backIcon} />
      </div>
    </Link>
  );
};

BackButton.propTypes = {
  to: PropTypes.string,
};
BackButton.defaultProps = {
  to: "/",
};

export default BackButton;
