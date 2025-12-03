/* eslint-disable react/display-name */
// components/bottomSheets/AddressSelectionSheet.tsx
import { forwardRef, useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

type AddressSelectionSheetProps = {
  onSelectAddress?: (address: string) => void;
};

export const AddressSelectionSheet = forwardRef<
  BottomSheet,
  AddressSelectionSheetProps
>(({ onSelectAddress }, ref) => {
  const snapPoints = useMemo(() => ['75%', '90%'], []);

  return (
    <BottomSheet
      ref={ref}
      index={-1} // Đóng mặc định
      snapPoints={snapPoints}
      enablePanDownToClose
      backdropComponent={({ style }) => (
        <View style={[style, { backgroundColor: 'rgba(0,0,0,0.5)' }]} />
      )}
    >
      <BottomSheetView style={styles.container}>
        <Text style={styles.title}>Order details</Text>
      </BottomSheetView>
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  // ... other styles
});
