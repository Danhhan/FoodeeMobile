import { useEffect } from 'react';
import { Image, ImageStyle, TextStyle, View, ViewStyle } from 'react-native';
import {
  Directions,
  Gesture,
  GestureDetector,
} from 'react-native-gesture-handler';
import Animated, {
  Easing,
  SlideInRight,
  SlideOutLeft,
} from 'react-native-reanimated';
import { runOnJS } from 'react-native-worklets';

import { Text } from '@/components/Text';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

import { ONBOARDING_STEPS } from '../constants';

interface IOnboardingSwipeProps {
  selectedIdx: number;
  onNext: () => void;
  onPrevious: () => void;
  onResetSelectedIndex: () => void;
}
function OnboardingSwipe({
  selectedIdx,
  onNext,
  onPrevious,
  onResetSelectedIndex,
}: IOnboardingSwipeProps) {
  const { themed } = useAppTheme();

  const swipeForward = Gesture.Fling()
    .direction(Directions.LEFT)
    .onStart(() => {
      runOnJS(onNext)();
    });
  const swipeBack = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onStart(() => {
      runOnJS(onPrevious)();
    });
  const swipes = Gesture.Race(swipeForward, swipeBack);

  useEffect(() => {
    const timeout = setTimeout(() => {
      runOnJS(onNext)();
      if (selectedIdx === ONBOARDING_STEPS.length - 1) {
        runOnJS(onResetSelectedIndex)();
      }
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, [onNext, selectedIdx, onResetSelectedIndex]);

  return (
    <GestureDetector gesture={swipes}>
      <Animated.View
        entering={SlideInRight.duration(300).easing(Easing.inOut(Easing.quad))}
        exiting={SlideOutLeft.duration(300).easing(Easing.inOut(Easing.quad))}
        style={$styles.alignItemsCenter}
        key={selectedIdx}
      >
        <Image
          style={themed($image)}
          source={ONBOARDING_STEPS[selectedIdx].image}
        />
        <View style={themed($content)}>
          <Text
            style={themed($title)}
            size="xl"
            weight="extraBold"
            preset="subheading"
          >
            {ONBOARDING_STEPS[selectedIdx].title}
          </Text>
          <Text
            style={themed(({ colors }) => ({
              color: colors.palette.gray300,
            }))}
          >
            {ONBOARDING_STEPS[selectedIdx].description}
          </Text>
        </View>
      </Animated.View>
    </GestureDetector>
  );
}

const $image: ThemedStyle<ImageStyle> = () => ({
  width: 240,
  height: 292,
  marginTop: 84,
});

const $content: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginTop: spacing.xxxl,
});

const $title: ThemedStyle<TextStyle> = ({ spacing, colors }) => ({
  marginBottom: spacing.xxxs + spacing.md,
  color: colors.palette.neutral900,
});

export default OnboardingSwipe;
