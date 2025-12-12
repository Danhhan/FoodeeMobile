import { TouchableWithoutFeedback, View, ViewStyle } from 'react-native';

import { HeaderWithBackButton } from '@/components/Header';
import { Icon, PressableIcon } from '@/components/Icon';
import Screen from '@/components/Screen';
import { Text } from '@/components/Text';
import { AppStackScreenProps } from '@/navigators/navigationTypes';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

import { Avatar } from '../components/Avatar';

interface EditProfileScreenProps extends AppStackScreenProps<'EditProfile'> {}

export const EditProfileScreen = ({ navigation }: EditProfileScreenProps) => {
  const {
    themed,
    theme: { colors },
  } = useAppTheme();

  const profileItems = [
    {
      label: 'Name',
      value: 'John Doe',
      onPress: () => navigation.navigate('DisplayName'),
    },
    {
      label: 'Phone number',
      value: '+1234567890',
    },
    {
      label: 'Email',
      value: 'john.doe@example.com',
      onPress: () => navigation.navigate('Email'),
    },
    {
      label: 'Password',
      value: '●●●●●●',
      onPress: () => navigation.navigate('ChangePassword'),
    },
  ];

  return (
    <Screen
      preset="scroll"
      safeAreaEdges={['bottom', 'top']}
      header={
        <HeaderWithBackButton
          onPress={() => navigation.goBack()}
          icon="close"
          style={$styles.container}
          title="Uber account"
        />
      }
      contentContainerStyle={$styles.container}
    >
      <View style={$avatarContainer}>
        <Avatar size="lg" />
        <PressableIcon
          containerStyle={themed($pressIcon)}
          color={colors.palette.white100}
          icon="pencil"
          size={14}
          activeOpacity={1}
        />
      </View>
      {profileItems.map((item, index) => (
        <TouchableWithoutFeedback onPress={item.onPress} key={index}>
          <View style={themed($profileItem)} key={index}>
            <View>
              <Text>{item.label}</Text>
              <Text color={colors.palette.black300}>{item.value}</Text>
            </View>
            <Icon
              icon="chevron-right"
              size={20}
              color={colors.palette.gray800}
            />
          </View>
        </TouchableWithoutFeedback>
      ))}
    </Screen>
  );
};

const $profileItem: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
  borderBottomWidth: 1,
  borderBottomColor: colors.palette.gray500,
  paddingVertical: spacing.sm,
  ...$styles.row,
  ...$styles.justifyContentBetween,
  ...$styles.alignItemsCenter,
});

const $avatarContainer: ViewStyle = {
  position: 'relative',
  width: 112,
  marginVertical: 30,
};

const $pressIcon: ThemedStyle<ViewStyle> = ({ colors }) => ({
  position: 'absolute',
  right: 0,
  bottom: 0,
  backgroundColor: colors.palette.black500,
  width: 32,
  height: 32,
  borderRadius: 50,
  ...$styles.center,
});
