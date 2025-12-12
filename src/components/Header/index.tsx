import { memo } from 'react';
import { Pressable, TextStyle, View, ViewStyle } from 'react-native';

import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

import { Icon, PressableIcon, PressableIconProps } from '../Icon';
import { Text } from '../Text';

export const Header = memo(() => {
  const {
    themed,
    theme: { colors },
  } = useAppTheme();
  return (
    <View style={themed($headerContainer)}>
      <View>
        <Text
          textTransform="uppercase"
          color={colors.palette.primary500}
          weight="bold"
          size="xxs"
        >
          Delivery to
        </Text>
        <Text size="xs" weight="light" color={colors.palette.neutral600}>
          Halal Lab office
        </Text>
      </View>
      <View>
        <PressableIcon
          color={colors.palette.neutral100}
          containerStyle={themed($cartContainer)}
          icon="cart"
          size={24}
        />
        <View style={themed($cartBadge)}>
          <Text color={colors.palette.neutral100}>2</Text>
        </View>
      </View>
    </View>
  );
});

Header.displayName = 'Header';

const $headerContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: spacing.md,
  paddingBottom: spacing.md,
  ...$styles.container,
});

const $cartContainer: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.palette.neutral900,
  borderRadius: '100%',
  height: 45,
  width: 45,
  ...$styles.center,
});

const $cartBadge: ThemedStyle<TextStyle> = ({ colors }) => ({
  backgroundColor: colors.palette.primary500,
  borderRadius: '100%',
  height: 25,
  width: 25,
  color: colors.palette.neutral100,
  ...$styles.center,
  position: 'absolute',
  right: 0,
  top: -5,
});

interface IHeaderWithBackButtonProps
  extends Partial<Pick<PressableIconProps, 'onPress' | 'icon'>> {
  title?: string;
  style?: ViewStyle;
}

export const HeaderWithBackButton = ({
  onPress,
  title,
  icon = 'back',
  style,
}: IHeaderWithBackButtonProps) => {
  const {
    themed,
    theme: { colors },
  } = useAppTheme();

  const $containerStyles = [themed($container), style];

  return (
    <View style={$containerStyles}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          $backButton,
          pressed ? { backgroundColor: colors.palette.gray600 } : undefined,
        ]}
      >
        <Icon icon={icon} size={20} />
      </Pressable>
      {title && (
        <Text size="md" weight="medium">
          {title}
        </Text>
      )}
    </View>
  );
};

const $container: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: spacing.md,
  height: 54,
});

const $backButton: ViewStyle = {
  width: 37,
  height: 37,
  ...$styles.center,
  borderRadius: 50,
};
