import { Image, ImageStyle, Pressable, View, ViewStyle } from 'react-native';

import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';
import { IRestaurant } from '@/types/restaurant';

import { FeedbackOverlay } from '../FeedbackOverlay';
import { useAnimatedOverlay } from '../FeedbackOverlay/useAnimatedOverlay';
import { Icon, PressableIcon } from '../Icon';
import { Text } from '../Text';

interface RestaurantCardProps {
  restaurant?: IRestaurant;
  isFavorite?: boolean;
  onPressFavorite?: (id: string) => void;
  style?: ViewStyle;
}

export const RestaurantCard = ({
  restaurant,
  isFavorite = false,
  style,
}: RestaurantCardProps) => {
  const {
    themed,
    theme: { colors },
  } = useAppTheme();

  const { onPressIn, onPressOut, overlayOpacity } = useAnimatedOverlay();

  return (
    <Pressable
      style={[themed($container), style]}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <View style={themed($imageContainer)}>
        <Image
          style={themed($image)}
          source={
            restaurant?.image || require('@/assets/images/restaurant-1.png')
          }
        />
        <FeedbackOverlay overlayOpacity={overlayOpacity} />
      </View>
      <View style={themed($contentHeader)}>
        <Text weight="bold">{restaurant?.name || 'Adenine Kitchen'}</Text>
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
        {restaurant?.categories || 'Italian • Pizza • Pasta'}
      </Text>
      <Text size="xs" color={colors.palette.black200}>
        {restaurant?.deliveryFee === 'free' ? 'Free' : restaurant?.deliveryFee}{' '}
        Delivery Fee | {restaurant?.deliveryTime || '20-30 min'}
      </Text>
      <View style={$styles.rowHCenter}>
        <Text>{restaurant?.rating || 4.5}</Text>
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
  borderRadius: 10,
  overflow: 'hidden',
});

const $image: ThemedStyle<ImageStyle> = () => ({
  height: 154,
  width: '100%',
});

const $contentHeader: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  ...$styles.row,
  ...$styles.scrollSpaceBetween,
  marginTop: spacing.xs,
});
