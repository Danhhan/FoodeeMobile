import { TouchableWithoutFeedback, View, ViewStyle } from 'react-native';

import { Button } from '@/components/Button';
import { Icon, IconTypes } from '@/components/Icon';
import { Text } from '@/components/Text';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

interface LocationItemProps {
  onPress?: () => void;
  name: string;
  txtBtn: string;
  icon: IconTypes;
  btnType?: 'button' | 'icon';
}

export const LocationItem = (props: LocationItemProps) => {
  const { themed } = useAppTheme();
  const { name, txtBtn, icon, btnType } = props;
  return (
    <View
      style={[$styles.row, $styles.rowHCenter, $styles.justifyContentBetween]}
    >
      <View style={themed($locationContent)}>
        <Icon icon={icon} size={20} />
        <Text>{name}</Text>
      </View>
      {btnType === 'button' ? (
        <Button style={themed($locationButton)}>{txtBtn}</Button>
      ) : (
        <TouchableWithoutFeedback>
          <Icon containerStyle={themed($editIcon)} icon="edit" size={20} />
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

const $editIcon: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginRight: spacing.md,
});

const $locationContent: ThemedStyle<ViewStyle> = () => ({
  ...$styles.row,
  ...$styles.rowHCenter,
  gap: 22,
});
const $locationButton: ThemedStyle<ViewStyle> = ({ colors }) => ({
  width: 94,
  borderRadius: 50,
  borderWidth: 0,
  backgroundColor: colors.palette.gray500,
});
