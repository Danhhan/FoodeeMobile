import { View, ViewStyle } from 'react-native';

import { useAppTheme } from '@/theme/context';
import { ThemedStyle } from '@/theme/types';

import { PressableIcon, PressableIconProps } from '../Icon';
import { Text } from '../Text';

interface IHeaderWithBackButtonProps
  extends Pick<PressableIconProps, 'onPress'> {
  title?: string;
}

export const HeaderWithBackButton = ({
  onPress,
  title,
}: IHeaderWithBackButtonProps) => {
  const { themed } = useAppTheme();
  return (
    <View style={themed($container)}>
      <PressableIcon icon="back" size={24} onPress={onPress} />
      {title && (
        <Text size="md" weight="medium">
          {title}
        </Text>
      )}
    </View>
  );
};

const $container: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: spacing.md,
  paddingBottom: spacing.md,
});
