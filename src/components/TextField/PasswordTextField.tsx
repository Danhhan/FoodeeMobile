/* eslint-disable react/no-unstable-nested-components */
import { useState } from 'react';
import { ViewStyle } from 'react-native';

import { useAppTheme } from '@/theme/context';
import { ThemedStyle } from '@/theme/types';

import { PressableIcon } from '../Icon';

import { TextField, TextFieldProps } from '.';

export const PasswordTextField = (props: TextFieldProps) => {
  const {
    theme: { colors },
    themed,
  } = useAppTheme();
  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true);

  return (
    <TextField
      {...props}
      secureTextEntry={isAuthPasswordHidden}
      RightAccessory={() => (
        <PressableIcon
          icon={isAuthPasswordHidden ? 'view' : 'hidden'}
          color={colors.palette.neutral800}
          containerStyle={[themed($rightAccessory)]}
          size={20}
          onPress={() => setIsAuthPasswordHidden(!isAuthPasswordHidden)}
        />
      )}
    />
  );
};

const $rightAccessory: ThemedStyle<ViewStyle> = () => ({
  height: 20,
  width: 20,
  borderRadius: 10,
  position: 'absolute',
  top: '50%',
  transform: [{ translateY: '-50%' }],
  right: 10,
});
