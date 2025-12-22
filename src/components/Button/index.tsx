import { ComponentType } from 'react';
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import type { ThemedStyle, ThemedStyleArray } from '@/theme/types';

import { Text, TextProps } from '../Text';

type Presets = 'default' | 'filled' | 'reversed' | 'empty';

export interface ButtonAccessoryProps {
  style: StyleProp<any>;
  pressableState: PressableStateCallbackType;
  disabled?: boolean;
}

export interface ButtonProps extends PressableProps {
  /**
   * Text which is looked up via i18n.
   */
  // tx?: TextProps['tx'];
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: TextProps['text'];
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions?: TextProps['txOptions'];
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * An optional style override for the "pressed" state.
   */
  pressedStyle?: StyleProp<ViewStyle>;
  /**
   * An optional style override for the button text.
   */
  textStyle?: StyleProp<TextStyle>;
  /**
   * An optional style override for the button text when in the "pressed" state.
   */
  pressedTextStyle?: StyleProp<TextStyle>;
  /**
   * An optional style override for the button text when in the "disabled" state.
   */
  disabledTextStyle?: StyleProp<TextStyle>;
  /**
   * One of the different types of button presets.
   */
  preset?: Presets;
  /**
   * An optional component to render on the right side of the text.
   * Example: `RightAccessory={(props) => <View {...props} />}`
   */
  RightAccessory?: ComponentType<ButtonAccessoryProps>;
  /**
   * An optional component to render on the left side of the text.
   * Example: `LeftAccessory={(props) => <View {...props} />}`
   */
  LeftAccessory?: ComponentType<ButtonAccessoryProps>;
  /**
   * Children components.
   */
  children?: React.ReactNode;
  /**
   * disabled prop, accessed directly for declarative styling reasons.
   * https://reactnative.dev/docs/pressable#disabled
   */
  disabled?: boolean;
  /**
   * An optional style override for the disabled state
   */
  disabledStyle?: StyleProp<ViewStyle>;
  /**
   * An optional text decoration line for the button text
   */
  textDecorationLine?: TextStyle['textDecorationLine'];
  /**
   * An optional boolean to show loading state
   */
  isLoading?: boolean;
  /**
   * Whether button should fit content instead of full width
   */
  fitContent?: boolean;
}

/**
 * A component that allows users to take actions and make choices.
 * Wraps the Text component with a Pressable component.
 * @see [Documentation and Examples]{@link https://docs.infinite.red/ignite-cli/boilerplate/app/components/Button/}
 * @param {ButtonProps} props - The props for the `Button` component.
 * @returns {JSX.Element} The rendered `Button` component.
 * @example
 * <Button
 *   tx="common:ok"
 *   style={styles.button}
 *   textStyle={styles.buttonText}
 *   onPress={handleButtonPress}
 * />
 */
