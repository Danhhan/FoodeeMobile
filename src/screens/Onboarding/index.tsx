import { useState } from 'react';
import { View, ViewStyle } from 'react-native';

import { Button } from '@/components/Button';
import Screen from '@/components/Screen';
import { AppStackScreenProps } from '@/navigators/navigationTypes';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

import OnboardingSwipe from './components/OnboardingSwipe';
import { ONBOARDING_STEPS } from './constants';

interface OnboardingScreenProps extends AppStackScreenProps<'Onboarding'> {}

function OnboardingScreen({ navigation }: OnboardingScreenProps) {
  const { themed } = useAppTheme();
  const [selectedIdx, setSelectedIdx] = useState(0);

  const onNext = () => {
    if (selectedIdx === ONBOARDING_STEPS.length - 1) {
      return;
    }
    setSelectedIdx(selectedIdx + 1);
  };

  const onPrevious = () => {
    if (selectedIdx === 0) {
      return;
    }
    setSelectedIdx(selectedIdx - 1);
  };

  const isLastStep = selectedIdx === ONBOARDING_STEPS.length - 1;

  const onNavigateToSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <Screen safeAreaEdges={['top', 'bottom']}>
      <View style={themed($container)}>
        <OnboardingSwipe
          selectedIdx={selectedIdx}
          onNext={onNext}
          onPrevious={onPrevious}
          onResetSelectedIndex={() => setSelectedIdx(0)}
        />
        <View style={themed($dotContainer)}>
          {ONBOARDING_STEPS.map((_, index) => {
            return (
              <View
                key={index}
                style={[
                  themed($dot),
                  selectedIdx === index && themed($selectedDot),
                ]}
              />
            );
          })}
        </View>
        <View style={themed($buttonContainer)}>
          <Button
            onPress={() => {
              if (isLastStep) {
                onNavigateToSignIn();
              } else {
                onNext();
              }
            }}
            preset="filled"
          >
            {isLastStep ? 'Get Started' : 'Next'}
          </Button>
        </View>
        <View style={[$styles.fill, $styles.fullWidth]}>
          {!isLastStep && (
            <Button
              style={themed($skipButton)}
              preset="empty"
              onPress={onNavigateToSignIn}
              text="Skip"
              textDecorationLine="underline"
            />
          )}
        </View>
      </View>
    </Screen>
  );
}

const $container: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  alignItems: 'center',
  paddingHorizontal: spacing.lg,
});

const $buttonContainer: ThemedStyle<ViewStyle> = () => ({
  flex: 1,
  width: '100%',
});

const $dotContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  flexDirection: 'row',
  gap: spacing.md,
});

const $dot: ThemedStyle<ViewStyle> = ({ colors }) => ({
  width: 10,
  height: 10,
  borderRadius: 4,
  backgroundColor: colors.palette.primary100,
  marginTop: 32,
  marginBottom: 70,
});

const $selectedDot: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.palette.primary500,
});

const $skipButton: ThemedStyle<ViewStyle> = () => ({
  marginTop: 58,
});

export default OnboardingScreen;
