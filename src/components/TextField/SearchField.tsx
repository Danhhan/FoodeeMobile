import { memo } from 'react';
import type { ViewStyle } from 'react-native';

import { Icon } from '@/components/Icon';
import { TextField } from '@/components/TextField';
import { useAppTheme } from '@/theme/context';
import { ThemedStyle } from '@/theme/types';

const LeftAccessory = () => {
  const { themed } = useAppTheme();
  return <Icon icon="search" size={24} containerStyle={themed($leftIcon)} />;
};

const SearchField = () => {
  const { themed } = useAppTheme();
  return (
    <TextField
      placeholder="Enter a new address"
      style={themed($inputStyle)}
      inputWrapperStyle={themed($inputWrapperStyle)}
      LeftAccessory={LeftAccessory}
    />
  );
};

const $leftIcon: ThemedStyle<ViewStyle> = () => ({
  position: 'absolute',
  width: 24,
  top: '50%',
  transform: [{ translateY: '-50%' }],
  left: 12,
});

const $inputStyle: ThemedStyle<ViewStyle> = () => ({
  paddingLeft: 32,
});

const $inputWrapperStyle: ThemedStyle<ViewStyle> = () => ({
  borderRadius: 20,
});

export default memo(SearchField);