export function Button(props: ButtonProps) {
  const {
    // tx,
    text,
    txOptions,
    style: $viewStyleOverride,
    pressedStyle: $pressedViewStyleOverride,
    textStyle: $textStyleOverride,
    pressedTextStyle: $pressedTextStyleOverride,
    disabledTextStyle: $disabledTextStyleOverride,
    children,
    RightAccessory,
    LeftAccessory,
    disabled,
    disabledStyle: $disabledViewStyleOverride,
    textDecorationLine,
    isLoading,
    fitContent = false,
    ...rest
  } = props;

  const {
    themed,
    theme: { colors },
  } = useAppTheme();

  const preset: Presets = props.preset ?? 'default';

  const $disabledViewStyle: StyleProp<ViewStyle> = [
    themed($viewPresets.default),
    $disabledViewStyleOverride,
  ];
  /**
   * @param {PressableStateCallbackType} root0 - The root object containing the pressed state.
   * @param {boolean} root0.pressed - The pressed state.
   * @returns {StyleProp<ViewStyle>} The view style based on the pressed state.
   */
  function $viewStyle({
    pressed,
  }: PressableStateCallbackType): StyleProp<ViewStyle> {
    return [
      themed($viewPresets[preset]),
      !!disabled && $disabledViewStyle,
      fitContent && { alignSelf: 'flex-start' },
      $viewStyleOverride,
      !!pressed &&
        themed([$pressedViewPresets[preset], $pressedViewStyleOverride]),
    ];
  }
  const $disabledTextStyle: StyleProp<TextStyle> = [
    { color: colors.palette.gray700 },
    $disabledTextStyleOverride,
  ];
  /**
   * @param {PressableStateCallbackType} root0 - The root object containing the pressed state.
   * @param {boolean} root0.pressed - The pressed state.
   * @returns {StyleProp<TextStyle>} The text style based on the pressed state.
   */
  function $textStyle({
    pressed,
  }: PressableStateCallbackType): StyleProp<TextStyle> {
    return [
      themed($textPresets[preset]),
      $textStyleOverride,
      !!pressed &&
        themed([$pressedTextPresets[preset], $pressedTextStyleOverride]),
      !!disabled && $disabledTextStyle,
      textDecorationLine && { textDecorationLine },
    ];
  }

  return (
    <Pressable
      style={$viewStyle}
      accessibilityRole="button"
      accessibilityState={{ disabled: !!disabled }}
      {...rest}
      disabled={disabled || isLoading}
    >
      {state => (
        <>
          {!!LeftAccessory && (
            <LeftAccessory
              style={$leftAccessoryStyle}
              pressableState={state}
              disabled={disabled}
            />
          )}
          {isLoading && <ActivityIndicator color={colors.palette.neutral900} />}
          {!isLoading && text && (
            <Text
              // tx={tx}
              text={text}
              txOptions={txOptions}
              style={$textStyle(state)}
              weight="normal"
            >
              {children}
            </Text>
          )}
          {children}

          {!!RightAccessory && (
            <RightAccessory
              style={$rightAccessoryStyle}
              pressableState={state}
              disabled={disabled}
            />
          )}
        </>
      )}
    </Pressable>
  );
}

const $baseViewStyle: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  minHeight: 50,
  borderRadius: 12,
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: spacing.sm,
  paddingHorizontal: spacing.sm,
  overflow: 'hidden',
});

const $baseTextStyle: ThemedStyle<TextStyle> = ({ colors }) => ({
  fontSize: 16,
  lineHeight: 20,
  textAlign: 'center',
  flexShrink: 1,
  flexGrow: 0,
  zIndex: 2,
  color: colors.palette.white500,
});

const $rightAccessoryStyle: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginStart: spacing.xs,
  zIndex: 1,
});
const $leftAccessoryStyle: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginEnd: spacing.xs,
  zIndex: 1,
});

const $viewPresets: Record<Presets, ThemedStyleArray<ViewStyle>> = {
  default: [
    $styles.row,
    $baseViewStyle,
    ({ colors }) => ({ backgroundColor: colors.palette.white600 }),
  ],
  filled: [
    $styles.row,
    $baseViewStyle,
    ({ colors }) => ({ backgroundColor: colors.palette.black500 }),
  ],
  reversed: [
    $styles.row,
    $baseViewStyle,
    ({ colors }) => ({ backgroundColor: colors.palette.neutral800 }),
  ],
  empty: [
    $styles.row,
    $baseViewStyle,
    ({ colors }) => ({ backgroundColor: colors.palette.neutral100 }),
  ],
};

const $textPresets: Record<Presets, ThemedStyleArray<TextStyle>> = {
  default: [
    $baseTextStyle,
    ({ colors }) => ({ color: colors.palette.black500 }),
  ],
  filled: [$baseTextStyle],
  reversed: [
    $baseTextStyle,
    ({ colors }) => ({ color: colors.palette.neutral100 }),
  ],
  empty: [
    $baseTextStyle,
    ({ colors }) => ({ color: colors.palette.neutral900 }),
    ({ typography }) => ({ fontFamily: typography.primary.normal }),
  ],
};

const $pressedViewPresets: Record<Presets, ThemedStyle<ViewStyle>> = {
  default: ({ colors }) => ({ backgroundColor: colors.palette.gray700 }),
  filled: ({ colors }) => ({ backgroundColor: colors.palette.black300 }),
  reversed: ({ colors }) => ({ backgroundColor: colors.palette.neutral700 }),
  empty: ({ colors }) => ({
    backgroundColor: colors.palette.neutral200,
    borderColor: colors.palette.neutral400,
    borderWidth: 1,
  }),
};

const $pressedTextPresets: Record<Presets, ThemedStyle<TextStyle>> = {
  default: () => ({ opacity: 0.9 }),
  filled: () => ({ opacity: 0.9 }),
  reversed: () => ({ opacity: 0.9 }),
  empty: () => ({ opacity: 0.9 }),
};
