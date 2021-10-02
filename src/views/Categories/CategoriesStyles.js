import { pxToRem } from "@theme/theme";

export const cateStyles = (theme) => ({
  cateContainer: {
    height: "100%",
  },
  cateHeading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: theme.palette.secondary.main,
  },
  cateContent: {
    width: "100%",
    display: "flex",
  },
  choiceButton: {
    fontSize: pxToRem(40),
    padding: pxToRem(30),
  },
  dragonSvg: {
    width: pxToRem(400),
  },
  bglight0: {
    background: theme.palette.primary.light,
    textTransform: "Capitalize",
    cursor: "pointer",
    "&:hover": {
      background: theme.palette.secondary.main,
      color: theme.palette.primary.light,
    },
  },
  bglight1: {
    background: theme.palette.primary.dark,
    textTransform: "Capitalize",
    cursor: "pointer",
    "&:hover": {
      background: theme.palette.secondary.main,
      color: theme.palette.primary.light,
    },
  },
  linkStyles: {
    color: "darkgoldenrod",
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
});

export default null;
