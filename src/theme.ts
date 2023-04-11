import { extendTheme } from 'native-base';
import {
  FiraSans_100Thin,
  FiraSans_100Thin_Italic,
  FiraSans_200ExtraLight,
  FiraSans_200ExtraLight_Italic,
  FiraSans_300Light,
  FiraSans_300Light_Italic,
  FiraSans_400Regular,
  FiraSans_400Regular_Italic,
  FiraSans_500Medium,
  FiraSans_500Medium_Italic,
  FiraSans_600SemiBold,
  FiraSans_600SemiBold_Italic,
  FiraSans_700Bold,
  FiraSans_700Bold_Italic,
} from '@expo-google-fonts/fira-sans';

export const customFonts = {
  FiraSans_100Thin,
  FiraSans_100Thin_Italic,
  FiraSans_200ExtraLight,
  FiraSans_200ExtraLight_Italic,
  FiraSans_300Light,
  FiraSans_300Light_Italic,
  FiraSans_400Regular,
  FiraSans_400Regular_Italic,
  FiraSans_500Medium,
  FiraSans_500Medium_Italic,
  FiraSans_600SemiBold,
  FiraSans_600SemiBold_Italic,
  FiraSans_700Bold,
  FiraSans_700Bold_Italic,
};

export const customTheme = extendTheme({
  colors: {
    primary: {
      50: '#f5f3ff',
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#8b5cf6',
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95',
    },
  },
  fontConfig: {
    FiraSans: {
      100: {
        normal: 'FiraSans_100Thin',
        italic: 'FiraSans_100Thin_Italic',
      },
      200: {
        normal: 'FiraSans_200ExtraLight',
        italic: 'FiraSans_200ExtraLight_Italic',
      },
      300: {
        normal: 'FiraSans_300Light',
        italic: 'FiraSans_300Light_Italic',
      },
      400: {
        normal: 'FiraSans_400Regular',
        italic: 'FiraSans_400Regular_Italic',
      },
      500: {
        normal: 'FiraSans_500Medium',
        italic: 'FiraSans_500Medium_Italic',
      },
      600: {
        normal: 'FiraSans_600SemiBold',
        italic: 'FiraSans_600SemiBold_Italic',
      },
      700: {
        normal: 'FiraSans_700Bold',
        italic: 'FiraSans_700Bold_Italic',
      },
    },
  },
  fonts: {
    heading: 'FiraSans',
    body: 'FiraSans',
    mono: 'FiraSans',
  },
});

type CustomThemeType = typeof customTheme;

declare module 'native-base' {
  type ICustomTheme = CustomThemeType;
}
