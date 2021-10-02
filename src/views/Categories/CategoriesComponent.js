import Dragon from "@assets/svgs/dragon.svg";
import BackButton from "@common/BackButton.js/BackButton";
import Loader from "@common/Loader/Loader";
import { Grid, Typography } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const CategoriesComponent = (props) => {
  /* Destructing Non-fuc data */
  const { loading, data, classes } = props;

  return (
    <>
      {loading && <Loader isLoading={loading} enableFullHeight />}
      {!loading && (
        <Grid container className={classes.cateContainer}>
          <BackButton />
          <Grid item xs={12} className={classes.cateHeading}>
            <Dragon className={classes.dragonSvg} />
            <Typography variant="h1">Choose Your Path</Typography>
          </Grid>
          <Grid container item xs={12}>
            {Object.keys(data).map((e, i) => (
              <Grid
                item
                key={e}
                xs={12}
                md={4}
                className={clsx(
                  classes.cateContent,
                  classes[`bglight${i % 2}`]
                )}
              >
                <Link to={`/${e}`} className={classes.linkStyles}>
                  <Typography variant="h2">{e}</Typography>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}
    </>
  );
};

CategoriesComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
};
export default CategoriesComponent;
