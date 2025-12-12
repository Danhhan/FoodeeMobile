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

interface DisplayNameScreenProps extends AppStackScreenProps<'DisplayName'> {}

export const DisplayNameScreen = ({ navigation }: DisplayNameScreenProps) => {
  const {
    theme: { colors },
    themed,
  } = useAppTheme();
  const [firstName, setFirstName] = useState('Dolly');
  const [lastName, setLastName] = useState('Sheep');

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
        Name
      </Text>
      <Text style={{ marginVertical: 20 }} size="xs">
        This is the name you would like other people to use when referring to
        you
      </Text>
      <TextField
        label="First name"
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
      <TextField
        containerStyle={{ marginTop: 10 }}
        label="Last name"
        value={lastName}
        autoCorrect={false}
        autoCapitalize="none"
        spellCheck={false}
        keyboardType="email-address"
        returnKeyLabel="Send"
        returnKeyType="send"
        onChangeText={value => setLastName(value)}
        RightAccessory={() =>
          lastName && (
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
      <Button
        // disabled
        style={{ marginTop: 100 }}
        text="Update"
        preset="filled"
      />
    </Screen>
  );
};

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
