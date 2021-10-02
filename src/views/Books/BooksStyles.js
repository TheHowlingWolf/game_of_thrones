import { pxToRem } from "@theme/theme";

export const bookStyles = (theme) => ({
  booksContainer: {
    height: "100%",
  },
  booksHeading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: theme.palette.secondary.main,
  },
  citadelSvg: {
    width: pxToRem(200),
    padding: `${pxToRem(20)} 0`,
  },
  fetchMoreButton: {
    fontSize: pxToRem(30),
    textTransform: "Capitalize",
    margin: pxToRem(30),
  },
});

export default null;
