import { useState } from 'react';
import { View, ViewStyle } from 'react-native';

import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { Text } from '@/components/Text';
import { TextField } from '@/components/TextField';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

export const AuthEmail = () => {
  const {
    theme: { colors },
    themed,
  } = useAppTheme();
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const onNext = () => {};

  const onBack = () => {};

  return (
    <View style={themed($container)}>
      <View>
        <Text weight="bold" size="xl">
          What is your email address?
        </Text>
        <TextField
          containerStyle={themed($emailInput)}
          placeholder="name@example.com"
          keyboardType="email-address"
          returnKeyType="done"
          autoCapitalize="none"
        />
      </View>
      <View style={[$styles.row, $styles.justifyContentBetween]}>
        <Button style={themed($backButton)} onPress={onBack}>
          <Icon icon="arrowLeft" size={20} />
        </Button>
        <Button preset="filled" style={themed($nextButton)} onPress={onNext}>
          <Text style={{ color: colors.palette.white100 }} weight="bold">
            Next
          </Text>
          <Icon color={colors.palette.white100} icon="arrowRight" size={20} />
        </Button>
      </View>
    </View>
  );
};

const $container: ThemedStyle<ViewStyle> = () => ({
  ...$styles.container,
  ...$styles.fullHeight,
  ...$styles.scrollSpaceBetween,
  paddingBottom: 20,
});

const $backButton: ThemedStyle<ViewStyle> = () => ({
  width: 56,
  height: 56,
  borderRadius: 50,
});

const $nextButton: ThemedStyle<ViewStyle> = () => ({
  width: 120,
  height: 56,
  borderRadius: 50,
  gap: 14,
});

const $emailInput: ThemedStyle<ViewStyle> = () => ({
  marginTop: 50,
});
