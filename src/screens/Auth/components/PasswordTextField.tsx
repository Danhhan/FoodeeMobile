/* eslint-disable @typescript-eslint/no-shadow */
import { ComponentType, memo, useMemo, useState } from 'react';
// eslint-disable-next-line no-restricted-imports
import type { TextInput, ViewStyle } from 'react-native';

import { PressableIcon } from '@/components/Icon';
import {
  TextField,
  TextFieldAccessoryProps,
  TextFieldProps,
} from '@/components/TextField';
import { useAppTheme } from '@/theme/context';
import { ThemedStyle } from '@/theme/types';

interface IPasswordTextFieldProps extends TextFieldProps {
  ref: React.RefObject<TextInput | null>;
}

const PasswordTextField: React.FC<IPasswordTextFieldProps> = ({
  ref,
  ...props
}) => {
  // useAppTheme
  const {
    themed,
    theme: { colors },
  } = useAppTheme();
  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true);
  const PasswordRightAccessory: ComponentType<TextFieldAccessoryProps> =
    useMemo(
      () =>
        // eslint-disable-next-line react/no-unstable-nested-components
        function PasswordRightAccessory(props: TextFieldAccessoryProps) {
          const { style } = props;
          return (
            <PressableIcon
              icon={isAuthPasswordHidden ? 'view' : 'hidden'}
              color={colors.palette.neutral800}
              containerStyle={[style, themed($rightAccessory)]}
              size={20}
              onPress={() => setIsAuthPasswordHidden(!isAuthPasswordHidden)}
            />
          );
        },
      [isAuthPasswordHidden, colors.palette.neutral800, themed],
    );
  return (
    <TextField
      ref={ref}
      {...props}
      label="Password"
      placeholder="Enter password"
      keyboardType="default"
      autoCapitalize="none"
      autoCorrect={false}
      returnKeyType="send"
      onSubmitEditing={() => {
        // Handle submit
      }}
      // helper={isError ? 'Required' : undefined}
      RightAccessory={PasswordRightAccessory}
      secureTextEntry={isAuthPasswordHidden}
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

export default memo(PasswordTextField);
