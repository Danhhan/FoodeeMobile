import { Image, View } from 'react-native';

import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { Text } from '@/components/Text';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ClearCart } from './ClearCart';

export const CartItem = () => {
  const {
    theme: { colors },
  } = useAppTheme();
  return (
    <View
      style={{
        padding: 16,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.palette.gray600,
        marginBottom: 16,
      }}
    >
      <View style={[$styles.row, { gap: 16 }]}>
        <Image
          style={{ width: 70, height: 70, borderRadius: 100 }}
          source={require('@/assets/images/pizza-1.jpg')}
        />
        <View
          style={[
            $styles.row,
            $styles.justifyContentBetween,
            $styles.alignItemsCenter,
            $styles.fill,
          ]}
        >
          <View>
            <Text>Begs & Megs</Text>
            <View style={[$styles.rowHCenter, { gap: 4 }]}>
              <Text size="xxs" color={colors.palette.gray900}>
                1 item
              </Text>
              <Icon icon="dot" size={4} color={colors.palette.gray900} />
              <Text size="xxs" color={colors.palette.gray900}>
                US$43.00
              </Text>
            </View>
            <Text size="xxs" color={colors.palette.gray900}>
              Deliver to San Francisco Bay Area
            </Text>
          </View>
          <View>
            <ClearCart />
          </View>
        </View>
      </View>
      <Button
        style={{ marginBottom: 8, marginTop: 16, minHeight: 30 }}
        preset="filled"
        text="View cart"
      />
      <Button style={{ minHeight: 30 }} text="View store" />
    </View>
  );
};
