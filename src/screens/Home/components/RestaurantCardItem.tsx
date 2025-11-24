import {
  Image,
  ImageStyle,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';

import { RestaurantMeta } from '@/components/RestaurantMeta';
import { Text } from '@/components/Text';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';
import { IRestaurant } from '@/types/restaurant';

interface IRestaurantCardItemProps {
  item: IRestaurant;
  onPress: () => void;
}

const RestaurantCardItem = ({ item, onPress }: IRestaurantCardItemProps) => {
  const {
    themed,
    theme: { colors },
  } = useAppTheme();

  const { name, categories, rating, deliveryFee, deliveryTime } = item;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={themed($restaurantCard)}>
        <Image
          source={require('@/assets/images/restaurant-1.jpg')}
          style={$restaurantImage}
        />
        <View style={themed($restaurantInfo)}>
          <Text weight="normal" size="lg" color={colors.palette.neutral900}>
            {name}
          </Text>
          <Text size="xs" color={colors.palette.neutral500}>
            {categories}
          </Text>
          <RestaurantMeta
            rating={rating}
            deliveryFee={deliveryFee}
            deliveryTime={deliveryTime}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const $restaurantCard: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  flex: 1,
  marginBottom: spacing.md,
  ...$styles.container,
  marginTop: spacing.lg - spacing.xxs,
});

const $restaurantImage: ImageStyle = {
  width: '100%',
  height: 137,
  borderRadius: 12,
};

const $restaurantInfo: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginTop: spacing.md,
});

export default RestaurantCardItem;
