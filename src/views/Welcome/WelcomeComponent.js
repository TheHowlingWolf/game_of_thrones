import Wolf from "@assets/svgs/wolf.svg";
import { Button, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const WelcomeComponent = (props) => {
  const { classes } = props;
  return (
    <div className={classes.welcomeContainer}>
      <div className={classes.welcomeComponentTextContainer}>
        <Wolf className={classes.wolfSvg} />
        <Typography variant="h2" className={classes.welcomeComponentText}>
          Welcome To The World Of
        </Typography>
        <Typography variant="h1" className={classes.welcomeComponentText}>
          GAME OF THRONES
        </Typography>
        <Link to="/categories">
          <Button
            variant="outlined"
            color="secondary"
            className={classes.welcomeButton}
          >
            Let&apos;s Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

WelcomeComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default WelcomeComponent;
