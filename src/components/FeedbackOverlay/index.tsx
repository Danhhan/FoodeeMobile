import { ViewStyle } from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { useAppTheme } from '@/theme/context';
import { ThemedStyle } from '@/theme/types';

interface FeedbackOverlayProps {
  style?: ViewStyle | ViewStyle[];
  overlayOpacity: SharedValue<number>;
}

export const FeedbackOverlay = ({
  style,
  overlayOpacity,
}: FeedbackOverlayProps) => {
  const { themed } = useAppTheme();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: overlayOpacity.value,
    };
  });

  return <Animated.View style={[themed($overlay), animatedStyle, style]} />;
};

const $overlay: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.palette.black500,
  position: 'absolute',
  bottom: 0,
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1,
});
