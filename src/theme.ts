import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";
import Styles from "./default-styles";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const textColorMode = {
  baseStyle: (props: StyleFunctionProps) => ({
    color: mode(Styles.darkModeTextColor, Styles.lightModeTextColor)(props),
  }),
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#6c6c6c",
      700: "#202020",
      800: "#121212",
      900: "#111",
    },
  },
  components: {
    Heading: textColorMode,
    Icon: textColorMode,
    Text: textColorMode,
  },
});

export default theme;
