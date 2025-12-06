import { useEffect } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Animated, {
  cancelAnimation,
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

interface AnimatedProgressBarProps {
  height?: number;
  color?: string;
  duration?: number;
  isLoading?: boolean;
}

export const ProgressBar = ({
  height = 2,
  color: overrideColor,
  duration = 1500,
  isLoading = false,
}: AnimatedProgressBarProps) => {
  const progress = useSharedValue(0);
  const containerWidth = useSharedValue(0);
  const {
    theme: { colors },
    themed,
  } = useAppTheme();
  const color = overrideColor || colors.palette.blue500;

  useEffect(() => {
    if (!isLoading) {
      cancelAnimation(progress);
      progress.value = 0;
      return;
    }
    progress.value = withRepeat(
      withTiming(1, {
        duration,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      false,
    );
  }, [duration, progress, isLoading]);

  const animatedStyle = useAnimatedStyle(() => {
    const barWidth = containerWidth.value * 0.9;
    const translateX = interpolate(
      progress.value,
      [0, 1],
      [-barWidth, containerWidth.value],
      Extrapolate.CLAMP,
    );

    return {
      width: barWidth,
      transform: [{ translateX }],
    };
  });

  const $progress: ViewStyle = {
    ...$styles.fullHeight,
    backgroundColor: color,
    borderRadius: height / 2,
  };

  const $containerStyle: StyleProp<ViewStyle> = [
    themed($container),
    {
      height,
      borderRadius: height / 2,
    },
  ];

  if (!isLoading) {
    return <View style={{ height }} />;
  }

  return (
    <View
      style={$containerStyle}
      onLayout={e => {
        containerWidth.value = e.nativeEvent.layout.width;
      }}
    >
      <Animated.View style={[$progress, animatedStyle]} />
    </View>
  );
};

const $container: ThemedStyle<ViewStyle> = ({ colors }) => ({
  width: '100%',
  backgroundColor: colors.palette.gray500,
  overflow: 'hidden',
});
