import { Animated, View, ViewStyle } from 'react-native';
import { Extrapolation } from 'react-native-reanimated';

import { IconTypes, PressableIcon } from '@/components/Icon';
import { useAppTheme } from '@/theme/context';
import { ThemedStyle } from '@/theme/types';
import { useSafeAreaInsetsStyle } from '@/utils/useSafeAreaInsetsStyle';

interface IStickyHeaderProps {
  scrollY: Animated.Value;
  onPressGoBack: () => void;
  title: string;
  icon: IconTypes;
}

const ANIMATION_CONFIG = {
  inputRange: [80, 140],
  extrapolate: Extrapolation.CLAMP,
};

const StickyHeader = ({
  scrollY,
  onPressGoBack,
  title,
  icon,
}: IStickyHeaderProps) => {
  const {
    theme: { colors },
    themed,
  } = useAppTheme();
  const $containerInsets = useSafeAreaInsetsStyle(['top']);

  const headerBackgroundOpacity = scrollY.interpolate({
    ...ANIMATION_CONFIG,
    outputRange: [0, 1],
  });

  const nameOpacity = scrollY.interpolate({
    ...ANIMATION_CONFIG,
    outputRange: [0, 1],
  });

  const whiteIconOpacity = scrollY.interpolate({
    ...ANIMATION_CONFIG,
    outputRange: [1, 0],
  });

  const shadowOpacity = scrollY.interpolate({
    ...ANIMATION_CONFIG,
    outputRange: [0, 0.1],
  });

  return (
    <Animated.View
      style={[
        themed($stickyHeader),
        $containerInsets,
        $animatedShadow(shadowOpacity),
      ]}
    >
      <Animated.View
        style={[
          themed($headerBackground),
          { opacity: headerBackgroundOpacity },
        ]}
      />

      <View style={themed($headerContent)}>
        <View style={themed($iconContainer)}>
          <Animated.View style={{ opacity: whiteIconOpacity }}>
            <PressableIcon
              color={colors.palette.neutral100}
              icon={icon}
              size={24}
              onPress={onPressGoBack}
              activeOpacity={1}
            />
          </Animated.View>

          <Animated.View
            style={[themed($overlayIcon), { opacity: nameOpacity }]}
          >
            <PressableIcon
              color={colors.palette.neutral900}
              icon={icon}
              size={24}
              onPress={onPressGoBack}
              activeOpacity={1}
            />
          </Animated.View>
        </View>

        <Animated.Text style={[themed($headerTitle), { opacity: nameOpacity }]}>
          {title}
        </Animated.Text>
      </View>
    </Animated.View>
  );
};

const $stickyHeader: ThemedStyle<ViewStyle> = () => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 100,
});

const $animatedShadow = (shadowOpacity: Animated.AnimatedAddition<number>) => ({
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity,
  shadowRadius: 4,
  elevation: 4,
});

const $headerBackground: ThemedStyle<ViewStyle> = ({ colors }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: colors.palette.neutral100,
  borderBottomWidth: 1,
  borderBottomColor: colors.palette.neutral200,
});

const $headerContent: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: spacing.md,
  height: 56,
});

const $iconContainer: ThemedStyle<ViewStyle> = () => ({
  position: 'relative',
});

const $overlayIcon: ThemedStyle<ViewStyle> = () => ({
  position: 'absolute',
  top: 0,
  left: 0,
});

const $headerTitle: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
  fontSize: 16,
  fontWeight: '600',
  color: colors.text,
  marginLeft: spacing.sm,
});

export default StickyHeader;
