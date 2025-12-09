import {
  Image,
  ImageStyle,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

import { useAppTheme } from '@/theme/context';

export type IconTypes = keyof typeof iconRegistry;

type BaseIconProps = {
  /**
   * The name of the icon
   */
  icon: IconTypes;

  /**
   * An optional tint color for the icon
   */
  color?: string;

  /**
   * An optional size for the icon. If not provided, the icon will be sized to the icon's resolution.
   */
  size?: number;

  /**
   * Style overrides for the icon image
   */
  style?: StyleProp<ImageStyle>;

  /**
   * Style overrides for the icon container
   */
  containerStyle?: StyleProp<ViewStyle>;
};

export type PressableIconProps = Omit<TouchableOpacityProps, 'style'> &
  BaseIconProps;
type IconProps = Omit<ViewProps, 'style'> & BaseIconProps;

/**
 * A component to render a registered icon.
 * It is wrapped in a <TouchableOpacity />
 * @see [Documentation and Examples]{@link https://docs.infinite.red/ignite-cli/boilerplate/app/components/Icon/}
 * @param {PressableIconProps} props - The props for the `PressableIcon` component.
 * @returns {JSX.Element} The rendered `PressableIcon` component.
 */
export function PressableIcon(props: PressableIconProps) {
  const {
    icon,
    color,
    size,
    style: $imageStyleOverride,
    containerStyle: $containerStyleOverride,
    ...pressableProps
  } = props;

  const { theme } = useAppTheme();

  const $imageStyle: StyleProp<ImageStyle> = [
    $imageStyleBase,
    { tintColor: color ?? theme.colors.palette.neutral900 },
    size !== undefined && { width: size, height: size },
    $imageStyleOverride,
  ];

  return (
    <TouchableOpacity {...pressableProps} style={$containerStyleOverride}>
      <Image style={$imageStyle} source={iconRegistry[icon]} />
    </TouchableOpacity>
  );
}

/**
 * A component to render a registered icon.
 * It is wrapped in a <View />, use `PressableIcon` if you want to react to input
 * @see [Documentation and Examples]{@link https://docs.infinite.red/ignite-cli/boilerplate/app/components/Icon/}
 * @param {IconProps} props - The props for the `Icon` component.
 * @returns {JSX.Element} The rendered `Icon` component.
 */
export function Icon(props: IconProps) {
  const {
    icon,
    color,
    size = 24,
    style: $imageStyleOverride,
    containerStyle: $containerStyleOverride,
    ...viewProps
  } = props;

  const { theme } = useAppTheme();

  const $imageStyle: StyleProp<ImageStyle> = [
    $imageStyleBase,
    { tintColor: color ?? theme.colors.text },
    size !== undefined && { width: size, height: size },
    $imageStyleOverride,
  ];

  return (
    <View {...viewProps} style={$containerStyleOverride}>
      <Image style={$imageStyle} source={iconRegistry[icon]} />
    </View>
  );
}

export const iconRegistry = {
  back: require('@/assets/icons/arrow-left.png'),
  facebook: require('@/assets/icons/facebook.png'),
  hidden: require('@/assets/icons/hidden.png'),
  view: require('@/assets/icons/view.png'),
  x: require('@/assets/icons/x.png'),
  home: require('@/assets/icons/home.png'),
  user: require('@/assets/icons/user.png'),
  cart: require('@/assets/icons/cart.png'),
  forward: require('@/assets/icons/arrow-right.png'),
  clock: require('@/assets/icons/clock.png'),
  star: require('@/assets/icons/star.png'),
  car: require('@/assets/icons/car.png'),
  plus: require('@/assets/icons/plus.png'),
  close: require('@/assets/icons/x.png'),
  salt: require('@/assets/icons/salt.png'),
  'chevron-down': require('@/assets/icons/chevron-down.png'),
  adjust: require('@/assets/icons/adjust.png'),
  'heart-line': require('@/assets/icons/heart-line.png'),
  'heart-fill': require('@/assets/icons/heart-fill.png'),
  'rating-filled': require('@/assets/icons/rating-filled.png'),
  'arrow-right': require('@/assets/icons/arrow-right.png'),
  'chevron-right': require('@/assets/icons/chevron-right.png'),
  account: require('@/assets/icons/account.png'),
  browse: require('@/assets/icons/browse.png'),
  grocery: require('@/assets/icons/grocery.png'),
  basket: require('@/assets/icons/basket.png'),
  calendar: require('@/assets/icons/calendar.png'),
  search: require('@/assets/icons/search.png'),
  edit: require('@/assets/icons/edit.png'),
  location: require('@/assets/icons/location.png'),
  map: require('@/assets/icons/map.png'),
  arrowLeft: require('@/assets/icons/arrow-left.png'),
  arrowRight: require('@/assets/icons/arrow-right.png'),
  homeLine: require('@/assets/icons/home-line.png'),
  work: require('@/assets/icons/work.png'),
};

const $imageStyleBase: ImageStyle = {
  resizeMode: 'contain',
};
