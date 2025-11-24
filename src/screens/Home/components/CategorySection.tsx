import {
  FlatList,
  Image,
  ImageStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import { Text } from '@/components/Text';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';
import { ICategory } from '@/types/restaurant';

import SectionHeader from './SectionHeader';

interface ICategorySectionProps {
  selectedCategoryIndex: number;
  onCategorySelect: (index: number) => void;
  categories: ICategory[];
}

const CategorySection = (props: ICategorySectionProps) => {
  const { selectedCategoryIndex, onCategorySelect, categories } = props;
  const {
    theme: { colors },
    themed,
  } = useAppTheme();

  return (
    <View style={themed(({ spacing }) => ({ marginTop: spacing.xl }))}>
      <SectionHeader title="All Categories" />
      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => onCategorySelect(index)}
            >
              <View
                style={themed([
                  $categoryItem,
                  selectedCategoryIndex === index && {
                    backgroundColor: colors.palette.primary100,
                  },
                ])}
              >
                <Image source={item.image} style={themed($categoryImage)} />
                <Text weight="bold" size="xs">
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
        horizontal
        onEndReachedThreshold={0.5}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[themed($categoryContainer)]}
      />
    </View>
  );
};

const $categoryContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  ...$styles.row,
  gap: spacing.xs,
  ...$styles.container,
  paddingBottom: spacing.lg,
  marginTop: spacing.lg - spacing.xxs,
});

const $categoryItem: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.palette.neutral100,
  minWidth: 104,
  padding: 8,
  paddingRight: 20,
  borderRadius: 50,
  ...$styles.row,
  ...$styles.rowCenter,
  ...$styles.justifyContentBetween,
  shadowColor: colors.palette.neutral900,
  shadowOffset: { width: 0, height: 10 },
  shadowOpacity: 0.08,
  shadowRadius: 10,
  elevation: 5,
});

const $categoryImage: ThemedStyle<ImageStyle> = ({ colors }) => ({
  width: 44,
  height: 44,
  borderRadius: 44,
  backgroundColor: colors.palette.neutral100,
});

export default CategorySection;
