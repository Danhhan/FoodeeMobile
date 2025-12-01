import { useSharedValue, withTiming } from 'react-native-reanimated';

export const useAnimatedOverlay = () => {
  const overlayOpacity = useSharedValue(0);
  const onPressIn = () => {
    overlayOpacity.value = withTiming(0.3, { duration: 150 });
  };
  const onPressOut = () => {
    overlayOpacity.value = withTiming(0, { duration: 150 });
  };
  return { overlayOpacity, onPressIn, onPressOut };
};
