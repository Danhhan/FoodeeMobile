import { memo } from 'react';
import { TouchableOpacity, View, ViewStyle } from 'react-native';

import { Icon } from '@/components/Icon';
import { Text } from '@/components/Text';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

interface ISectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: ISectionHeaderProps) => {
  const {
    theme: { colors },
    themed,
  } = useAppTheme();
  return (
    <View style={themed($categoryHeader)}>
      <Text size="lg" weight="normal">
        {title}
      </Text>
      <TouchableOpacity>
        <View style={themed($seeAll)}>
          <Text size="sm" weight="normal">
            See all
          </Text>
          <Icon icon="forward" color={colors.palette.neutral500} size={20} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const $categoryHeader: ThemedStyle<ViewStyle> = () => ({
  ...$styles.row,
  ...$styles.justifyContentBetween,
  ...$styles.alignItemsCenter,
  ...$styles.container,
});

const $seeAll: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  flexDirection: 'row',
  ...$styles.center,
  gap: spacing.xxxs,
});

export default memo(SectionHeader);
