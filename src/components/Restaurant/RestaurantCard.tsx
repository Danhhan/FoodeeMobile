import { Image, ImageStyle, Pressable, View, ViewStyle } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

import { Icon, PressableIcon } from '../Icon';
import { Text } from '../Text';

interface RestaurantCardProps {
  isFavorite?: boolean;
  onPressFavorite?: (id: number) => void;
}

export const RestaurantCard = ({ isFavorite = false }: RestaurantCardProps) => {
  const overlayOpacity = useSharedValue(0);
  const {
    theme: { colors },
    themed,
  } = useAppTheme();

  const $overlayAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: overlayOpacity.value,
    };
  });

  const onPressIn = () => {
    overlayOpacity.value = withTiming(0.3, { duration: 150 });
  };

  const onPressOut = () => {
    overlayOpacity.value = withTiming(0, { duration: 150 });
  };

  return (
    <Pressable
      style={themed($container)}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <View style={themed($imageContainer)}>
        <Image
          style={themed($image)}
          source={require('@/assets/images/restaurant-1.png')}
        />
        <Animated.View style={[themed($overlay), $overlayAnimatedStyle]} />
      </View>
      <View style={themed($contentHeader)}>
        <Text weight="bold">Adenine Kitchen</Text>
        <PressableIcon
          onPress={e => {
            e.stopPropagation();
          }}
          size={24}
          icon={isFavorite ? 'heart-fill' : 'heart-line'}
          color={isFavorite ? colors.palette.angry900 : colors.palette.black200}
        />
      </View>
      <Text size="xs" color={colors.palette.black200}>
        $0.49 Delivery Fee | 20-30 min
      </Text>
      <View style={$styles.rowHCenter}>
        <Text>4.5</Text>
        <Icon icon="rating-filled" size={12} />
        <Text color={colors.palette.black200}>(1000+)</Text>
      </View>
    </Pressable>
  );
};

const $container: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginVertical: spacing.md,
});

const $imageContainer: ThemedStyle<ViewStyle> = () => ({
  position: 'relative',
  borderRadius: 20,
  overflow: 'hidden',
});

const $image: ThemedStyle<ImageStyle> = () => ({
  height: 154,
  width: '100%',
});

const $overlay: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.palette.black500,
  position: 'absolute',
  bottom: 0,
  top: 0,
  left: 0,
  right: 0,
});

const $contentHeader: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  ...$styles.row,
  ...$styles.scrollSpaceBetween,
  marginTop: spacing.xs,
});
