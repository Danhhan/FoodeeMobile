import { Image, View } from 'react-native';

import { RestaurantMeta } from '@/components/RestaurantMeta';
import Screen from '@/components/Screen';
import { Text } from '@/components/Text';
import { AppStackScreenProps } from '@/navigators/navigationTypes';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';

import Header from './components/Header';

interface IRestaurantDetailScreenProps
  extends AppStackScreenProps<'Restaurant'> {}

const RestaurantDetailScreen = ({
  navigation,
}: IRestaurantDetailScreenProps) => {
  const {
    theme: { colors },
  } = useAppTheme();

  return (
    <Screen safeAreaEdges={['top']}>
      <View style={$styles.container}>
        <Header onPress={() => navigation.goBack()} />
        <Image
          style={{
            width: '100%',
            height: 150,
            borderRadius: 20,
            marginVertical: 24,
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
      </View>
    </Screen>
  );
};

export default RestaurantDetailScreen;
