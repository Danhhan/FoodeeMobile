import { useRef } from 'react';
import { Animated, ViewStyle } from 'react-native';

import Screen from '@/components/Screen';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

import { CartItem } from './components/CartItem';
import { Header } from './components/Header';

export const BasketsScreen = () => {
  const { themed } = useAppTheme();
  const scrollY = useRef(new Animated.Value(0)).current;
  return (
    <Screen safeAreaEdges={['top']} contentContainerStyle={$styles.container}>
      <Header scrollY={scrollY} />
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={themed($contentList)}
        data={Array.from({ length: 10 })}
        renderItem={() => <CartItem />}
        keyExtractor={(_, index) => index.toString()}
        numColumns={1}
      />
      {/* <EmptyState /> */}
    </Screen>
  );
};

const $contentList: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  paddingBottom: 100,
  paddingTop: spacing.md,
});
