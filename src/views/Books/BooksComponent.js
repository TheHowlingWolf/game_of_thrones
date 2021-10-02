import Citadel from "@assets/svgs/citadel.svg";
import { Button, Grid, Typography } from "@material-ui/core";
import { PropTypes } from "prop-types";
import React from "react";
import BackButton from "@common/BackButton.js/BackButton";
import Card from "@common/Card/Card";
import Loader from "@common/Loader/Loader";

const BooksComponent = (props) => {
  /* State dependent props */
  const { loading, classes, data, hasNext } = props;
  /* Func props */
  const { fetchMoreData } = props;
  return (
    <Grid container className={classes.booksContainer}>
      <BackButton to="/categories" />
      <Grid item xs={12} className={classes.booksHeading}>
        <Citadel className={classes.citadelSvg} />
        <Typography variant="h1">Welcome To The Citadel Of OldCity</Typography>
      </Grid>
      {data?.length > 0 && (
        <>
          {data?.map?.((e) => (
            <Grid item xs={6} md={4} key={e?.isbn}>
              <Card
                name={e?.name}
                isbn={e?.isbn}
                released={e?.released}
                authors={e?.authors}
              />
            </Grid>
          ))}
        </>
      )}

      {!loading && hasNext && (
        <Grid
          item
          xs={12}
          container
          alignItems="center"
          justifyContent="center"
        >
          <Button
            variant="outlined"
            color="secondary"
            className={classes.fetchMoreButton}
            onClick={fetchMoreData}
          >
            Fetch More Data
          </Button>
        </Grid>
      )}

      {loading && (
        <Grid
          item
          xs={12}
          container
          alignItems="center"
          justifyContent="center"
        >
          <Loader isLoading={loading} />
        </Grid>
      )}
    </Grid>
  );
};

BooksComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
  hasNext: PropTypes.bool.isRequired,
  fetchMoreData: PropTypes.func.isRequired,
};

export default BooksComponent;
