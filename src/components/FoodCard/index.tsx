import { Image, ImageStyle, Pressable, View, ViewStyle } from 'react-native';

import { PressableIcon } from '@/components/Icon';
import { Text } from '@/components/Text';
import { navigate } from '@/navigators/navigationUtilities';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';
import { IFood } from '@/types/restaurant';

interface IFoodCardProps {
  food: IFood;
}

const FoodCard = ({ food }: IFoodCardProps) => {
  const { name, description, price } = food;
  const {
    theme: { colors },
    themed,
  } = useAppTheme();

  return (
    <Pressable
      onPress={() => {
        navigate('Food', { foodId: food.id });
      }}
      style={themed($container)}
    >
      <Image
        source={require('@/assets/images/food-1.png')}
        style={themed($image)}
        resizeMode="cover"
      />

      <View style={themed($contentCard)}>
        <Text numberOfLines={1} weight="bold">
          {name}
        </Text>
        <Text numberOfLines={2} size="xs" color={colors.palette.neutral500}>
          {description}
        </Text>
        <View style={[$styles.row, $styles.justifyContentBetween]}>
          <Text weight="bold">${price}</Text>
          <PressableIcon
            containerStyle={themed($addButton)}
            color={colors.palette.neutral100}
            icon="plus"
            size={12}
          />
        </View>
      </View>
    </Pressable>
  );
};

const $container: ThemedStyle<ViewStyle> = () => ({
  ...$styles.fill,
  position: 'relative',
  height: 174,
});

const $image: ThemedStyle<ImageStyle> = () => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: -45,
  left: 0,
  zIndex: 2,
});

const $contentCard: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.palette.neutral100,
  paddingHorizontal: 12,
  paddingVertical: 10,
  paddingTop: 50,
  position: 'absolute',
  bottom: -20,
  left: 0,
  right: 0,
  zIndex: 1,
  borderTopLeftRadius: 40,
  borderTopRightRadius: 40,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: -3 },
  shadowOpacity: 0.09,
  shadowRadius: 8,
  elevation: 8,
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
});

const $addButton: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.palette.primary500,
  width: 30,
  height: 30,
  borderRadius: 50,
  ...$styles.center,
});

export default FoodCard;
