import { useState } from 'react';
import { ViewStyle } from 'react-native';

import { Button } from '@/components/Button';
import { HeaderWithBackButton } from '@/components/Header';
import Screen from '@/components/Screen';
import { Text } from '@/components/Text';
import { PasswordTextField } from '@/components/TextField/PasswordTextField';
import { AppStackScreenProps } from '@/navigators/navigationTypes';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

interface ChangePasswordScreenProps
  extends AppStackScreenProps<'ChangePassword'> {}

export const ChangePasswordScreen = ({
  navigation,
}: ChangePasswordScreenProps) => {
  const { themed } = useAppTheme();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <Screen
      preset="scroll"
      safeAreaEdges={['bottom', 'top']}
      header={
        <HeaderWithBackButton
          onPress={() => navigation.goBack()}
          icon="back"
          style={$styles.container}
          title="Uber account"
        />
      }
      contentContainerStyle={$styles.container}
    >
      <Text weight="bold" size="xxl">
        Password
      </Text>
      <Text style={themed($description)} size="xs">
        Your password must be at least 8 characters long, and contain at least
        one digit and one non-digit characters
      </Text>
      <PasswordTextField
        label="New password"
        value={password}
        autoCorrect={false}
        autoCapitalize="none"
        spellCheck={false}
        keyboardType="default"
        returnKeyLabel="Send"
        returnKeyType="send"
        onChangeText={value => setPassword(value)}
      />
      <PasswordTextField
        containerStyle={themed($confirmPasswordInput)}
        label="Confirm new password"
        value={confirmPassword}
        autoCorrect={false}
        autoCapitalize="none"
        spellCheck={false}
        keyboardType="default"
        returnKeyLabel="Send"
        returnKeyType="send"
        onChangeText={value => setConfirmPassword(value)}
      />
      <Button style={themed($updateButton)} text="Update" preset="filled" />
    </Screen>
  );
};

const $confirmPasswordInput: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginTop: spacing.md,
});

const $description: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginVertical: spacing.lg,
});

const $updateButton: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginTop: spacing.xl,
});
