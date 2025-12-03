import {
  FlatList,
  Image,
  ImageBackground,
  ImageStyle,
  View,
  ViewStyle,
} from 'react-native';

import { Text } from '@/components/Text';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

const RestaurantCard = () => {
  const {
    theme: { colors },
    themed,
  } = useAppTheme();
  return (
    <View style={themed($restaurantCard)}>
      <Image
        style={themed($restaurantImage)}
        source={{
          uri: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
        }}
      />
      <View>
        <Text weight="bold" size="lg">
          Island takeaway
        </Text>
        <Text size="xs" color={colors.palette.black300}>
          10 - 20 min
        </Text>
        <Text size="xs" color={colors.palette.black300}>
          0.1 Mil
        </Text>
      </View>
    </View>
  );
};

export const FreePickSection = () => {
  const {
    theme: { colors },
    themed,
  } = useAppTheme();
  return (
    <View>
      <Text weight="bold" size="xl">
        Pick it up for free
      </Text>
      <Text size="xs" color={colors.palette.black300}>
        Skip the fees when you order pick-up
      </Text>
      <View style={themed($freePickContainer)}>
        <ImageBackground
          style={themed($freePickImage)}
          source={require('@/assets/images/free-pick-bg.png')}
        >
          <FlatList
            // keyExtractor={item => item.id}
            data={Array.from({ length: 3 })}
            renderItem={() => {
              return <RestaurantCard />;
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </ImageBackground>
      </View>
    </View>
  );
};

const $freePickContainer: ThemedStyle<ViewStyle> = ({ spacing, colors }) => ({
  marginHorizontal: -spacing.md,
  marginTop: 6,
  backgroundColor: colors.palette.white100,
  paddingVertical: 2,
});

const $freePickImage: ThemedStyle<ImageStyle> = () => ({
  height: 209,
  width: '100%',
});

const $restaurantCard: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
  ...$styles.row,
  gap: 10,
  backgroundColor: colors.palette.white100,
  marginHorizontal: spacing.md,
  padding: spacing.xxs,
  paddingRight: 40,
  height: 96,
});

const $restaurantImage: ThemedStyle<ImageStyle> = () => ({
  height: '100%',
  width: 96,
});
