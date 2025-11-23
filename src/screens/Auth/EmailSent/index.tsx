import { TextStyle, View, ViewStyle } from 'react-native';

import { Button } from '@/components/Button';
import { HeaderWithBackButton } from '@/components/Header';
import Screen from '@/components/Screen';
import { Text } from '@/components/Text';
import { AppStackScreenProps } from '@/navigators/navigationTypes';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

interface EmailSentScreenProps extends AppStackScreenProps<'EmailSent'> {}

const EmailSentScreen = ({ navigation }: EmailSentScreenProps) => {
  const {
    theme: { colors },
    themed,
  } = useAppTheme();
  return (
    <Screen safeAreaEdges={['top', 'bottom']} backgroundColor="transparent">
      <View style={[$styles.container, $styles.fill]}>
        <HeaderWithBackButton onPress={() => navigation.goBack()} />
        <View style={$styles.fill}>
          <View style={$styles.fill}>
            <Text
              style={themed($heading)}
              preset="heading"
              color={colors.palette.neutral900}
              weight="bold"
            >
              Check your email
            </Text>

            <Text>
              <Text color={colors.palette.neutral600}>
                We&apos;ve just sent an email to{' '}
              </Text>
              <Text color={colors.palette.neutral800} weight="bold">
                hanminhdanh1325@gmail.com.
              </Text>
              <Text color={colors.palette.neutral600}>
                {' '}
                It may take up to 10 minutes to arrive. If you don&apos;t
                receive instructions shortly, please check your spam folder. If
                this does not work, try re-sending your request.
              </Text>
            </Text>
          </View>
          <View style={[$styles.fill, $styles.justifyContentEnd]}>
            <Button
              style={themed($submitButton)}
              text="Got it"
              preset="filled"
              onPress={() => {
                navigation.popTo('EmailSignIn');
              }}
            />
          </View>
        </View>
      </View>
    </Screen>
  );
};

const $heading: ThemedStyle<TextStyle> = ({ spacing }) => ({
  marginTop: spacing.lg,
  marginBottom: spacing.sm,
});

const $submitButton: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginTop: spacing.lg,
});

export default EmailSentScreen;
