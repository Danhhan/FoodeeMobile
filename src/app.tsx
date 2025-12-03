import { useEffect } from 'react';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import BootSplash from 'react-native-bootsplash';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ThemeProvider } from '@/theme/context';

import { AppNavigator } from './navigators/AppNavigator';
import { $styles } from './theme/styles';

function App() {
  useEffect(() => {
    const init = async () => {};

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log('BootSplash has been hidden successfully');
    });
  }, []);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={$styles.fill}>
        <ThemeProvider>
          <BottomSheetModalProvider>
            <AppNavigator />
          </BottomSheetModalProvider>
        </ThemeProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
