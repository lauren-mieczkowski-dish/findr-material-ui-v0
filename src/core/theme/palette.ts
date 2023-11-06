import { PaletteMode } from "@material-ui/core";

const palette = {
  grey: {
    "50":  "#fbfaff",
    "100": "#f5f5f6", //smoke from dish palette
    "200": "#e3e3ec",
    "300": "#d2d2da",
    "400": "#adadb5",
    "500": "#8d8d94",
    "600": "#65656c",
    "700": "#525259", //cinder from dish palette
    "800": "#34343a",
    "900": "#14141a", 
  },
};

export const darkPalette = {
  ...palette,
  contrastThreshold: 4.5,
  mode: "dark" as PaletteMode,
  error: {
    main: "#FF8A65",
  },
  info: {
    main: "#4FC3F7",
  },
  primary: {
    main: "#64B5F6",
    contrastText: palette.grey[900],
  },
  secondary: {
    main: palette.grey[900],
  },
  success: {
    main: "#81C784",
  },
  warning: {
    main: "#FFD54F",
  },
  dish: {
    main: "#9d2235", //ember from dish palette
  },
  text: {
    primary: palette.grey[100],
    secondary: palette.grey[300],
    disabled: palette.grey[600],
  },
  divider: palette.grey[600],
  background: {
    paper: palette.grey[800],
    default: palette.grey[700],
  },
  action: {
    selectedOpacity: 0,
    selected: palette.grey[700],
  },
};

export const lightPalette = {
  ...palette,
  contrastThreshold: 3,
  mode: "light" as PaletteMode,
  error: {
    main: "#FF3D00",
  },
  info: {
    main: "#00B0FF",
  },
  primary: {
    main: "#2962FF",
    contrastText: "#FFF",
  },
  secondary: {
    main: "#FFF",
  },
  success: {
    main: "#00E676",
  },
  warning: {
    main: "#FFC400",
  },
  dish: {
    main: "#9d2235", //ember from dish palette
  },
  text: {
    primary: palette.grey[700],
    secondary: palette.grey[500],
    disabled: palette.grey[300],
  },
  divider: palette.grey[200],
  background: {
    paper: "#FFF",
    default: palette.grey[100],
  },
  action: {
    selectedOpacity: 0,
    selected: palette.grey[100],
  },
};
