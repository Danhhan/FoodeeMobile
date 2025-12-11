import { useMemo } from 'react';
import {
  Image,
  ImageStyle,
  Pressable,
  ScrollView,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import { Icon, IconTypes } from '@/components/Icon';
import Screen from '@/components/Screen';
import { Text } from '@/components/Text';
import { AccountStackScreenProps } from '@/navigators/navigationTypes';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

interface AccountScreenProps extends AccountStackScreenProps<'Account'> {}

interface MenuItem {
  icon: IconTypes;
  title: string;
}

export const AccountScreen = ({ navigation }: AccountScreenProps) => {
  const {
    themed,
    theme: { colors },
  } = useAppTheme();

  const menuItems: MenuItem[] = useMemo(() => {
    return [
      { icon: 'ticket', title: 'Promotions' },
      { icon: 'cart', title: 'Help' },
      { icon: 'cart', title: 'Restaurant Rewards' },
      { icon: 'cart', title: 'Business Preferences' },
      { icon: 'cart', title: 'Invite Friends' },
    ];
  }, []);

  const renderQuickActionButton = (icon: IconTypes, label: string) => (
    <Pressable
      style={({ pressed }) => [
        $quickActionButton,
        {
          backgroundColor: pressed
            ? colors.palette.gray600
            : colors.palette.gray500,
        },
      ]}
    >
      <Icon icon={icon} size={24} />
      <Text weight="medium">{label}</Text>
    </Pressable>
  );

  return (
    <Screen
      safeAreaEdges={['bottom', 'top']}
      preset="fixed"
      contentContainerStyle={$styles.fill}
    >
      <View
        style={[
          $styles.row,
          $styles.alignItemsCenter,
          $styles.justifyContentBetween,
          $styles.container,
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

      <ScrollView>
        <View style={$styles.container}>
          <View style={$quickActionsContainer}>
            {renderQuickActionButton('heart', 'Favorites')}
            {renderQuickActionButton('wallet', 'Wallet')}
            {renderQuickActionButton('cart', 'Orders')}
          </View>

          <Pressable
            style={({ pressed }) => [
              $promoCard,
              {
                backgroundColor: pressed
                  ? colors.palette.gray600
                  : colors.palette.gray500,
              },
            ]}
          >
            <View>
              <Text weight="medium">Uber one</Text>
              <Text>Try free for one month</Text>
            </View>
            <Image
              style={$promoImage}
              source={require('@/assets/images/bag.png')}
            />
          </Pressable>
        </View>

        <View style={$menuContainer}>
          {menuItems.map((item, idx) => (
            <Pressable
              key={`menu-item-${idx}`}
              style={({ pressed }) => [
                $menuItem,
                {
                  backgroundColor: pressed
                    ? colors.palette.gray600
                    : colors.palette.white500,
                },
              ]}
            >
              <Icon icon={item.icon} size={18} />
              <Text weight="medium">{item.title}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </Screen>
  );
};

const $avatar: ThemedStyle<ImageStyle> = () => ({
  height: 66,
  width: 66,
});

const $quickActionsContainer: ViewStyle = {
  flexDirection: 'row',
  gap: 16,
  justifyContent: 'space-between',
  marginTop: 30,
  marginBottom: 18,
};

const $quickActionButton: ViewStyle = {
  width: 106,
  height: 86,
  borderRadius: 12,
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
};

const $promoCard: ViewStyle = {
  height: 86,
  borderRadius: 12,
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 16,
};

const $promoImage: ImageStyle = {
  height: 50,
  width: 50,
};

const $menuContainer: ViewStyle = {
  marginTop: 20,
};

const $menuItem: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 16,
  paddingVertical: 14,
  gap: 16,
};
