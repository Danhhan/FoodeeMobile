import { useRef, useState } from 'react';
import { Animated, ImageBackground, View, ViewStyle } from 'react-native';

import FoodCard from '@/components/FoodCard';
import { GrowableBanner } from '@/components/GrowableBanner';
import StickyHeader from '@/components/Header/StickyHeader';
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

const FoodItemSeparator = () => {
  const { themed } = useAppTheme();
  return <View style={themed($foodItemSeparator)} />;
};

const RESTAURANT_DATA = {
  name: 'Spicy restaurant',
  description:
    'Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
  rating: 4.5,
  deliveryFee: 'Free',
  deliveryTime: '20 min',
  foodCount: 10,
};

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
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <Screen>
      <StickyHeader
        icon="back"
        onPressGoBack={() => navigation.goBack()}
        scrollY={scrollY}
        title={RESTAURANT_DATA.name}
      />

      <Animated.FlatList
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
        ListHeaderComponent={
          <>
            <View style={themed($growableBannerContainer)}>
              <GrowableBanner scrollY={scrollY}>
                <ImageBackground
                  style={themed($headerImage)}
                  source={require('@/assets/images/restaurant-1.jpg')}
                >
                  <View style={themed($imageOverlay)} />
                </ImageBackground>
              </GrowableBanner>
            </View>

            <View style={themed($restaurantInfo)}>
              <RestaurantMeta
                rating={RESTAURANT_DATA.rating}
                deliveryFee={RESTAURANT_DATA.deliveryFee}
                deliveryTime={RESTAURANT_DATA.deliveryTime}
              />
              <Text weight="bold" size="lg" style={themed($restaurantName)}>
                {RESTAURANT_DATA.name}
              </Text>
              <Text color={colors.palette.neutral500} size="xs">
                {RESTAURANT_DATA.description}
              </Text>
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
            </View>
          </>
        }
        data={mockFoodItems}
        numColumns={2}
        renderItem={({ item }) => <FoodCard food={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={themed($foodGrid)}
        columnWrapperStyle={themed($columnWrapper)}
        ItemSeparatorComponent={FoodItemSeparator}
      />
    </Screen>
  );
};

const $growableBannerContainer: ThemedStyle<ViewStyle> = () => ({
  height: 320,
});

const $restaurantInfo: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  ...$styles.container,
  marginTop: spacing.lg + spacing.xxxs,
});

const $restaurantName: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginTop: spacing.md,
});

const $foodItemSeparator: ThemedStyle<ViewStyle> = () => ({
  height: 30,
});

const $headerImage: ThemedStyle<ViewStyle> = () => ({
  overflow: 'hidden',
  borderRadius: 25,
  height: '100%',
});

const $sectionTitle: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginTop: spacing.xl,
  marginBottom: spacing.lg,
});

const $foodGrid: ThemedStyle<ViewStyle> = () => ({
  paddingBottom: 40,
});

const $columnWrapper: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  gap: spacing.lg,
  marginVertical: 18,
  paddingHorizontal: spacing.md,
});

const $imageOverlay: ThemedStyle<ViewStyle> = ({ colors }) => ({
  ...$styles.fullSize,
  backgroundColor: colors.palette.neutral900,
  opacity: 0.3,
});

export default RestaurantDetailScreen;
