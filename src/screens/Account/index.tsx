import { Image, ImageStyle, TouchableOpacity, View } from 'react-native';

import Screen from '@/components/Screen';
import { Text } from '@/components/Text';
import { AccountStackScreenProps } from '@/navigators/navigationTypes';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

interface AccountScreenProps extends AccountStackScreenProps<'Account'> {}

export const AccountScreen = ({ navigation }: AccountScreenProps) => {
  const { themed } = useAppTheme();
  return (
    <Screen
      safeAreaEdges={['bottom', 'top']}
      preset="scroll"
      contentContainerStyle={$styles.container}
    >
      <View
        style={[
          $styles.row,
          $styles.scrollSpaceBetween,
          $styles.alignItemsCenter,
        ]}
      >
        <Text weight="bold" size="xxl">
          Dolly Sheep
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            style={themed($avatar)}
            source={require('@/assets/images/default-avatar.png')}
          />
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

const $avatar: ThemedStyle<ImageStyle> = () => ({
  height: 66,
  width: 66,
});
