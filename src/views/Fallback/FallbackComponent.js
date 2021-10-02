import Eagle from "@assets/svgs/eagle.svg";
import { Button, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const FallbackComponent = (props) => {
  const { classes } = props;
  return (
    <div className={classes.fallbackContainer}>
      <div className={classes.fallbackComponentTextContainer}>
        <Eagle className={classes.wolfSvg} />
        <Typography variant="h2" className={classes.fallbackComponentText}>
          Looks You Are LOST - 404
        </Typography>
        <Typography variant="h1" className={classes.fallbackComponentText}>
          GAME OF THRONES
        </Typography>
        <Link to="/">
          <Button
            variant="outlined"
            color="secondary"
            className={classes.fallbackButton}
          >
            End Your Nightwatch
          </Button>
        </Link>
      </div>
    </div>
  );
};

FallbackComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default FallbackComponent;
