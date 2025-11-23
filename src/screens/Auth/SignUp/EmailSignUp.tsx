/* eslint-disable @typescript-eslint/no-shadow */
import { ComponentType, useMemo, useRef, useState } from 'react';
import { TextStyle, View, ViewStyle } from 'react-native';
// eslint-disable-next-line no-restricted-imports
import type { TextInput } from 'react-native';

import { Button } from '@/components/Button';
import { HeaderWithBackButton } from '@/components/Header';
import { PressableIcon } from '@/components/Icon';
import Screen from '@/components/Screen';
import { Text } from '@/components/Text';
import { TextField, TextFieldAccessoryProps } from '@/components/TextField';
import { AppStackScreenProps } from '@/navigators/navigationTypes';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

import PasswordTextField from '../components/PasswordTextField';

interface EmailSignUpScreenProps extends AppStackScreenProps<'EmailSignUp'> {}

const EmailSignUpScreen = ({ navigation }: EmailSignUpScreenProps) => {
  const {
    theme: { colors },
    themed,
  } = useAppTheme();
  const [isError, setIsError] = useState(false);
  const authPasswordInput = useRef<TextInput>(null);
  const [authPassword, setAuthPassword] = useState('');
  const [authName, setAuthName] = useState('');
  const [authEmail, setAuthEmail] = useState('');
  const CloseRightAccessory: ComponentType<TextFieldAccessoryProps> = useMemo(
    () =>
      // eslint-disable-next-line react/no-unstable-nested-components
      function CloseRightAccessory(props: TextFieldAccessoryProps) {
        const { style } = props;
        return (
          <PressableIcon
            icon="x"
            color={colors.palette.neutral100}
            containerStyle={[style, themed($rightAccessory)]}
            size={12}
            onPress={() => {
              setAuthEmail('');
            }}
          />
        );
      },
    [colors.palette.neutral100, themed],
  );
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
          Sign Up
        </Text>
        <View style={themed($form)}>
          <TextField
            value={authName}
            label="Name"
            placeholder="Your name"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            onChangeText={setAuthName}
            onSubmitEditing={() => {
              authPasswordInput.current?.focus();
            }}
            helper={isError ? 'Required' : undefined}
            RightAccessory={authName ? CloseRightAccessory : undefined}
          />
          <TextField
            value={authEmail}
            label="Email"
            placeholder="Enter email address"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            onChangeText={setAuthEmail}
            onSubmitEditing={() => {
              authPasswordInput.current?.focus();
            }}
            helper={isError ? 'Required' : undefined}
            RightAccessory={authEmail ? CloseRightAccessory : undefined}
          />
          <PasswordTextField
            ref={authPasswordInput}
            value={authPassword}
            onChangeText={setAuthPassword}
          />
          <Button
            style={themed($submitButton)}
            text="Sign up"
            preset="filled"
            onPress={() => setIsError(true)}
          />
        </View>
      </View>
    </Screen>
  );
};

const $heading: ThemedStyle<TextStyle> = ({ spacing }) => ({
  marginTop: spacing.lg,
  marginBottom: spacing.sm,
});

const $form: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  gap: spacing.sm,
});

const $submitButton: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginTop: spacing.lg,
});

const $rightAccessory: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.palette.neutral300,
  height: 20,
  width: 20,
  borderRadius: 10,
  position: 'absolute',
  top: '50%',
  transform: [{ translateY: '-50%' }],
  right: 10,
});

export default EmailSignUpScreen;
