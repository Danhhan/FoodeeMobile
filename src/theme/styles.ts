import { ViewStyle } from 'react-native';

import { layout } from './layout';
import { spacing } from './spacing';

/* Use this file to define styles that are used in multiple places in your app. */
export const $styles = {
  ...layout,

  /* Default Layouts */
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  alignItemsCenter: {
    alignItems: 'center',
  } as ViewStyle,

  container: {
    paddingHorizontal: spacing.md,
  } as ViewStyle,

  toggleInner: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  } as ViewStyle,
};
