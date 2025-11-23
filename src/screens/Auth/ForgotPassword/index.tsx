import { useRef, useState } from 'react';
import { TextStyle, View, ViewStyle } from 'react-native';
// eslint-disable-next-line no-restricted-imports
import type { TextInput } from 'react-native';

import { Button } from '@/components/Button';
import { HeaderWithBackButton } from '@/components/Header';
import Screen from '@/components/Screen';
import { Text } from '@/components/Text';
import { TextField } from '@/components/TextField';
import { AppStackScreenProps } from '@/navigators/navigationTypes';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

interface ForgotPasswordScreenProps
  extends AppStackScreenProps<'ForgotPassword'> {}

const ForgotPasswordScreen = ({ navigation }: ForgotPasswordScreenProps) => {
  const {
    theme: { colors },
    themed,
  } = useAppTheme();
  const authPasswordInput = useRef<TextInput>(null);
  const [authEmail, setAuthEmail] = useState('');

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
          Forgot Password ?
        </Text>
        <Text color={colors.palette.neutral600}>
          Enter your email address and we&apos;ll send you a link to reset your
          password.
        </Text>
        <TextField
          containerStyle={themed($textFieldContainer)}
          value={authEmail}
          placeholder="Enter email address"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          onChangeText={setAuthEmail}
          onSubmitEditing={() => {
            authPasswordInput.current?.focus();
          }}
        />

        <Button
          style={themed($submitButton)}
          text="Send link"
          preset="filled"
          onPress={() => {
            navigation.push('EmailSent');
          }}
        />
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

const $textFieldContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginTop: spacing.xl,
});

export default ForgotPasswordScreen;
