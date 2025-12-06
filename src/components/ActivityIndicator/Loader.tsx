import { useEffect } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import { useAppTheme } from '@/theme/context';

interface LoaderProps {
  size?: number;
  color?: string;
}
export const Loader = ({ size = 40, color: overrideColor }: LoaderProps) => {
  const rotation = useSharedValue(0);

  const {
    theme: { colors },
  } = useAppTheme();
  const color = overrideColor || colors.palette.blue500;
  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 1000,
        easing: Easing.linear,
      }),
      -1,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  const $style: StyleProp<ViewStyle> = [
    $viewStyle,
    animatedStyle,
    {
      width: size,
      height: size,
      borderRadius: size / 2,
      borderTopColor: color,
      borderRightColor: color,
    },
  ];

  return <Animated.View style={$style} />;
};

const $viewStyle: ViewStyle = {
  borderStyle: 'solid',
  borderWidth: 3,
  borderBottomColor: 'transparent',
  borderLeftColor: 'transparent',
};
