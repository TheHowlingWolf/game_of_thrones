import DualBall from "@assets/svgs/dualBall.svg";
import { makeStyles } from "@material-ui/core";
import { pxToRem } from "@theme/theme";
import clsx from "clsx";
import { PropTypes } from "prop-types";
import React from "react";

const useStyles = makeStyles(() => ({
  loaderStyles: {
    width: pxToRem(200),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  enableFullHeight: {
    height: "100vh",
  },
}));

const Loader = (props) => {
  const classes = useStyles();
  const { isLoading, enableFullHeight } = props;
  return (
    <>
      {isLoading && (
        <DualBall
          className={clsx(classes.loaderStyles, {
            [classes.enableFullHeight]: enableFullHeight,
          })}
        />
      )}
    </>
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool,
  enableFullHeight: PropTypes.bool,
};

Loader.defaultProps = {
  isLoading: false,
  enableFullHeight: false,
};

export default Loader;
