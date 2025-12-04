import { View, ViewStyle } from 'react-native';

import { Icon } from '@/components/Icon';
import { Text } from '@/components/Text';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

interface RestaurantClosedOverlayProps {
  openTime?: string;
}

export const RestaurantClosedOverlay = ({
  openTime = '11:00 AM',
}: RestaurantClosedOverlayProps) => {
  const {
    theme: { colors },
    themed,
  } = useAppTheme();

  return (
    <>
      <View style={themed($overlay)} />
      <View style={themed($content)}>
        <View style={themed($scheduleButton)}>
          <Icon icon="calendar" size={24} />
          <Text>Schedule order</Text>
        </View>
        <Text weight="bold" color={colors.palette.white100}>
          Opens at {openTime}
        </Text>
      </View>
    </>
  );
};

const $overlay: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.palette.gray600,
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,
  opacity: 0.5,
  zIndex: 0,
});

const $content: ThemedStyle<ViewStyle> = () => ({
  zIndex: 2,
  position: 'absolute',
  top: 0,
  ...$styles.fullSize,
  ...$styles.center,
});

const $scheduleButton: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
  width: 172,
  backgroundColor: colors.palette.white100,
  ...$styles.row,
  paddingVertical: spacing.xxs,
  paddingHorizontal: spacing.xs,
  borderRadius: 10,
  gap: 10,
});
