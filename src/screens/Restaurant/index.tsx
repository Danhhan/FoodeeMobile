import { useState } from 'react';
import { FlatList, Image, ImageStyle, View, ViewStyle } from 'react-native';

import FoodCard from '@/components/FoodCard';
import { RestaurantMeta } from '@/components/RestaurantMeta';
import Screen from '@/components/Screen';
import { Text } from '@/components/Text';
import { categories } from '@/mockData/home';
import { mockFoodItems } from '@/mockData/restaurant';
import { AppStackScreenProps } from '@/navigators/navigationTypes';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

import CategoryFlatList from './components/CategoryFlatList';
import Header from './components/Header';

interface IRestaurantDetailScreenProps
  extends AppStackScreenProps<'Restaurant'> {}

const RestaurantDetailScreen = ({
  navigation,
}: IRestaurantDetailScreenProps) => {
  const {
    theme: { colors },
    themed,
  } = useAppTheme();
  const [selectedCatIndex, setSelectedCatIndex] = useState(0);

  return (
    <Screen safeAreaEdges={['top']}>
      <Header onPress={() => navigation.goBack()} />
      <FlatList
        ListHeaderComponent={
          <>
            <Image
              style={themed($restaurantImage)}
              source={require('@/assets/images/restaurant-1.jpg')}
            />
            <Text weight="bold" size="lg">
              {RESTAURANT_DATA.name}
            </Text>
            <Text color={colors.palette.neutral500} size="xs">
              {RESTAURANT_DATA.description}
            </Text>
            <RestaurantMeta
              rating={RESTAURANT_DATA.rating}
              deliveryFee={RESTAURANT_DATA.deliveryFee}
              deliveryTime={RESTAURANT_DATA.deliveryTime}
            />
            <CategoryFlatList
              categories={categories}
              selectedCatIndex={selectedCatIndex}
              onCategoryPress={setSelectedCatIndex}
            />
            <Text
              style={themed($sectionTitle)}
              color={colors.palette.neutral800}
              size="lg"
            >
              All ({RESTAURANT_DATA.foodCount})
            </Text>
          </>
        }
        data={mockFoodItems}
        numColumns={2}
        renderItem={({ item }) => <FoodCard food={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={themed($foodGrid)}
        columnWrapperStyle={themed($columnWrapper)}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      />
    </Screen>
  );
};

// Constants
const RESTAURANT_DATA = {
  name: 'Spicy restaurant',
  description:
    'Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
  rating: 4.5,
  deliveryFee: 'Free',
  deliveryTime: '20 min',
  foodCount: 10,
};

// Styles
const $restaurantImage: ThemedStyle<ImageStyle> = () => ({
  width: '100%',
  height: 150,
  borderRadius: 20,
  marginVertical: 20,
});

const $sectionTitle: ThemedStyle<ViewStyle> = () => ({
  marginTop: 32,
  marginBottom: 20,
});

const $foodGrid: ThemedStyle<ViewStyle> = () => ({
  ...$styles.container,
  paddingBottom: 20,
});

const $columnWrapper: ThemedStyle<ViewStyle> = () => ({
  gap: 10,
  marginVertical: 18,
});

export default RestaurantDetailScreen;
