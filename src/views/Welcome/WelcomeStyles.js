import { pxToRem } from "@theme/theme";

export const welcomeStyles = (theme) => ({
  welcomeContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  welcomeComponentTextContainer: {
    textAlign: "center",
  },
  welcomeComponentText: {
    color: theme.palette.secondary.main,
    opacity: 1,
  },
  wolfSvg: {
    width: pxToRem(350),
  },
  welcomeButton: {
    textTransform: "Capitalize",
    margin: `${pxToRem(20)} 0`,
    fontSize: pxToRem(22),
  },
});

export default welcomeStyles;
