import { useCallback, useRef } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

type BottomSheetConfig = {
  scaleRange?: [number, number];
  borderRadiusRange?: [number, number];
};

export const useBottomSheetRef = (config?: BottomSheetConfig) => {
  const ref = useRef<BottomSheetModal>(null);
  const animatedIndex = useSharedValue(-1); // Bắt đầu từ -1 (closed)
  const { scaleRange = [1, 0.88], borderRadiusRange = [0, 20] } = config || {};

  const open = useCallback((index?: number) => {
    if (index !== undefined) {
      ref.current?.present();
      setTimeout(() => {
        ref.current?.snapToIndex(index);
      }, 100);
    } else {
      ref.current?.present();
    }
  }, []);

  const close = useCallback(() => {
    ref.current?.dismiss();
  }, []);

  const expand = useCallback(() => {
    ref.current?.expand();
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    // Normalize from -1 (closed) to 0+ (open) to 0-1
    const progress = interpolate(
      animatedIndex.value,
      [-1, 0], // -1 = closed, 0 = first snap point
      [0, 1], // 0 = no scale, 1 = scale down
      Extrapolation.CLAMP,
    );

    const scale = interpolate(
      progress,
      [0, 1],
      scaleRange,
      Extrapolation.CLAMP,
    );

    const borderRadius = interpolate(
      progress,
      [0, 1],
      borderRadiusRange,
      Extrapolation.CLAMP,
    );

    return {
      transform: [{ scale }],
      borderRadius,
      overflow: 'hidden',
    };
  }, [scaleRange, borderRadiusRange]);

  return {
    ref,
    open,
    close,
    expand,
    animatedStyle,
    animatedIndex,
  };
};
