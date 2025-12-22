import { Animated, View, ViewStyle } from 'react-native';
import { Extrapolation } from 'react-native-reanimated';

import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { Text } from '@/components/Text';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

const ANIMATION_CONFIG = {
  inputRange: [80, 140],
  extrapolate: Extrapolation.CLAMP,
};

interface HeaderProps {
  scrollY: Animated.Value;
}
export const Header = ({ scrollY }: HeaderProps) => {
  const { themed } = useAppTheme();
  const nameOpacity = scrollY.interpolate({
    ...ANIMATION_CONFIG,
    outputRange: [0, 1],
  });
  return (
    <View style={themed($container)}>
      <Animated.View>
        <Text weight="bold" size="xl">
          Carts
        </Text>
        <Button
          style={themed($button)}
          text="Orders"
          // eslint-disable-next-line react/no-unstable-nested-components
          LeftAccessory={props => (
            <Icon
              icon="orders"
              containerStyle={[props.style, themed($iconContainer)]}
              size={20}
            />
          )}
        />
      </Animated.View>
    </View>
  );
};

const $container: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  ...$styles.row,
  ...$styles.justifyContentBetween,
  ...$styles.alignItemsCenter,
  paddingVertical: spacing.sm,
});

const $button: ThemedStyle<ViewStyle> = () => ({
  width: 107,
  minHeight: 40,
  borderRadius: 50,
});

const $iconContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginRight: spacing.sm,
});
