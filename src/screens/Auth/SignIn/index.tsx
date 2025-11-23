import { TextStyle, View, ViewStyle } from 'react-native';

import { Button } from '@/components/Button';
import { PressableIcon } from '@/components/Icon';
import Screen from '@/components/Screen';
import { Text } from '@/components/Text';
import { AppStackScreenProps } from '@/navigators/navigationTypes';
import { useAppTheme } from '@/theme/context';
import { ThemedStyle } from '@/theme/types';

import AuthSocial from '../components/AuthSocial';

interface SignInScreenProps extends AppStackScreenProps<'SignIn'> {}

const SignInScreen = ({ navigation }: SignInScreenProps) => {
  const {
    theme: { colors },
    themed,
  } = useAppTheme();
  return (
    <Screen safeAreaEdges={['top', 'bottom']} backgroundColor="transparent">
      <View style={themed($container)}>
        <PressableIcon
          icon="back"
          size={28}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={themed($heading)}
          preset="heading"
          color={colors.palette.neutral900}
          weight="bold"
        >
          Goods to see you again!
        </Text>
        <Text>Please sign in to your existing account</Text>
        <AuthSocial mode="signIn" onPressButtonEmail={() => {}} />
        <Button
          style={themed($linkButton)}
          preset="empty"
          onPress={() => {}}
          text="Sign up for a new account"
          textDecorationLine="underline"
        />
      </View>
    </Screen>
  );
};

const $container: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  paddingHorizontal: spacing.md,
});

const $heading: ThemedStyle<TextStyle> = ({ spacing }) => ({
  marginTop: spacing.lg,
  marginBottom: spacing.sm,
});

const $linkButton: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginTop: spacing.xxl,
});

export default SignInScreen;
