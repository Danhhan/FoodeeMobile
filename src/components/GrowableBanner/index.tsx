import { Animated, ViewStyle } from 'react-native';
import { Extrapolation } from 'react-native-reanimated';

import { useAppTheme } from '@/theme/context';
import { ThemedStyle } from '@/theme/types';

interface IGrowableBannerProps {
  scrollY: Animated.Value;
  children: React.ReactNode;
}
export const GrowableBanner = ({ scrollY, children }: IGrowableBannerProps) => {
  const { themed } = useAppTheme();
  const scale = scrollY.interpolate({
    inputRange: [-150, 0],
    extrapolate: Extrapolation.CLAMP,
    outputRange: [2, 1],
  });
  return (
    <Animated.View
      style={themed([$growableBanner, { transform: [{ scale }] }])}
    >
      {children}
    </Animated.View>
  );
};

const $growableBanner: ThemedStyle<ViewStyle> = () => ({
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  height: '100%',
  transformOrigin: 'bottom',
});
