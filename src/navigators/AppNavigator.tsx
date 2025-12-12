import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ErrorBoundary } from '@/components/Screen/ErrorScreen/ErrorBoundary';
import { SplashScreen } from '@/components/Screen/SplashScreen';
import Config from '@/config';
import { EditProfileScreen } from '@/screens/Account/EditProfile';
import { DisplayNameScreen } from '@/screens/Account/EditProfile/DisplayName';
import AuthScreen from '@/screens/Auth';
import { ChangeAddressScreen } from '@/screens/ChangeAddress';
import FoodDetailScreen from '@/screens/Food';
import HomeScreen from '@/screens/Home';
import OnboardingScreen from '@/screens/Onboarding';
import RestaurantDetailScreen from '@/screens/Restaurant';
import { useAppTheme } from '@/theme/context';

import { AppStackParamList, NavigationProps } from './navigationTypes';
import { navigationRef } from './navigationUtilities';
import { TabsNavigator } from './TabsNavigator';

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  const [visible, setVisible] = useState(true);
  const {
    theme: { colors },
  } = useAppTheme();

  if (visible) {
    return (
      <SplashScreen
        onAnimationEnd={() => {
          // if (!isLoaded) {
          //   console.log('setVisible(false)');
          // }
          setVisible(false);
        }}
      />
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        navigationBarColor: colors.background,
        contentStyle: {
          backgroundColor: colors.background,
        },
      }}
      initialRouteName="Tabs"
    >
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Tabs" component={TabsNavigator} />
      <Stack.Screen name="Restaurant" component={RestaurantDetailScreen} />
      {/* EDIT PROFILE SCREENS */}
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen
        name="DisplayName"
        component={DisplayNameScreen}
        options={{ animation: 'none' }}
      />
      <Stack.Screen
        name="Food"
        component={FoodDetailScreen}
        options={{
          presentation: 'fullScreenModal',
          animation: 'fade_from_bottom',
        }}
      />
      <Stack.Screen
        name="ChangeAddress"
        component={ChangeAddressScreen}
        options={{
          presentation: 'fullScreenModal',
          animation: 'fade_from_bottom',
        }}
      />
    </Stack.Navigator>
  );
};

export const AppNavigator = (props: NavigationProps) => {
  const { navigationTheme } = useAppTheme();

  // useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer theme={navigationTheme} {...props} ref={navigationRef}>
      <ErrorBoundary catchErrors={Config.catchErrors}>
        <AppStack />
      </ErrorBoundary>
    </NavigationContainer>
  );
};
