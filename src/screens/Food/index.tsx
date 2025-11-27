import { useRef } from 'react';
import { Animated, Image, ImageStyle, View, ViewStyle } from 'react-native';

import StickyHeader from '@/components/Header/StickyHeader';
import { RestaurantMeta } from '@/components/RestaurantMeta';
import Screen from '@/components/Screen';
import { Text } from '@/components/Text';
import { AppStackScreenProps } from '@/navigators/navigationTypes';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';
import { useSafeAreaInsetsStyle } from '@/utils/useSafeAreaInsetsStyle';

import { GrowableBanner } from './components/GrowableBanner';

const RESTAURANT_DATA = {
  name: 'Spicy restaurant',
  description:
    'Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
  rating: 4.5,
  deliveryFee: 'Free',
  deliveryTime: '20 min',
  foodCount: 10,
};

interface IFoodDetailScreenProps extends AppStackScreenProps<'Food'> {}

const FoodDetailScreen = ({ navigation }: IFoodDetailScreenProps) => {
  const {
    theme: { colors, spacing },
    themed,
  } = useAppTheme();
  const scrollY = useRef(new Animated.Value(0)).current;
  const $containerInsets = useSafeAreaInsetsStyle(['top']);
  return (
    <Screen>
      <StickyHeader
        icon="close"
        onPressGoBack={() => navigation.goBack()}
        scrollY={scrollY}
        title={RESTAURANT_DATA.name}
      />
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
      >
        <View style={themed($growableBannerContainer)}>
          <GrowableBanner scrollY={scrollY}>
            <View style={themed($headerImage)}>
              <Image
                source={require('@/assets/images/food-1.png')}
                style={themed([
                  $foodImage,
                  { top: $containerInsets.paddingTop },
                ])}
                resizeMode="cover"
              />
            </View>
          </GrowableBanner>
        </View>

        <View style={themed($foodInfo)}>
          <Text weight="bold" size="lg">
            {RESTAURANT_DATA.name}
          </Text>
          <View style={[$styles.row, { marginBottom: 22, marginTop: 10 }]}>
            <Image
              source={require('@/assets/images/restaurant-logo.png')}
              style={{ height: 22, width: 22, marginRight: spacing.xs }}
            />
            <Text size="xs">Spicy restaurant</Text>
          </View>
          <RestaurantMeta
            rating={RESTAURANT_DATA.rating}
            deliveryFee={RESTAURANT_DATA.deliveryFee}
            deliveryTime={RESTAURANT_DATA.deliveryTime}
          />
          <Text
            style={{ marginVertical: 20 }}
            color={colors.palette.neutral500}
            size="xs"
          >
            {RESTAURANT_DATA.description}
          </Text>
          <View>
            <Text>Size:</Text>
            <View
              style={{
                height: 48,
                width: 48,
                backgroundColor: colors.palette.neutral200,
                borderRadius: 50,
                ...$styles.center,
              }}
            >
              <Text>10 &quot;</Text>
            </View>
          </View>
        </View>
      </Animated.ScrollView>
    </Screen>
  );
};

const $growableBannerContainer: ThemedStyle<ViewStyle> = () => ({
  height: 320,
});

const $foodInfo: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  ...$styles.container,
  marginTop: spacing.lg,
});

const $headerImage: ThemedStyle<ViewStyle> = ({ colors }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  backgroundColor: colors.palette.primary300,
  borderRadius: 20,
  overflow: 'hidden',
});

const $foodImage: ThemedStyle<ImageStyle> = () => ({
  width: '80%',
  height: '100%',
  position: 'absolute',
});

export default FoodDetailScreen;
