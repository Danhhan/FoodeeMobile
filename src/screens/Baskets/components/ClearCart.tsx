import { View } from 'react-native';

import { BottomSheet } from '@/components/BottomSheet';
import { useBottomSheetRef } from '@/components/BottomSheet/hooks';
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { Text } from '@/components/Text';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';

export const ClearCart = () => {
  const bottomSheetConfig = useBottomSheetRef();
  const {
    theme: { colors },
  } = useAppTheme();
  return (
    <>
      <Button
        style={{ width: 40, minHeight: 40, gap: 3, borderRadius: 100 }}
        onPress={() => bottomSheetConfig.open()}
      >
        <Icon icon="dot" size={2} />
        <Icon icon="dot" size={2} />
        <Icon icon="dot" size={2} />
      </Button>
      <BottomSheet
        ref={bottomSheetConfig.ref}
        snapPoints={['10%']}
        animationConfigs={{ duration: 200 }}
        handleComponent={null}
      >
        <View
          style={[
            $styles.rowHCenter,
            { gap: 12, padding: 12, paddingBottom: 0 },
          ]}
        >
          <Icon icon={'search'} size={20} color={colors.palette.angry900} />
          <Text color={colors.palette.angry900}>Clear cart</Text>
        </View>
      </BottomSheet>
    </>
  );
};
