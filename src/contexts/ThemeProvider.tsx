import React from "react";
// import { useColorScheme } from "react-native";
import { NativeBaseProvider, extendTheme } from "native-base";
import { useFonts } from "@expo-google-fonts/fira-sans";
import { customFonts, customTheme } from "../theme";

const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  // const colorScheme = useColorScheme();
  const theme = extendTheme({
    ...customTheme,
    // config: {
    // initialColorMode: colorScheme || "dark",
    // },
  });

  const [loaded] = useFonts({
    ...customFonts,
  });

  if (!loaded) return null;

  return <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>;
};

export default ThemeProvider;
