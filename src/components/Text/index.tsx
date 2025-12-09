import { ReactNode, forwardRef, ForwardedRef } from 'react';
import {
  StyleProp,
  // eslint-disable-next-line no-restricted-imports
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';
import { TOptions } from 'i18next';

import { useAppTheme } from '@/theme/context';
import type { ThemedStyle, ThemedStyleArray } from '@/theme/types';
import { typography } from '@/theme/typography';

type Sizes = keyof typeof $sizeStyles;
type Weights = keyof typeof typography.primary;
type Presets =
  | 'default'
  | 'bold'
  | 'heading'
  | 'subheading'
  | 'formLabel'
  | 'formHelper';

type TextTransform = 'uppercase' | 'lowercase' | 'capitalize';

export interface TextProps extends RNTextProps {
  /**
   * Text which is looked up via i18n.
   */
  // tx?: TxKeyPath;
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string;
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions?: TOptions;
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<TextStyle>;
  /**
   * One of the different types of text presets.
   */
  preset?: Presets;
  /**
   * Text weight modifier.
   */
  weight?: Weights;
  /**
   * Text size modifier.
   */
  size?: Sizes;
  /**
   * Children components.
   */
  children?: ReactNode;

  /**
   * An optional tint color for the icon
   */
  color?: string;

  /**
   * An optional text decoration line for the text
   */
  textDecorationLine?: TextStyle['textDecorationLine'];
  /**
   * An optional text transform for the text
   */
  textTransform?: TextTransform;
}

/**
 * For your text displaying needs.
 * This component is a HOC over the built-in React Native one.
 * @see [Documentation and Examples]{@link https://docs.infinite.red/ignite-cli/boilerplate/app/components/Text/}
 * @param {TextProps} props - The props for the `Text` component.
 * @returns {JSX.Element} The rendered `Text` component.
 */
export const Text = forwardRef(function Text(
  props: TextProps,
  ref: ForwardedRef<RNText>,
) {
  const {
    weight,
    size,
    text,
    children,
    color,
    textDecorationLine,
    textTransform,
    style: $styleOverride,
    ...rest
  } = props;
  const { themed } = useAppTheme();

  const content = text || children;
  const preset: Presets = props.preset ?? 'default';
  const $styles: StyleProp<TextStyle> = [
    themed($presets[preset]),
    weight && $fontWeightStyles[weight],
    size && $sizeStyles[size],
    color && { color },
    textDecorationLine && { textDecorationLine },
    textTransform && $textTransformStyles[textTransform],
    $styleOverride,
  ];

  return (
    <RNText {...rest} style={$styles} ref={ref}>
      {content}
    </RNText>
  );
});

const $sizeStyles = {
  xxl: { fontSize: 36, lineHeight: 44 } satisfies TextStyle,
  xl: { fontSize: 24, lineHeight: 34 } satisfies TextStyle,
  lg: { fontSize: 20, lineHeight: 32 } satisfies TextStyle,
  md: { fontSize: 18, lineHeight: 26 } satisfies TextStyle,
  sm: { fontSize: 16, lineHeight: 24 } satisfies TextStyle,
  xs: { fontSize: 14, lineHeight: 21 } satisfies TextStyle,
  xxs: { fontSize: 12, lineHeight: 18 } satisfies TextStyle,
};

const $fontWeightStyles = Object.entries(typography.primary).reduce(
  (acc, [weight, fontFamily]) => {
    return { ...acc, [weight]: { fontFamily } };
  },
  {},
) as Record<Weights, TextStyle>;

const $baseStyle: ThemedStyle<TextStyle> = theme => ({
  ...$sizeStyles.sm,
  ...$fontWeightStyles.normal,
  color: theme.colors.text,
});

const $formHelperStyle: ThemedStyle<TextStyle> = ({ colors }) => ({
  ...$sizeStyles.sm,
  ...$fontWeightStyles.normal,
  color: colors.error,
});

const $presets: Record<Presets, ThemedStyleArray<TextStyle>> = {
  default: [$baseStyle],
  bold: [$baseStyle, { ...$fontWeightStyles.bold }],
  heading: [
    $baseStyle,
    {
      ...$sizeStyles.xxl,
      ...$fontWeightStyles.bold,
    },
  ],
  subheading: [$baseStyle, { ...$sizeStyles.lg, ...$fontWeightStyles.medium }],
  formLabel: [$baseStyle, { ...$fontWeightStyles.medium }],
  formHelper: [$baseStyle, $formHelperStyle],
};

// style text transform
const $textTransformStyles: Record<TextTransform, TextStyle> = {
  uppercase: { textTransform: 'uppercase' },
  lowercase: { textTransform: 'lowercase' },
  capitalize: { textTransform: 'capitalize' },
};
