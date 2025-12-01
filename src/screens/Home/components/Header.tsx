import { View, ViewStyle } from 'react-native';

import { PressableIcon } from '@/components/Icon';
import { Text } from '@/components/Text';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

interface HeaderProps {
  children: React.ReactNode;
}
export const Header = ({ children }: HeaderProps) => {
  const {
    theme: { spacing },
    themed,
  } = useAppTheme();
  return (
    <View style={themed($container)}>
      <View style={[$styles.row, $styles.center, { gap: 2 }]}>
        <Text size="md" weight="medium">
          Now
        </Text>
        <Text size="md" weight="medium">
          .
        </Text>
        <Text size="md" weight="medium">
          London Hall
        </Text>
        <PressableIcon icon="chevron-down" size={12} />
      </View>
      <PressableIcon
        containerStyle={themed($adjust)}
        icon="adjust"
        size={24}
        activeOpacity={1}
      />
      {children}
    </View>
  );
};

const $container: ThemedStyle<ViewStyle> = () => ({
  position: 'relative',
});

const $adjust: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  position: 'absolute',
  right: spacing.md,
});
