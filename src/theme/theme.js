import { createTheme } from "@material-ui/core/styles";

/**
 * @param px input px as per 1920 * 1080 resolution
 */
export const pxToRem = (px) => `${px / 22.5}rem`;

/**
 * @param px input px as per 1920 * 1080 resolution
 */
export const pxToVh = (px) => `${px * 0.09259}vh`;

/**
 * @param px input px as per 1920 * 1080 resolution
 */
export const pxToVw = (px) => `${px * 0.05208}vw`;

export default createTheme({
  palette: {
    primary: {
      main: "#F0E5CF",
      light: "#F7F6F2",
      dark: "#C8C6C6",
    },
    secondary: {
      main: "#4B6587",
    },
    divider: "#E6E6E6",
  },
  spacing: {
    unit: pxToRem(8),
  },
  typography: {
    useNextVariants: true,
    pxToRem: (px) => pxToRem(px),
    pxToVh: (px) => pxToVh(px),
    pxToVw: (px) => pxToVw(px),
    h1: {
      fontSize: pxToRem(60),
    },
    h2: {
      fontSize: pxToRem(40),
      lineHeight: "2.05rem",
    },
    h3: {
      fontSize: pxToRem(30),
    },
    h4: {
      fontSize: pxToRem(26),
    },
    h5: {
      fontSize: pxToRem(24),
      lineHeight: "normal",
    },
    h6: {
      fontSize: pxToRem(22),
    },
    subtitle1: {
      fontSize: pxToRem(20),
      lineHeight: "normal",
    },
    subtitle2: {
      fontSize: pxToRem(18),
    },
    body1: {
      fontSize: pxToRem(20),
      color: "rgb(255,255,255)",
    },
    body2: {
      fontSize: pxToRem(20),
      color: "rgb(255,255,255,0.65)",
      lineHeight: "normal",
    },
    caption: {
      fontSize: pxToRem(16),
      color: "#FFFFFF",
    },
    overline: {
      fontSize: pxToRem(14),
      color: "inherit",
      textTransform: "none",
    },

    fontFamily: "Roboto",
  },
  status: {
    safe: "#5FC32C",
    safe2: "#CFFFB5",
    warning: "#FF8888",
  },
  border: {
    fine: {
      primary: `${pxToRem(1)} solid #5DAAE0`,
      secondary: `${pxToRem(1)} solid #FFFFFF`,
      main: `${pxToRem(1)} solid`,
    },
  },
  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: pxToRem(4),
      },
    },
    MuiIconButton: {
      root: {
        padding: pxToRem(12),
      },
    },
    MuiButton: {
      root: {
        minWidth: pxToRem(64),
        padding: `${pxToRem(6)} ${pxToRem(16)}`,
        borderRadius: pxToRem(4),
      },
      text: {
        padding: `${pxToRem(6)} ${pxToRem(8)}`,
      },
      sizeSmall: {
        padding: `${pxToRem(4)} ${pxToRem(8)}`,
        minWidth: pxToRem(64),
      },
      outlined: {
        border: `${pxToRem(1)} solid #3B607A`,
        padding: `${pxToRem(5)} ${pxToRem(16)}`,
      },
      outlinedSecondary: {
        border: `${pxToRem(1)} solid rgba(255,255,255,0.5)`,
        "&:hover": {
          border: `${pxToRem(1)} solid rgba(255,255,255,0.8)`,
        },
      },
    },
    MuiSvgIcon: {
      root: {
        fontSize: pxToRem(24),
      },
      fontSizeLarge: {
        fontSize: pxToRem(35),
      },
      fontSizeSmall: {
        fontSize: pxToRem(20),
      },
    },
    MuiFab: {
      root: {
        minHeight: "unset",
      },
      sizeSmall: {
        height: "1em",
        width: "1em",
        fontSize: "2rem",
      },
    },
    MuiSwitch: {
      root: {
        width: pxToRem(62),
      },
      icon: {
        width: pxToRem(20),
        height: pxToRem(20),
        boxShadow: `${pxToRem(0)} ${pxToRem(3)} ${pxToRem(6)}rgba(0,0,0,.20)`,
      },
      switchBase: {
        width: pxToRem(48),
        height: pxToRem(48),
      },
      bar: {
        width: pxToRem(34),
        height: pxToRem(14),
        marginTop: pxToRem(-7),
        marginLeft: pxToRem(-17),
        borderRadius: pxToRem(7),
      },
    },
    MuiTooltip: {
      tooltip: {
        fontSize: pxToRem(18),
        marginTop: "0.5vh !important",
        marginBottom: "0 !important",
        padding: "1vh !important",
        borderRadius: "1vh !important",
        marginLeft: "0.5vw !important",
        maxWidth: "infinite",
      },
      touch: {
        fontSize: pxToRem(18),
      },
    },
    MuiGrid: {
      "spacing-xs-8": {
        "& > $item": {
          padding: `${pxToVh(4)} ${pxToVw(4)}`,
        },
        width: `calc(100% + ${pxToVw(8)})`,
        margin: `-${pxToRem(4)}`,
      },
      "spacing-xs-16": {
        "& > $item": {
          padding: `${pxToVh(8)} ${pxToVw(8)}`,
        },
        width: `calc(100% + ${pxToVw(16)})`,
        margin: `-${pxToRem(8)}`,
      },
    },
  },
});
