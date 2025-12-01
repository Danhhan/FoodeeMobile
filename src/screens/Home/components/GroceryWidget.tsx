import {
  Image,
  ImageStyle,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import { Icon } from '@/components/Icon';
import { Text } from '@/components/Text';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

interface GroceryWidgetProps {
  title: string;
}
export const GroceryWidget = (props: GroceryWidgetProps) => {
  const { title } = props;
  const {
    themed,
    theme: { colors },
  } = useAppTheme();
  return (
    <View>
      <Text weight="bold" size="xl">
        {title}
      </Text>
      <View style={themed($productList)}>
        <View style={$styles.fill}>
          <Image
            style={themed($productItem)}
            source={require('@/assets/images/pineapple.png')}
          />
          <Text size="md" weight="medium">
            Organic Pineapple
          </Text>
          <Text size="sm" color={colors.palette.black200}>
            $9.00
          </Text>
        </View>
        <View style={$styles.fill}>
          <Image
            style={themed($productItem)}
            source={require('@/assets/images/pineapple.png')}
          />
          <Text size="md" weight="medium">
            Organic Pineapple
          </Text>
          <Text size="sm" color={colors.palette.black200}>
            $9.00
          </Text>
        </View>
        <View style={$styles.fill}>
          <Image
            style={themed($productItem)}
            source={require('@/assets/images/pineapple.png')}
          />
          <Text size="md" weight="medium">
            Organic Pineapple
          </Text>
          <Text size="sm" color={colors.palette.black200}>
            $9.00
          </Text>
        </View>
      </View>
      <TouchableOpacity style={themed($groceryInfo)}>
        <Image
          style={themed($groceryLogo)}
          source={require('@/assets/images/grocery-logo.png')}
          resizeMode="contain"
        />
        <Text style={themed($groceryName)} size="sm" weight="medium">
          View more on Asda Brighton Marina
        </Text>
        <Icon size={24} icon="chevron-right" />
      </TouchableOpacity>
    </View>
  );
};

const $productList: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  ...$styles.row,
  marginTop: spacing.sm,
});

const $groceryInfo: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  ...$styles.row,
  ...$styles.justifyContentBetween,
  ...$styles.alignItemsCenter,
  marginTop: spacing.md + spacing.xxxs,
});

const $productItem: ThemedStyle<ImageStyle> = () => ({
  height: 148,
  width: 99,
});

const $groceryLogo: ThemedStyle<ImageStyle> = () => ({
  height: 40,
  width: 40,
});

const $groceryName: ThemedStyle<TextStyle> = () => ({
  width: 250,
});
