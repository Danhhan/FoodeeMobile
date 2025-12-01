import { useState } from 'react';

import { RestaurantCard } from '@/components/Restaurant/RestaurantCard';
import Screen from '@/components/Screen';
import { AppStackScreenProps } from '@/navigators/navigationTypes';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';

import { CategoryList } from './components/CategoryList';
import { Header } from './components/Header';
import { Banner } from './components/Banner';

interface IHomeScreenProps extends AppStackScreenProps<'Home'> {}

const HomeScreen = ({ navigation }: IHomeScreenProps) => {
  const { themed } = useAppTheme();
  const [selectedCatId, setSelectedCatId] = useState('');

  return (
    <Screen
      safeAreaEdges={['top']}
      preset="scroll"
      ScrollViewProps={{
        showsVerticalScrollIndicator: false,
      }}
      contentContainerStyle={$styles.container}
      header={
        <Header>
          <CategoryList
            selectedCatId={selectedCatId}
            onCategorySelect={setSelectedCatId}
          />
        </Header>
      }
    >
      <RestaurantCard />
      <RestaurantCard />
      <Banner banners={[]} />
    </Screen>
  );
};

export default HomeScreen;
