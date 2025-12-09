import { Pressable, View, ViewStyle } from 'react-native';

import { BottomSheet as BaseBottomSheet } from '@/components/BottomSheet';
import { useBottomSheetRef } from '@/components/BottomSheet/hooks';
import { Button } from '@/components/Button';
import { Text } from '@/components/Text';
import { navigate } from '@/navigators/navigationUtilities';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

export const SignOut = () => {
  const {
    themed,
    theme: { colors },
  } = useAppTheme();

  const bottomSheetConfig = useBottomSheetRef();

  return (
    <>
      <Pressable
        style={({ pressed }) => [
          themed($signOut),
          pressed ? { backgroundColor: colors.palette.gray600 } : undefined,
        ]}
        onPress={() => bottomSheetConfig.open()}
      >
        <Text>Sign out</Text>
      </Pressable>
      <BaseBottomSheet
        ref={bottomSheetConfig.ref}
        snapPoints={['30%']}
        animationConfigs={{ duration: 200 }}
        handleComponent={null}
      >
        <View style={themed($sheetHeader)}>
          <Text weight="bold">Are you sure you want to sign out?</Text>
        </View>
        <View style={themed($sheetContent)}>
          <Button
            preset="filled"
            onPress={() => {
              navigate('Auth', { animation: 'none' });
              bottomSheetConfig.close();
            }}
          >
            <Text color={colors.palette.white500}>Confirm sign out</Text>
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

const $signOut: ThemedStyle<ViewStyle> = ({ spacing, colors }) => ({
  marginTop: spacing.lg,
  ...$styles.row,
  ...$styles.alignItemsCenter,
  ...$styles.container,
  gap: spacing.lg,
  backgroundColor: colors.background,
  paddingVertical: spacing.md,
});
