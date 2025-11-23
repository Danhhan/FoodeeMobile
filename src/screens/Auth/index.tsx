import { useState } from 'react';
import { TextStyle, View, ViewStyle } from 'react-native';

import { Button } from '@/components/Button';
import { HeaderWithBackButton } from '@/components/Header';
import Screen from '@/components/Screen';
import { Text } from '@/components/Text';
import { AppStackScreenProps } from '@/navigators/navigationTypes';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

import AuthSocial from './components/AuthSocial';

interface AuthScreenProps extends AppStackScreenProps<'Auth'> {}

const MODE_INDEXes = {
  signIn: 0,
  signUp: 1,
};
const AuthScreen = ({ navigation }: AuthScreenProps) => {
  const {
    theme: { colors },
    themed,
  } = useAppTheme();

  const [modeIndex, setModeIndex] = useState(MODE_INDEXes.signIn);
  const modeList = [
    {
      mode: 'signIn',
      heading: 'Sign in',
      subHeading: 'Please sign in to your existing account',
      linkText: 'Sign up for a new account',
    },
    {
      mode: 'signUp',
      heading: 'Sign up',
      subHeading: 'Please sign up to create a new account',
      linkText: 'Sign in to my account',
    },
  ];
  const modeValue = modeList[modeIndex].mode;
  return (
    <Screen safeAreaEdges={['top', 'bottom']} backgroundColor="transparent">
      <View style={$styles.container}>
        <HeaderWithBackButton onPress={() => navigation.goBack()} />
        <Text
          style={themed($heading)}
          preset="heading"
          color={colors.palette.neutral900}
          weight="bold"
        >
          {modeList[modeIndex].heading}
        </Text>
        <Text>{modeList[modeIndex].subHeading}</Text>
        <AuthSocial
          mode={modeValue}
          onPressButtonEmail={() => {
            if (modeIndex === MODE_INDEXes.signIn) {
              navigation.navigate('EmailSignIn');
            } else {
              navigation.navigate('EmailSignUp');
            }
          }}
        />
        {modeIndex === MODE_INDEXes.signUp && (
          <Text color={colors.palette.neutral600} style={themed($termsText)}>
            By signing up, you agree to Foodee&apos;s Terms of Service and
            Privacy Policy
          </Text>
        )}
        <Button
          style={themed($linkButton)}
          preset="empty"
          onPress={() => {
            if (modeIndex === MODE_INDEXes.signIn) {
              setModeIndex(MODE_INDEXes.signUp);
            } else {
              setModeIndex(MODE_INDEXes.signIn);
            }
          }}
          text={modeList[modeIndex].linkText}
          textDecorationLine="underline"
        />
      </View>
    </Screen>
  );
};

const $heading: ThemedStyle<TextStyle> = ({ spacing }) => ({
  marginTop: spacing.lg,
  marginBottom: spacing.sm,
});

const $linkButton: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginTop: spacing.xxl,
});

const $termsText: ThemedStyle<TextStyle> = ({ spacing }) => ({
  textAlign: 'center',
  marginTop: spacing.sm,
});

export default AuthScreen;
