import { View, ViewStyle } from 'react-native';

import { Text } from '@/components/Text';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';
import { IRestaurant } from '@/types/restaurant';

import { Icon } from '../Icon';

interface RestaurantMetaProps
  extends Pick<IRestaurant, 'rating' | 'deliveryFee' | 'deliveryTime'> {}

export const RestaurantMeta = (props: RestaurantMetaProps) => {
  const { rating, deliveryFee, deliveryTime } = props;
  const {
    theme: { colors },
    themed,
  } = useAppTheme();

  return (
    <View style={themed($restaurantMeta)}>
      <View style={[$styles.row, $styles.alignItemsCenter]}>
        <Icon icon="star" size={20} color={colors.palette.primary500} />
        <Text weight="bold" style={themed($metaText)}>
          {rating}
        </Text>
      </View>
      <View style={[$styles.row, $styles.alignItemsCenter]}>
        <Icon icon="car" size={20} color={colors.palette.primary500} />
        <Text weight="normal" style={themed($metaText)}>
          {deliveryFee}
        </Text>
      </View>
      <View style={[$styles.row, $styles.alignItemsCenter]}>
        <Icon icon="clock" size={20} color={colors.palette.primary500} />
        <Text weight="normal" style={themed($metaText)}>
          {deliveryTime}
        </Text>
      </View>
    </View>
  );
};

const $restaurantMeta: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  ...$styles.row,
  gap: spacing.lg + spacing.xs,
  // marginTop: spacing.md,
});

const $metaText: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginLeft: spacing.xs,
});
