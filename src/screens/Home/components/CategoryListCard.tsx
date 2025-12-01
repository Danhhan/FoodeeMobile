import { Image, ImageStyle, View, ViewStyle } from 'react-native';

import { Text } from '@/components/Text';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

export const CategoryListCard = () => {
  const { themed } = useAppTheme();
  const categories = [
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
  return (
    <View style={themed($catList)}>
      {categories.map((category, index) => (
        <View key={index} style={themed($categoryItem)}>
          <Text weight="medium">{category.name}</Text>
          <Image
            style={themed($categoryImage)}
            source={category.source}
            resizeMode="cover"
          />
        </View>
      ))}
    </View>
  );
};

const $catList: ThemedStyle<ViewStyle> = () => ({
  ...$styles.row,
  ...$styles.rowCenter,
  ...$styles.rowWrap,
  gap: 12,
});

const $categoryImage: ThemedStyle<ImageStyle> = () => ({
  width: 46,
  height: 46,
  flexShrink: 0,
});

const $categoryItem: ThemedStyle<ViewStyle> = ({ colors }) => ({
  ...$styles.row,
  ...$styles.center,
  ...$styles.justifyContentBetween,
  paddingHorizontal: 8,
  width: '48%',
  backgroundColor: colors.palette.gray500,
  borderRadius: 8,
  height: 70,
});
