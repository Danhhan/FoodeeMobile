import { useState } from 'react';
import { Image, Pressable, View } from 'react-native';

import { RestaurantMeta } from '@/components/RestaurantMeta';
import Screen from '@/components/Screen';
import { Text } from '@/components/Text';
import { categories } from '@/mockData/home';
import { AppStackScreenProps } from '@/navigators/navigationTypes';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';

import CategoryFlatList from './components/CategoryFlatList';
import Header from './components/Header';

interface IRestaurantDetailScreenProps
  extends AppStackScreenProps<'Restaurant'> {}

const RestaurantDetailScreen = ({
  navigation,
}: IRestaurantDetailScreenProps) => {
  const {
    theme: { colors },
  } = useAppTheme();
  const [selectedCatIndex, setSelectedCatIndex] = useState(0);

  return (
    <Screen safeAreaEdges={['top']}>
      <View style={$styles.container}>
        <Header onPress={() => navigation.goBack()} />
        <Image
          style={{
            width: '100%',
            height: 150,
            borderRadius: 20,
            marginVertical: 20,
          }}
          source={require('@/assets/images/restaurant-1.jpg')}
        />
        <Text weight="bold" size="lg">
          Spicy restaurant
        </Text>
        <Text color={colors.palette.neutral500} size="xs">
          Maecenas sed diam eget risus varius blandit sit amet non magna.
          Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
        </Text>
        <RestaurantMeta rating={4.5} deliveryFee="Free" deliveryTime="20 min" />
        <CategoryFlatList
          categories={categories}
          selectedCatIndex={selectedCatIndex}
          onCategoryPress={setSelectedCatIndex}
        />
        <Text style={{ marginTop: 32 }} size="lg">
          All (10)
        </Text>
        <View
          style={[$styles.row, $styles.rowWrap, { marginTop: 18, gap: 10 }]}
        >
          <View style={{ flex: 1, backgroundColor: 'red', padding: 12 }}>
            <Image
              source={require('@/assets/images/food-1.png')}
              style={{ width: '100%', height: 79 }}
              resizeMode="cover"
            />
            <View>
              <Text weight="bold">Burger Ferguson</Text>
              <Text size="xs" color={colors.palette.neutral500}>
                Spicy restaurant
              </Text>
              <View>
                <Text weight="bold">$12.99</Text>
                <Pressable>
                  <Text color={colors.palette.neutral100} size="xl">
                    +
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={{ flex: 1, backgroundColor: 'green', padding: 12 }}>
            <Image
              source={require('@/assets/images/food-1.png')}
              style={{ width: '100%%', height: 79 }}
              resizeMode="cover"
            />
            <View>
              <Text weight="bold">Burger Ferguson</Text>
              <Text size="xs" color={colors.palette.neutral500}>
                Spicy restaurant
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default RestaurantDetailScreen;
