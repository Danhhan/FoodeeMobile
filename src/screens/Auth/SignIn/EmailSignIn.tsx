import { TextStyle, View, ViewStyle } from 'react-native';

import { Button } from '@/components/Button';
import { PressableIcon } from '@/components/Icon';
import Screen from '@/components/Screen';
import { Text } from '@/components/Text';
import { AppStackScreenProps } from '@/navigators/navigationTypes';
import { useAppTheme } from '@/theme/context';
import { ThemedStyle } from '@/theme/types';

import AuthSocial from '../components/AuthSocial';

interface EmailSignInScreenProps extends AppStackScreenProps<'EmailSignIn'> {}

const EmailSignInScreen = ({ navigation }: EmailSignInScreenProps) => {
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
        <Button style={themed($linkButton)} preset="empty" onPress={() => {}}>
          <Text
            style={themed($linkText)}
            preset="formLabel"
            color={colors.palette.neutral900}
          >
            Register for a new account
          </Text>
        </Button>
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

const $linkText: ThemedStyle<TextStyle> = () => ({
  textDecorationLine: 'underline',
});

export default EmailSignInScreen;
