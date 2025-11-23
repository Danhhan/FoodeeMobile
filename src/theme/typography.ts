// TODO: write documentation about fonts and typography along with guides on how to add custom fonts in own
// markdown file and add links from here

import { Platform } from 'react-native';

export const customFontsToLoad = {
  'Sen-Light': 'Sen-Light',
  'Sen-Regular': 'Sen-Regular',
  'Sen-Medium': 'Sen-Medium',
  'Sen-SemiBold': 'Sen-SemiBold',
  'Sen-Bold': 'Sen-Bold',
  'Sen-ExtraBold': 'Sen-ExtraBold',
};

const fonts = {
  sen: {
    // Cross-platform Google font.
    light: 'Sen-Light',
    normal: 'Sen-Regular',
    medium: 'Sen-Medium',
    semiBold: 'Sen-SemiBold',
    bold: 'Sen-Bold',
    extraBold: 'Sen-ExtraBold',
  },
  helveticaNeue: {
    // iOS only font.
    thin: 'HelveticaNeue-Thin',
    light: 'HelveticaNeue-Light',
    normal: 'Helvetica Neue',
    medium: 'HelveticaNeue-Medium',
  },
  courier: {
    // iOS only font.
    normal: 'Courier',
  },
  sansSerif: {
    // Android only font.
    thin: 'sans-serif-thin',
    light: 'sans-serif-light',
    normal: 'sans-serif',
    medium: 'sans-serif-medium',
  },
  monospace: {
    // Android only font.
    normal: 'monospace',
  },
};

export const typography = {
  /**
   * The fonts are available to use, but prefer using the semantic name.
   */
  fonts,
  /**
   * The primary font. Used in most places.
   */
  primary: fonts.sen,
  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: Platform.select({
    ios: fonts.helveticaNeue,
    android: fonts.sansSerif,
  }),
  /**
   * Lets get fancy with a monospace font!
   */
  code: Platform.select({ ios: fonts.courier, android: fonts.monospace }),
};
