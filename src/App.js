import React from "react";
import Routes from "@routes/Routes";
import { makeStyles, MuiThemeProvider } from "@material-ui/core";
import theme from "@theme/theme";

const useStyles = makeStyles(() => ({
  setContainer: {
    height: "100vh",
    width: "100%",
    overflowX: "hidden",
    background: theme.palette.primary.main,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.setContainer}>
        <Routes />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
