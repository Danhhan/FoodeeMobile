import { View, ViewStyle } from 'react-native';

import { BottomSheet as BaseBottomSheet } from '@/components/BottomSheet';
import { useBottomSheetRef } from '@/components/BottomSheet/hooks';
import { Button } from '@/components/Button';
import { Text } from '@/components/Text';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

export const ResendBottomSheet = () => {
  const {
    themed,
    theme: { colors },
  } = useAppTheme();

  const bottomSheetConfig = useBottomSheetRef();

  return (
    <>
      <Button
        fitContent
        style={themed($resendButton)}
        pressedStyle={{ backgroundColor: colors.palette.gray700 }}
        onPress={() => bottomSheetConfig.open()}
      >
        <Text>Resend</Text>
      </Button>
      <BaseBottomSheet
        ref={bottomSheetConfig.ref}
        snapPoints={['30%']}
        animationConfigs={{ duration: 100 }}
      >
        <View style={themed($sheetHeader)}>
          <Text>Resend code to:</Text>
          <Text>hanminhdanh1325@gmail.com</Text>
        </View>
        <View style={themed($sheetContent)}>
          <Button preset="filled">
            <Text color={colors.palette.white500}>Resend</Text>
          </Button>
          <Button onPress={() => bottomSheetConfig.close()}>
            <Text>Cancel</Text>
          </Button>
        </View>
      </BaseBottomSheet>
    </>
  );
};

const $sheetContent: ThemedStyle<ViewStyle> = () => ({
  ...$styles.container,
  marginTop: 30,
  gap: 10,
});

const $sheetHeader: ThemedStyle<ViewStyle> = ({ colors }) => ({
  ...$styles.colCenter,
  borderBottomWidth: 1,
  borderBottomColor: colors.border,
  padding: 12,
});

const $resendButton: ThemedStyle<ViewStyle> = () => ({
  minWidth: 90,
  borderRadius: 50,
  marginBottom: 10,
  minHeight: 30,
});
