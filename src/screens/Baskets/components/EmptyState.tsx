import { Image, ImageStyle, TextStyle, View, ViewStyle } from 'react-native';

import { Button } from '@/components/Button';
import { Text } from '@/components/Text';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

export const EmptyState = () => {
  const { themed } = useAppTheme();
  return (
    <View>
      <Image
        source={require('@/assets/images/empty-cart.png')}
        style={$emptyImage}
      />
      <View style={[$styles.justifyContentCenter, $styles.alignItemsCenter]}>
        <Text size="lg" weight="medium">
          Add items to start a basket
        </Text>
        <Text style={themed($subTitle)}>
          Once you add items from a restaurant or store, your cart will appear
          here
        </Text>
        <Button preset="filled" text="Start Shopping" style={themed($button)} />
      </View>
    </View>
  );
};

const $emptyImage: ImageStyle = {
  width: 176,
  height: 176,
  marginTop: 70,
  marginHorizontal: 'auto',
};

const $button: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  borderRadius: spacing.xl + spacing.xs,
  minHeight: spacing.xl + spacing.xs,
  marginTop: spacing.md,
  paddingHorizontal: spacing.md + spacing.xxxs,
});

const $subTitle: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.palette.gray900,
  textAlign: 'center',
});
