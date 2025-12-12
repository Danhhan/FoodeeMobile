/* eslint-disable react/no-unstable-nested-components */
import { useState } from 'react';
import { ViewStyle } from 'react-native';

import { Button } from '@/components/Button';
import { HeaderWithBackButton } from '@/components/Header';
import { PressableIcon } from '@/components/Icon';
import Screen from '@/components/Screen';
import { Text } from '@/components/Text';
import { TextField } from '@/components/TextField';
import { AppStackScreenProps } from '@/navigators/navigationTypes';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

interface EmailScreenProps extends AppStackScreenProps<'Email'> {}

export const EmailScreen = ({ navigation }: EmailScreenProps) => {
  const {
    theme: { colors },
    themed,
  } = useAppTheme();
  const [firstName, setFirstName] = useState('dolly@gmail.com');

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
        Email
      </Text>
      <Text style={themed($description)} size="xs">
        You&apos;ll use this email to receive messages, sign in and recover your
        account.
      </Text>
      <TextField
        label="Email"
        value={firstName}
        autoCorrect={false}
        autoCapitalize="none"
        spellCheck={false}
        keyboardType="email-address"
        returnKeyLabel="Send"
        returnKeyType="send"
        onChangeText={value => setFirstName(value)}
        RightAccessory={() =>
          firstName && (
            <PressableIcon
              containerStyle={themed($rightAccessoryStyle)}
              color={colors.palette.white500}
              size={18}
              icon="close"
              activeOpacity={1}
            />
          )
        }
      />
      <Text style={themed($subDescription)} size="xs">
        A verification code will be sent to this email.
      </Text>
      <Button style={themed($updateButton)} text="Update" preset="filled" />
    </Screen>
  );
};

const $description: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginVertical: spacing.lg,
});

const $subDescription: ThemedStyle<ViewStyle> = ({ spacing, colors }) => ({
  marginVertical: spacing.md,
  color: colors.palette.gray900,
});

const $updateButton: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginTop: spacing.xl,
});

const $rightAccessoryStyle: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.palette.black500,
  width: 18,
  height: 18,
  borderRadius: 50,
  ...$styles.center,
  position: 'absolute',
  right: 20,
  top: '50%',
  transform: [
    {
      translateY: '-50%',
    },
  ],
});
