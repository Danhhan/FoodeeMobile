import { View, ViewStyle, FlatList, TouchableOpacity } from 'react-native';

import { Text } from '@/components/Text';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

export interface Category {
  id: string;
  name: string;
}

interface CategoryFlatListProps {
  categories?: Category[];
  onCategoryPress: (idx: number) => void;
  selectedCatIndex: number;
}

const CategoryFlatList = ({
  categories,
  onCategoryPress,
  selectedCatIndex,
}: CategoryFlatListProps) => {
  const {
    theme: { colors },
    themed,
  } = useAppTheme();

  const renderCategoryItem = ({
    item,
    index,
  }: {
    item: Category;
    index: number;
  }) => {
    const isSelected = index === selectedCatIndex;

    return (
      <TouchableOpacity
        style={themed([$categoryItem, isSelected && $itemActive])}
        onPress={() => onCategoryPress(index)}
      >
        <Text
          color={
            isSelected ? colors.palette.neutral100 : colors.palette.neutral900
          }
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={themed($container)}>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={$flatListContent}
      />
    </View>
  );
};

const $container: ThemedStyle<ViewStyle> = () => ({
  marginTop: 32,
});

const $flatListContent = {
  gap: 10,
};

const $categoryItem: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.palette.neutral100,
  paddingHorizontal: 20,
  borderRadius: 50,
  minHeight: 46,
  borderWidth: 1,
  borderColor: colors.palette.neutral300,
  ...$styles.center,
});

const $itemActive: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.palette.primary500,
  borderColor: colors.palette.primary500,
});

export default CategoryFlatList;
