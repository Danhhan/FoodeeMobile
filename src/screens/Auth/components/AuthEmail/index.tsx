/* eslint-disable react/no-unstable-nested-components */
import { useState } from 'react';
import { TextStyle, View, ViewStyle } from 'react-native';

import { ProgressBar } from '@/components/ActivityIndicator/ProgressBar';
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { Text } from '@/components/Text';
import { TextField } from '@/components/TextField';
import { OTPField } from '@/components/TextField/OTPField';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

import { ResendBottomSheet } from './ResendBottomSheet';
import { AUTH_EMAIL_STEP } from '../../constants';

interface AuthEmailProps {
  onBack: () => void;
}

const DEFAULT_OTP_VALUES = ['', '', '', ''];

export const AuthEmail = ({ onBack }: AuthEmailProps) => {
  const {
    theme: { colors },
    themed,
  } = useAppTheme();

  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [otpValues, setOtpValues] = useState(DEFAULT_OTP_VALUES);
  const [step, setStep] = useState<AUTH_EMAIL_STEP>(AUTH_EMAIL_STEP.email);
  const [isLoading, setIsLoading] = useState(false);
  const onFetchAuthVerification = () => {
    // fake call api with promise
    return new Promise(resolve => setTimeout(resolve, 1000));
  };
  const onFetchEmail = () => {
    return new Promise(resolve => setTimeout(resolve, 1000));
  };
  const onNext = () => {
    if (!email) {
      setErrorMsg('Email is required');
      return;
    }
    if (step === AUTH_EMAIL_STEP.email) {
      setIsLoading(true);
      onFetchEmail()
        .then(() => {
          setStep(AUTH_EMAIL_STEP.password);
        })
        .finally(() => setIsLoading(false));
      return;
    }
    if (step === AUTH_EMAIL_STEP.password && !errorMsg) {
      setIsLoading(true);
      onFetchAuthVerification()
        .then(() => {
          setErrorMsg("The email passcode you've entered is incorrect");
          setOtpValues(DEFAULT_OTP_VALUES);
        })
        .finally(() => setIsLoading(false));
    }
  };

  const onBackAndReset = () => {
    onBack();
    setEmail('');
    setErrorMsg('');
  };

  const renderContent = () => {
    switch (step) {
      case AUTH_EMAIL_STEP.email:
        return (
          <View>
            <Text weight="bold" size="xl">
              What is your email address?
            </Text>
            <TextField
              containerStyle={themed($emailInput)}
              placeholder="name@example.com"
              autoCorrect={false}
              autoCapitalize="none"
              spellCheck={false}
              keyboardType="email-address"
              returnKeyLabel="Send"
              returnKeyType="send"
              helper={errorMsg}
              value={email}
              onChangeText={value => {
                setEmail(value);
                setErrorMsg('');
              }}
              status={errorMsg ? 'error' : undefined}
            />
          </View>
        );
      case AUTH_EMAIL_STEP.password:
        return (
          <View>
            <Text size="md">Enter the 4-digit code sent to your email:</Text>
            <Text size="md">hanminhdanh1325@gmail.com</Text>
            <OTPField
              values={otpValues}
              onChange={value => {
                setOtpValues(value);
                setErrorMsg('');
              }}
              containerStyle={themed($optContainer)}
              status={errorMsg ? 'error' : undefined}
            />
            <Text
              preset="formHelper"
              text={errorMsg}
              size="xxs"
              style={themed($helperStyles)}
            />
            <Text
              style={themed($tipText)}
              size="xxs"
              color={colors.palette.gray900}
            >
              Tip: Be sure to check your spam inbox and spam folders
            </Text>
            <ResendBottomSheet />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <ProgressBar isLoading={isLoading} />
      <View style={themed($container)}>
        {renderContent()}
        <View style={themed($footer)}>
          <Button style={themed($backButton)} onPress={onBackAndReset}>
            <Icon icon="arrowLeft" size={20} color={colors.palette.black500} />
          </Button>
          <Button
            disabled={isLoading}
            preset="filled"
            style={themed($nextButton)}
            onPress={onNext}
            text="Next"
            RightAccessory={() => (
              <Icon
                size={20}
                icon="arrowRight"
                color={colors.palette.gray700}
              />
            )}
          />
        </View>
      </View>
    </>
  );
};

const $footer: ThemedStyle<ViewStyle> = () => ({
  ...$styles.row,
  ...$styles.justifyContentBetween,
  paddingBottom: 20,
});

const $helperStyles: ThemedStyle<TextStyle> = () => ({
  marginTop: 10,
});

const $container: ThemedStyle<ViewStyle> = ({ colors }) => ({
  ...$styles.container,
  ...$styles.fullHeight,
  ...$styles.scrollSpaceBetween,
  backgroundColor: colors.palette.white500,
  marginTop: 10,
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

const $optContainer: ThemedStyle<ViewStyle> = () => ({
  marginTop: 26,
});

const $tipText: ThemedStyle<ViewStyle> = () => ({
  marginTop: 10,
  marginBottom: 30,
});
