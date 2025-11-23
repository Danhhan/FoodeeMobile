import { Pressable } from 'react-native';

import { Text } from '@/components/Text';
import { useAppTheme } from '@/theme/context';

interface ISwitchButtonProps {
  text: string;
}
export const SwitchButton = ({ text }: ISwitchButtonProps) => {
  const {
    theme: { colors },
  } = useAppTheme();
  return (
    <Pressable>
      <Text color={colors.palette.neutral900}>{text}</Text>
    </Pressable>
  );
};
