import {
  Dimensions,
  FlatList,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import { RestaurantCard } from '@/components/Restaurant/RestaurantCard';
import { Text } from '@/components/Text';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';
import { IRestaurant } from '@/types/restaurant';

interface RestaurantWidgetProps {
  title: string;
  listData: IRestaurant[];
}
export const RestaurantWidget = (props: RestaurantWidgetProps) => {
  const { title, listData } = props;
  const { themed } = useAppTheme();

  const $itemContainer: ThemedStyle<ViewStyle> = () => {
    const screenWidth = Dimensions.get('window').width;
    return {
      width: screenWidth * 0.75,
    };
  };
  return (
    <View>
      <View
        style={[
          $styles.row,
          $styles.justifyContentBetween,
          $styles.alignItemsCenter,
        ]}
      >
        <Text weight="bold" size="xl">
          {title}
        </Text>
        <TouchableOpacity>
          <Text>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={listData}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => {
          return (
            <RestaurantCard
              key={index}
              restaurant={item}
              style={themed($itemContainer)}
            />
          );
        }}
        horizontal
        onEndReachedThreshold={0.5}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={themed($flatListContent)}
      />
    </View>
  );
};

const $flatListContent: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  gap: spacing.sm,
});
