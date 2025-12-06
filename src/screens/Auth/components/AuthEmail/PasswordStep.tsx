import { View, ViewStyle } from 'react-native';

import { Button } from '@/components/Button';
import { Text } from '@/components/Text';
import { OTPField } from '@/components/TextField/OTPField';
import { useAppTheme } from '@/theme/context';
import { ThemedStyle } from '@/theme/types';

interface PasswordStepProps {
  otpValues: string[];
  onOtpChange: (values: string[]) => void;
  onResend: () => void;
  onMoreOptions: () => void;
  email: string;
}

export const PasswordStep = ({
  otpValues,
  onOtpChange,
  onResend,
  onMoreOptions,
  email,
}: PasswordStepProps) => {
  const {
    theme: { colors },
    themed,
  } = useAppTheme();

  return (
    <View>
      <Text weight="medium" size="md">
        Enter the 4-digit code sent to your email:
      </Text>
      <Text weight="medium" size="md">
        {email}
      </Text>
      <OTPField
        values={otpValues}
        onChange={onOtpChange}
        containerStyle={themed($optContainer)}
      />
      <Text style={themed($tipText)} size="xxs" color={colors.palette.gray900}>
        Tip: Be sure to check your spam inbox and spam folders
      </Text>
      <Button
        style={themed($resendButton)}
        pressedStyle={{ backgroundColor: colors.palette.gray700 }}
        onPress={onResend}
      >
        <Text>Resend</Text>
      </Button>
      <Button
        style={themed($resendButton)}
        pressedStyle={{ backgroundColor: colors.palette.gray700 }}
        onPress={onMoreOptions}
      >
        <Text>More options</Text>
      </Button>
    </View>
  );
};

const $resendButton: ThemedStyle<ViewStyle> = () => ({
  minWidth: 90,
  borderRadius: 50,
  marginBottom: 10,
  minHeight: 30,
});

const $optContainer: ThemedStyle<ViewStyle> = () => ({
  marginTop: 26,
});

const $tipText: ThemedStyle<ViewStyle> = () => ({
  marginTop: 10,
  marginBottom: 30,
});
