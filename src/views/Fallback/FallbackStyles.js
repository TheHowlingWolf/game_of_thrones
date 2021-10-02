import { pxToRem } from "@theme/theme";

export const fallbackStyles = (theme) => ({
  fallbackContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  fallbackComponentTextContainer: {
    textAlign: "center",
  },
  fallbackComponentText: {
    color: theme.palette.secondary.main,
    opacity: 1,
  },
  wolfSvg: {
    width: pxToRem(350),
  },
  fallbackButton: {
    textTransform: "Capitalize",
    margin: `${pxToRem(20)} 0`,
    fontSize: pxToRem(22),
  },
});

export default fallbackStyles;
