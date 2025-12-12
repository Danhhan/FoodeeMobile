import {
  Pressable,
  ScrollView,
  TextStyle,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';

import { HeaderWithBackButton } from '@/components/Header';
import { Icon } from '@/components/Icon';
import Screen from '@/components/Screen';
import { Text } from '@/components/Text';
import { AccountStackScreenProps } from '@/navigators/navigationTypes';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';
import { useSafeAreaInsetsStyle } from '@/utils/useSafeAreaInsetsStyle';

import { Avatar } from '../components/Avatar';
import { SignOut } from './components/SignOut';

interface ProfileScreenProps extends AccountStackScreenProps<'Profile'> {}

export const ProfileScreen = ({ navigation }: ProfileScreenProps) => {
  const {
    themed,
    theme: { colors },
  } = useAppTheme();

  const $insets = useSafeAreaInsetsStyle(['top', 'bottom']);

  return (
    <Screen preset="fixed" contentContainerStyle={themed($wrapper)}>
      <View style={[themed($container), { paddingTop: $insets.paddingTop }]}>
        <HeaderWithBackButton onPress={() => navigation.goBack()} />
      </View>
      <ScrollView>
        <View style={themed($container)}>
          <View style={themed($profileInfo)}>
            <Avatar size="md" />
            <Text style={themed($fullName)} weight="medium" size="md">
              Dolly Sheep
            </Text>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('EditProfile')}
            >
              <View>
                <Text weight="medium" color={colors.palette.primary500}>
                  Edit account
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>

        <View>
          <Text style={themed($savedPlaceText)}>Saved places</Text>
          <Pressable
            style={({ pressed }) => [
              themed($savedPlace),
              themed($home),
              pressed ? { backgroundColor: colors.palette.gray600 } : undefined,
            ]}
          >
            <Icon icon="homeLine" size={18} />
            <View>
              <Text>Home</Text>
              <Text color={colors.palette.gray900}>
                123 Church Street, Brixton, London
              </Text>
            </View>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              themed($savedPlace),
              pressed ? { backgroundColor: colors.palette.gray600 } : undefined,
            ]}
          >
            <Icon icon="work" size={18} />
            <View>
              <Text>Work</Text>
              <Text color={colors.palette.gray900}>
                123 Church Street, Brixton, London
              </Text>
            </View>
          </Pressable>
        </View>
        <SignOut />
      </ScrollView>
    </Screen>
  );
};

const $wrapper: ThemedStyle<ViewStyle> = ({ colors }) => ({
  flex: 1,
  backgroundColor: colors.palette.gray200,
});

const $savedPlaceText: ThemedStyle<ViewStyle> = () => ({
  marginTop: 14,
  marginBottom: 10,
  ...$styles.container,
});

const $savedPlace: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
  ...$styles.row,
  ...$styles.alignItemsCenter,
  ...$styles.container,
  gap: spacing.lg,
  backgroundColor: colors.background,
  paddingVertical: spacing.md,
});

const $home: ThemedStyle<ViewStyle> = ({ colors }) => ({
  borderBottomWidth: 1,
  borderBottomColor: colors.palette.gray200,
});

const $profileInfo: ThemedStyle<ViewStyle> = () => ({
  paddingTop: 84,
  paddingBottom: 34,
  ...$styles.center,
});

const $container: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.background,
  ...$styles.container,
});

const $fullName: ThemedStyle<TextStyle> = () => ({
  marginVertical: 10,
});
