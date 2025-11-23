import { ViewStyle } from 'react-native';

/* Use this file to define styles that are used in multiple places in your app. */
export const layout = {
  /* Column Layouts */
  colCenter: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  } as ViewStyle,
  column: {
    flexDirection: 'column',
  } as ViewStyle,
  columnReverse: {
    flexDirection: 'column-reverse',
  } as ViewStyle,
  colVCenter: {
    alignItems: 'center',
    flexDirection: 'column',
  } as ViewStyle,
  colHCenter: {
    flexDirection: 'column',
    justifyContent: 'center',
  } as ViewStyle,
  /* Row Layouts */
  row: {
    flexDirection: 'row',
  } as ViewStyle,
  rowReverse: {
    flexDirection: 'row-reverse',
  } as ViewStyle,
  rowCenter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  } as ViewStyle,
  rowVCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  } as ViewStyle,
  rowHCenter: {
    alignItems: 'center',
    flexDirection: 'row',
  } as ViewStyle,
  /* Default Layouts */
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  rowWrap: {
    flexWrap: 'wrap',
  } as ViewStyle,
  alignItemsCenter: {
    alignItems: 'center',
  } as ViewStyle,
  alignItemsStart: {
    alignItems: 'flex-start',
  } as ViewStyle,
  alignItemsEnd: {
    alignItems: 'flex-end',
  } as ViewStyle,
  alignItemsStretch: {
    alignItems: 'stretch',
  } as ViewStyle,
  justifyContentStart: {
    justifyContent: 'flex-start',
  } as ViewStyle,
  justifyContentEnd: {
    justifyContent: 'flex-end',
  } as ViewStyle,
  justifyContentCenter: {
    justifyContent: 'center',
  } as ViewStyle,
  justifyContentAround: {
    justifyContent: 'space-around',
  } as ViewStyle,
  justifyContentBetween: {
    justifyContent: 'space-between',
  } as ViewStyle,
  scrollSpaceAround: {
    flexGrow: 1,
    justifyContent: 'space-around',
  } as ViewStyle,
  scrollSpaceBetween: {
    flexGrow: 1,
    justifyContent: 'space-between',
  } as ViewStyle,
  selfStretch: {
    alignSelf: 'stretch',
  } as ViewStyle,
  /* Sizes Layouts */
  fill: {
    flex: 1,
  } as ViewStyle,
  fullSize: {
    height: '100%',
    width: '100%',
  } as ViewStyle,
  fullWidth: {
    width: '100%',
  } as ViewStyle,
  fullHeight: {
    height: '100%',
  } as ViewStyle,
};
