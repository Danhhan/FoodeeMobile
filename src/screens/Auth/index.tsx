import { useState } from 'react';
import { Image, ImageStyle, TextStyle, View } from 'react-native';

import Screen from '@/components/Screen';
import { Text } from '@/components/Text';
import { AppStackScreenProps } from '@/navigators/navigationTypes';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

import { AuthEmail } from './components/AuthEmail';
import { AuthMethod } from './components/AuthMethod';

interface AuthScreenProps extends AppStackScreenProps<'Auth'> {}

enum EAuthMethod {
  email = 'email',
  google = 'google',
  apple = 'apple',
}
const AuthScreen = ({}: AuthScreenProps) => {
  const {
    theme: { colors },
    themed,
  } = useAppTheme();

  const [method, setMethod] = useState<EAuthMethod | null>(null);

  const renderContent = () => {
    switch (method) {
      case EAuthMethod.email:
        return <AuthEmail />;
      default:
        return (
          <>
            <Image
              style={themed($bannerImage)}
              source={require('@/assets/images/auth-banner.png')}
              resizeMode="cover"
            />
            <View style={$styles.container}>
              <Text weight="bold" size="xl" style={themed($heading)}>
                Welcome to Uber eats
              </Text>
              <AuthMethod
                title="Email"
                icon={require('@/assets/icons/email.png')}
                onPress={() => setMethod(EAuthMethod.email)}
              />
              <AuthMethod
                title="Google"
                icon={require('@/assets/icons/google.png')}
                onPress={() => {}}
              />
              <AuthMethod
                title="Apple"
                icon={require('@/assets/icons/apple.png')}
                onPress={() => {}}
              />
              <Text size="xxs" style={themed($termsText)}>
                By proceeding, you consent to get calls, Whatsapp or SMS
                messages, including by automated means, from uber and its
                affiliates to the number provided.
              </Text>
            </View>
          </>
        );
    }
  };

  return (
    <Screen
      safeAreaEdges={['top', 'bottom']}
      backgroundColor={colors.palette.white100}
      preset="scroll"
      contentContainerStyle={$styles.fill}
    >
      {renderContent()}
    </Screen>
  );
};

const $heading: ThemedStyle<TextStyle> = ({ spacing }) => ({
  marginVertical: spacing.md,
});

const $termsText: ThemedStyle<TextStyle> = ({ spacing }) => ({
  marginTop: spacing.xl,
});

const $bannerImage: ThemedStyle<ImageStyle> = () => ({
  height: 200,
  width: '100%',
});

export default AuthScreen;
