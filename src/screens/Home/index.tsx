import { useState } from 'react';

import { BottomSheetScreen } from '@/components/BottomSheet/BottomSheetScreen';
import Screen from '@/components/Screen';
import { StoreCard } from '@/components/Store/StoreCard';
import { mockBanners } from '@/mockData/home';
import { mockRestaurants } from '@/mockData/restaurant';
import { $styles } from '@/theme/styles';

import { BannerList } from './components/BannerList';
import { BottomSheet } from './components/BottomSheet';
import { CategoryListBadge } from './components/CategoryListBadge';
import { CategoryListCard } from './components/CategoryListCard';
import { FreePickSection } from './components/FreePickSection';
import { GroceryWidget } from './components/GroceryWidget';
import { Header } from './components/Header';
import { StoreWidget } from './components/StoreWidget';

interface IHomeScreenProps {}

const HomeScreen = ({}: IHomeScreenProps) => {
  const [selectedCatId, setSelectedCatId] = useState('');

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
              <StoreCard key={index} store={restaurant} />
            ))}
            <BannerList banners={mockBanners} />
            {restaurants2.map((restaurant, index) => (
              <StoreCard key={index} store={restaurant} />
            ))}
            <StoreWidget listData={popularList} title="Popular near you" />
            {restaurants4.map((restaurant, index) => (
              <StoreCard key={index} store={restaurant} />
            ))}
            <CategoryListCard />
            <StoreCard store={mockRestaurants.slice(14, 15)[0]} />
            <StoreWidget listData={offers} title="Today offers" />
            {afterOffers.map((restaurant, index) => (
              <StoreCard key={index} store={restaurant} />
            ))}
            <StoreWidget listData={quickEats} title="Quick Eats" />
            {afterQuickEats.map((restaurant, index) => (
              <StoreCard key={index} store={restaurant} />
            ))}
            <StoreWidget listData={rewards} title="Rewards for you" />
            {afterRewards.map((restaurant, index) => (
              <StoreCard key={index} store={restaurant} />
            ))}
            <GroceryWidget title="Fresh grocery" />
            <GroceryWidget title="Sweet treats" />
            <StoreCard store={mockRestaurants.slice(14, 15)[0]} />
            <FreePickSection />
            {afterQuickEats.map((restaurant, index) => (
              <StoreCard key={index} store={restaurant} isClosed />
            ))}
          </Screen>
          <BottomSheet bottomSheetConfig={bottomSheetConfig} />
        </>
      )}
    </BottomSheetScreen>
  );
};

export default HomeScreen;
