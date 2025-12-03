import { ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';

import { useBottomSheetRef } from '@/components/BottomSheet/hooks';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

type BottomSheetConfig = ReturnType<typeof useBottomSheetRef>;

type BottomSheetScreenProps = {
  children: ReactNode | ((config: BottomSheetConfig) => ReactNode);
  bottomSheetConfig?: BottomSheetConfig;
  containerStyle?: ViewStyle;
  contentStyle?: ViewStyle;
};

export const BottomSheetScreen = ({
  children,
  bottomSheetConfig: externalConfig,
  containerStyle,
  contentStyle,
}: BottomSheetScreenProps) => {
  const internalConfig = useBottomSheetRef();
  const config = externalConfig || internalConfig;
  const { themed } = useAppTheme();
  return (
    <View style={[themed($container), containerStyle]}>
      <Animated.View style={[$styles.fill, config.animatedStyle, contentStyle]}>
        {typeof children === 'function' ? children(config) : children}
      </Animated.View>
    </View>
  );
};

const $container: ThemedStyle<ViewStyle> = () => ({
  flex: 1,
  position: 'relative',
  backgroundColor: 'black',
});
