/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { ColorSchemeName } from "react-native";

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    royalPurple:"#771F98",
    white:'#fff',
    darkChestnut: '#993F3F',
    spanishGray: '#949494',
    neutralGray: '#797C7B',
    red:"#F04A4C"
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    royalPurple:"#771F98",
    white:'#fff',
    darkChestnut: '#993F3F',
    spanishGray: '#949494',
    neutralGray: '#797C7B',
    red:"#F04A4C"
  },
};

const getColors=(colorScheme: ColorSchemeName)=>{
  return colorScheme === 'dark' ? colors.dark : colors.light
}
export default getColors