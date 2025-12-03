import { forwardRef, ReactNode, useCallback, useMemo } from 'react';
import { ViewStyle } from 'react-native';
import type { BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import {
  BottomSheetModal,
  BottomSheetBackdrop as GHBottomSheetBackdrop,
  BottomSheetView as GHBottomSheetView,
} from '@gorhom/bottom-sheet';
import { SharedValue } from 'react-native-reanimated';

import { useAppTheme } from '@/theme/context';
import { ThemedStyle } from '@/theme/types';

type BottomSheetProps = {
  children: ReactNode;
  snapPoints?: string[] | number[];
  enablePanDownToClose?: boolean;
  onClose?: () => void;
  animatedIndex?: SharedValue<number>;
};

export const BottomSheet = forwardRef<BottomSheetModal, BottomSheetProps>(
  (
    {
      children,
      snapPoints: customSnapPoints,
      enablePanDownToClose = true,
      onClose,
      animatedIndex,
    },
    ref,
  ) => {
    const { themed } = useAppTheme();
    const snapPoints = useMemo(
      () => customSnapPoints || ['95%'],
      [customSnapPoints],
    );

    const renderBackdrop = useCallback(
      (props: BottomSheetBackdropProps) => (
        <GHBottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          opacity={0.5}
          pressBehavior="close"
        />
      ),
      [],
    );

    const handleSheetChanges = useCallback(
      (index: number) => {
        if (index === -1 && onClose) {
          onClose();
        }
      },
      [onClose],
    );

    return (
      <BottomSheetModal
        ref={ref}
        snapPoints={snapPoints}
        enablePanDownToClose={enablePanDownToClose}
        backdropComponent={renderBackdrop}
        backgroundStyle={themed($sheetBackground)}
        handleIndicatorStyle={themed($indicator)}
        onChange={handleSheetChanges}
        animatedIndex={animatedIndex}
        enableDynamicSizing={false}
      >
        <GHBottomSheetView style={themed($contentContainer)}>
          {children}
        </GHBottomSheetView>
      </BottomSheetModal>
    );
  },
);

BottomSheet.displayName = 'BottomSheet';

const $contentContainer: ThemedStyle<ViewStyle> = () => ({
  flex: 1,
  position: 'relative',
});

const $indicator: ThemedStyle<ViewStyle> = () => ({
  display: 'none',
});

const $sheetBackground: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.background,
  borderTopLeftRadius: 12,
  borderTopRightRadius: 12,
});
