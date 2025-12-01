import { View, ViewStyle } from 'react-native';

import { Icon } from '@/components/Icon';
import { Text } from '@/components/Text';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';
import { IFoodIngredient } from '@/types/food';

interface IIngredientListCircleProps {
  ingredientList: IFoodIngredient[];
}

const IngredientListCircle: React.FC<IIngredientListCircleProps> = ({
  ingredientList,
}) => {
  const {
    theme: { colors },
    themed,
  } = useAppTheme();
  return (
    <View style={themed($container)}>
      <Text size="sm" color={colors.palette.neutral800}>
        INGREDIENTS
      </Text>
      <View style={themed($ingredientList)}>
        {ingredientList.map(ingredient => (
          <View key={ingredient.id} style={themed($ingredientItem)}>
            <View style={themed($circle)}>
              <Icon icon="salt" size={24} color={colors.palette.primary500} />
            </View>
            <Text color={colors.palette.neutral700}>{ingredient.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const $container: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginTop: spacing.lg,
});

const $ingredientList: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  ...$styles.row,
  ...$styles.rowWrap,
  marginLeft: '-4%',
  marginTop: spacing.lg,
});

const $circle: ThemedStyle<ViewStyle> = ({ colors }) => ({
  width: 50,
  height: 50,
  backgroundColor: colors.palette.primary100,
  borderRadius: 50,
  ...$styles.center,
});

const $ingredientItem: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  width: '20%',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: spacing.md,
});

export default IngredientListCircle;
