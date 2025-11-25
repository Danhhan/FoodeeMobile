import { View, ViewStyle } from 'react-native';

import { PressableIcon } from '@/components/Icon';
import { Text } from '@/components/Text';
import { useAppTheme } from '@/theme/context';
import { ThemedStyle } from '@/theme/types';

interface IHeaderProps {
  onPress: () => void;
}

const Header = ({ onPress }: IHeaderProps) => {
  const { themed } = useAppTheme();

  return (
    <View style={themed($container)}>
      <PressableIcon icon="back" size={24} onPress={onPress} />
      <Text size="md" weight="medium">
        The Coffee House
      </Text>
    </View>
  );
};

const $container: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: spacing.md,
  paddingBottom: spacing.md,
});

export default Header;
