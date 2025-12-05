import { Image, ImageStyle, View, ViewStyle } from 'react-native';

import { Button } from '@/components/Button';
import { Text } from '@/components/Text';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

interface AuthMethodProps {
  title: string;
  icon: any;
  onPress: () => void;
}
export const AuthMethod = ({ title, icon, onPress }: AuthMethodProps) => {
  const {
    theme: { colors },
    themed,
  } = useAppTheme();
  return (
    <Button
      preset="default"
      pressedStyle={{ backgroundColor: colors.palette.gray700 }}
      style={themed($button)}
      onPress={onPress}
    >
      <View style={themed($socialIconContainer)}>
        <Image style={themed($socialIcon)} source={icon} />
        <Text color={colors.palette.neutral900} weight="bold">
          {`Continue with ${title}`}
        </Text>
      </View>
    </Button>
  );
};

const $socialIcon: ThemedStyle<ImageStyle> = () => ({
  width: 20,
  height: 20,
});

const $socialIconContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  ...$styles.row,
  ...$styles.center,
  gap: spacing.sm,
});
const $button: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginBottom: spacing.xs,
});
