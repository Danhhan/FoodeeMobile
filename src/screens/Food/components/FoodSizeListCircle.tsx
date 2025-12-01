import { TouchableOpacity, View, ViewStyle } from 'react-native';

import { Text } from '@/components/Text';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';
import { IFoodSize } from '@/types/food';

interface IFoodSizeListCircleProps {
  sizeList: IFoodSize[];
  selectedSizeId: string;
  onSizePress: (sizeId: string) => void;
}

export const FoodSizeListCircle = ({
  sizeList,
  selectedSizeId,
  onSizePress,
}: IFoodSizeListCircleProps) => {
  const {
    themed,
    theme: { colors },
  } = useAppTheme();
  return (
    <View style={themed($container)}>
      <Text color={colors.palette.neutral500}>SIZE:</Text>
      <View style={themed($sizeList)}>
        {sizeList.map(size => (
          <TouchableOpacity
            onPress={() => onSizePress(size.id)}
            key={size.id}
            style={themed([
              $circle,
              {
                backgroundColor:
                  selectedSizeId === size.id
                    ? colors.palette.primary500
                    : colors.palette.neutral200,
              },
            ])}
          >
            <Text
              color={
                selectedSizeId === size.id
                  ? colors.palette.neutral100
                  : colors.palette.neutral900
              }
            >
              {size.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const $container: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  ...$styles.row,
  ...$styles.alignItemsCenter,
  gap: spacing.sm,
});

const $circle: ThemedStyle<ViewStyle> = () => ({
  height: 48,
  width: 48,
  borderRadius: 50,
  ...$styles.center,
});

const $sizeList: ThemedStyle<ViewStyle> = () => ({
  ...$styles.row,
  gap: 10,
});
