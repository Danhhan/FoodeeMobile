import { useRef } from 'react';
import { FlatList, Image, TouchableWithoutFeedback, View } from 'react-native';
import { ImageStyle, ViewStyle } from 'react-native';

import { Text } from '@/components/Text';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

interface ICategoryListBadgeProps {
  selectedCatId: string;
  onCategorySelect: (id: string) => void;
}

export const CategoryListBadge = (props: ICategoryListBadgeProps) => {
  const { selectedCatId, onCategorySelect } = props;
  const { themed } = useAppTheme();

  const categories = [
    {
      id: '1',
      name: 'All',
      source: require('@/assets/images/bag.png'),
    },
    {
      id: '2',
      name: 'Convenience',
      source: require('@/assets/images/category/convenience.png'),
    },
    {
      id: '3',
      name: 'American',
      source: require('@/assets/images/category/american.png'),
    },
    {
      id: '4',
      name: 'Grocery',
      source: require('@/assets/images/category/grocery.png'),
    },
    {
      id: '5',
      name: 'Indian',
      source: require('@/assets/images/american.png'),
    },
    {
      id: '6',
      name: 'Chinese',
      source: require('@/assets/images/american.png'),
    },
    {
      id: '7',
      name: 'Japanese',
      source: require('@/assets/images/american.png'),
    },
    {
      id: '8',
      name: 'Thai',
      source: require('@/assets/images/american.png'),
    },
    {
      id: '9',
      name: 'French',
      source: require('@/assets/images/american.png'),
    },
    {
      id: '10',
      name: 'Greek',
      source: require('@/assets/images/american.png'),
    },
  ];

  const flatListRef = useRef<FlatList>(null);
  const onPress = (id: string, index: number) => {
    onCategorySelect(id);
    if (index === 0) {
      return;
    }
    flatListRef.current?.scrollToIndex({
      index: index,
      animated: true,
      viewPosition: 0.5,
    });
  };
  return (
    <View style={themed($container)}>
      <FlatList
        ref={flatListRef}
        data={categories}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => {
          const isActive = selectedCatId === item.id;
          return (
            <TouchableWithoutFeedback
              key={item.id}
              onPress={() => onPress(item.id, index)}
            >
              <View
                style={themed([$categoryItem, isActive && $categoryItemActive])}
              >
                <Image
                  style={themed($categoryImage)}
                  source={item.source}
                  resizeMode="cover"
                />
                <Text size="xs" weight="bold">
                  {item.name}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
        horizontal
        onEndReachedThreshold={0.5}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={themed($flatListContent)}
      />
    </View>
  );
};

const $container: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  paddingVertical: spacing.md,
  ...$styles.container,
});

const $categoryItem: ThemedStyle<ViewStyle> = ({ colors }) => ({
  ...$styles.row,
  ...$styles.rowCenter,
  borderWidth: 1,
  borderColor: colors.palette.black50,
  borderRadius: 30,
  padding: 4,
  paddingHorizontal: 8,
  gap: 4,
});

const $categoryItemActive: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.palette.black50,
});

const $categoryImage: ThemedStyle<ImageStyle> = () => ({
  width: 30,
  height: 30,
  flexShrink: 0,
});

const $flatListContent: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  gap: spacing.xs,
});
