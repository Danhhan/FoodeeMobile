import { useMemo } from 'react';
import { Dimensions, View } from 'react-native';

import { BottomSheet as BaseBottomSheet } from '@/components/BottomSheet';
import { ReturnBottomSheet } from '@/components/BottomSheet/hooks';
import { HeaderWithBackButton } from '@/components/Header';
import { $styles } from '@/theme/styles';

import { Addresses } from './Addresses';

export const BottomSheet = ({
  bottomSheetConfig,
}: {
  bottomSheetConfig: ReturnBottomSheet;
}) => {
  const { height } = Dimensions.get('window');
  const snapPoints = useMemo(() => [height * 0.93], [height]);
  return (
    <BaseBottomSheet
      ref={bottomSheetConfig.ref}
      snapPoints={snapPoints}
      animatedIndex={bottomSheetConfig.animatedIndex}
    >
      <View style={$styles.container}>
        <HeaderWithBackButton
          title="Addresses"
          icon="close"
          onPress={bottomSheetConfig.close}
        />
      </View>
      <Addresses />
    </BaseBottomSheet>
  );
};
