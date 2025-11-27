import { useState } from 'react';
import { FlatList, View, ViewStyle } from 'react-native';

import { Header } from '@/components/Header';
import Screen from '@/components/Screen';
import { Text } from '@/components/Text';
import { TextField } from '@/components/TextField';
import { categories, restaurants } from '@/mockData/home';
import { AppStackScreenProps } from '@/navigators/navigationTypes';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

import CategorySection from './components/CategorySection';
import RestaurantCardItem from './components/RestaurantCardItem';
import SectionHeader from './components/SectionHeader';

interface IHomeScreenProps extends AppStackScreenProps<'Home'> {}

const HomeScreen = ({ navigation }: IHomeScreenProps) => {
  const {
    theme: { colors },
    themed,
  } = useAppTheme();
  const [selectedCatIndex, setSelectedCatIndex] = useState(0);
  return (
    <Screen safeAreaEdges={['top']}>
      <Header />
      <FlatList
        ListHeaderComponent={
          <>
            <View style={$styles.container}>
              <Text>
                <Text color={colors.palette.neutral800}>Hey Halal, </Text>
                <Text weight="bold">Good Morning!</Text>
              </Text>
              <TextField
                containerStyle={themed($searchField)}
                placeholder="Search dishes, restaurants"
              />
            </View>
            <CategorySection
              selectedCategoryIndex={selectedCatIndex}
              onCategorySelect={setSelectedCatIndex}
              categories={categories}
            />
            <SectionHeader title="Open restaurants" />
          </>
        }
        data={restaurants}
        renderItem={({ item }) => (
          <RestaurantCardItem
            onPress={() =>
              navigation.navigate('Restaurant', { restaurantId: item.id })
            }
            item={item}
          />
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
};

const $searchField: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginTop: spacing.md,
});

export default HomeScreen;
