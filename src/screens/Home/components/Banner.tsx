import { Image, TouchableOpacity, View } from 'react-native';

import { Icon } from '@/components/Icon';
import { Text } from '@/components/Text';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { IBanner } from '@/types/restaurant';

interface BannerProps {
  banners: IBanner[];
}
export const Banner = ({ banners }: BannerProps) => {
  const {
    themed,
    theme: { colors },
  } = useAppTheme();
  return (
    <View
      style={{
        backgroundColor: '#D2D7F0',
        borderRadius: 12,
        overflow: 'hidden',
      }}
    >
      <View style={[$styles.row, $styles.justifyContentBetween]}>
        <View
          style={[
            $styles.justifyContentBetween,
            { paddingVertical: 15, paddingLeft: 18 },
          ]}
        >
          <Text style={{ maxWidth: 208 }}>
            Order from these restaurants and save
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: colors.palette.white500,
              width: 104,
              height: 24,
              borderRadius: 12,
              ...$styles.center,
            }}
          >
            <Text size="xxs">
              Browse offer{' '}
              <Icon
                color={colors.palette.black500}
                icon="arrow-right"
                size={12}
              />
            </Text>
          </TouchableOpacity>
        </View>
        <Image
          style={{ width: 132, height: 160 }}
          source={require('@/assets/images/banner-1.png')}
        />
      </View>
    </View>
  );
};
