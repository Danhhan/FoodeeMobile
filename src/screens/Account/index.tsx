import {
  Image,
  ImageStyle,
  Pressable,
  TouchableOpacity,
  View,
} from 'react-native';

import { Icon } from '@/components/Icon';
import Screen from '@/components/Screen';
import { Text } from '@/components/Text';
import { AccountStackScreenProps } from '@/navigators/navigationTypes';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

interface AccountScreenProps extends AccountStackScreenProps<'Account'> {}

export const AccountScreen = ({ navigation }: AccountScreenProps) => {
  const {
    themed,
    theme: { colors },
  } = useAppTheme();
  return (
    <Screen
      safeAreaEdges={['bottom', 'top']}
      preset="fixed"
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
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate('Profile')}
        >
          <Image
            style={themed($avatar)}
            source={require('@/assets/images/default-avatar.png')}
          />
        </TouchableOpacity>
      </View>
      <View
        style={[
          $styles.row,
          {
            gap: 16,
            justifyContent: 'space-between',
            marginTop: 30,
            marginBottom: 18,
          },
        ]}
      >
        <Pressable
          style={({ pressed }) => ({
            width: 106,
            height: 86,
            backgroundColor: pressed
              ? colors.palette.gray600
              : colors.palette.gray500,
            borderRadius: 12,
            ...$styles.center,
            gap: 8,
          })}
        >
          <Icon icon="cart" size={24} />
          <Text weight="medium">Favorites</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => ({
            width: 106,
            height: 86,
            backgroundColor: pressed
              ? colors.palette.gray600
              : colors.palette.gray500,
            borderRadius: 12,
            ...$styles.center,
            gap: 8,
          })}
        >
          <Icon icon="cart" size={24} />
          <Text weight="medium">Wallet</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => ({
            width: 106,
            height: 86,
            backgroundColor: pressed
              ? colors.palette.gray600
              : colors.palette.gray500,
            borderRadius: 12,
            ...$styles.center,
            gap: 8,
          })}
        >
          <Icon icon="cart" size={24} />
          <Text weight="medium">Orders</Text>
        </Pressable>
      </View>
      <Pressable
        style={({ pressed }) => ({
          height: 86,
          backgroundColor: pressed
            ? colors.palette.gray600
            : colors.palette.gray500,
          borderRadius: 12,
          ...$styles.row,
          ...$styles.justifyContentBetween,
          padding: 16,
        })}
      >
        <View>
          <Text weight="medium">Uber one</Text>
          <Text>Try free for one month</Text>
        </View>
        <Image
          style={{ height: 50, width: 50 }}
          source={require('@/assets/images/bag.png')}
        />
      </Pressable>
    </Screen>
  );
};

const $avatar: ThemedStyle<ImageStyle> = () => ({
  height: 66,
  width: 66,
});
