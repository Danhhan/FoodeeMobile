import { useMemo, useState } from 'react';
import { Dimensions, View } from 'react-native';

import { BottomSheet } from '@/components/BottomSheet';
import { BottomSheetScreen } from '@/components/BottomSheet/BottomSheetScreen';
import { HeaderWithBackButton } from '@/components/Header';
import { RestaurantCard } from '@/components/Restaurant/RestaurantCard';
import Screen from '@/components/Screen';
import { mockRestaurants } from '@/mockData/restaurant';
import { $styles } from '@/theme/styles';

import { CategoryListBadge } from './components/CategoryListBadge';
import { CategoryListCard } from './components/CategoryListCard';
import { GroceryWidget } from './components/GroceryWidget';
import { Header } from './components/Header';
import { RestaurantWidget } from './components/RestaurantWidget';

interface IHomeScreenProps {}

const HomeScreen = ({}: IHomeScreenProps) => {
  const [selectedCatId, setSelectedCatId] = useState('');
  const { height } = Dimensions.get('window');

  const snapPoints = useMemo(() => [height * 0.93], [height]);

  const restaurants1 = mockRestaurants.slice(0, 2);
  const restaurants2 = mockRestaurants.slice(2, 4);
  const popularList = mockRestaurants.slice(4, 6);
  const restaurants4 = mockRestaurants.slice(10, 14);
  const offers = mockRestaurants.slice(0, 2);
  const afterOffers = mockRestaurants.slice(2, 5);
  const quickEats = mockRestaurants.splice(5, 7);
  const afterQuickEats = mockRestaurants.slice(0, 4);
  const rewards = mockRestaurants.slice(0, 2);
  const afterRewards = mockRestaurants.slice(2, 4);

  return (
    <BottomSheetScreen>
      {bottomSheetConfig => (
        <>
          <Screen
            safeAreaEdges={['top']}
            preset="scroll"
            ScrollViewProps={{
              showsVerticalScrollIndicator: false,
            }}
            contentContainerStyle={$styles.container}
            header={
              <Header onPressAddress={() => bottomSheetConfig.open()}>
                <CategoryListBadge
                  selectedCatId={selectedCatId}
                  onCategorySelect={setSelectedCatId}
                />
              </Header>
            }
          >
            {restaurants1.map((restaurant, index) => (
              <RestaurantCard key={index} restaurant={restaurant} />
            ))}
            {restaurants2.map((restaurant, index) => (
              <RestaurantCard key={index} restaurant={restaurant} />
            ))}
            <RestaurantWidget listData={popularList} title="Popular near you" />
            {restaurants4.map((restaurant, index) => (
              <RestaurantCard key={index} restaurant={restaurant} />
            ))}
            <CategoryListCard />
            <RestaurantCard restaurant={mockRestaurants.slice(14, 15)[0]} />
            <RestaurantWidget listData={offers} title="Today offers" />
            {afterOffers.map((restaurant, index) => (
              <RestaurantCard key={index} restaurant={restaurant} />
            ))}
            <RestaurantWidget listData={quickEats} title="Quick Eats" />
            {afterQuickEats.map((restaurant, index) => (
              <RestaurantCard key={index} restaurant={restaurant} />
            ))}
            <RestaurantWidget listData={rewards} title="Rewards for you" />
            {afterRewards.map((restaurant, index) => (
              <RestaurantCard key={index} restaurant={restaurant} />
            ))}
            <GroceryWidget title="Fresh grocery" />
            <GroceryWidget title="Sweet treats" />
            <RestaurantCard restaurant={mockRestaurants.slice(14, 15)[0]} />
          </Screen>
          <BottomSheet
            ref={bottomSheetConfig.ref}
            snapPoints={snapPoints}
            animatedIndex={bottomSheetConfig.animatedIndex}
          >
            <View style={$styles.container}>
              <HeaderWithBackButton
                icon="close"
                onPress={bottomSheetConfig.close}
              />
            </View>
          </BottomSheet>
        </>
      )}
    </BottomSheetScreen>
  );
};

export default HomeScreen;
