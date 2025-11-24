import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ErrorBoundary } from '@/components/Screen/ErrorScreen/ErrorBoundary';
import Config from '@/config';
import AuthScreen from '@/screens/Auth';
import EmailSentScreen from '@/screens/Auth/EmailSent';
import ForgotPasswordScreen from '@/screens/Auth/ForgotPassword';
import EmailSignInScreen from '@/screens/Auth/SignIn/EmailSignIn';
import EmailSignUpScreen from '@/screens/Auth/SignUp/EmailSignUp';
import HomeScreen from '@/screens/Home';
import OnboardingScreen from '@/screens/Onboarding';
import RestaurantDetailScreen from '@/screens/Restaurant';
import { useAppTheme } from '@/theme/context';

import { AppStackParamList, NavigationProps } from './navigationTypes';
import { TabsNavigator } from './TabsNavigator';

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  const {
    theme: { colors },
  } = useAppTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        navigationBarColor: colors.background,
        contentStyle: {
          backgroundColor: colors.background,
        },
      }}
      initialRouteName="Onboarding"
    >
      <Stack.Screen name="EmailSignIn" component={EmailSignInScreen} />
      <Stack.Screen name="EmailSignUp" component={EmailSignUpScreen} />
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="EmailSent" component={EmailSentScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Tabs" component={TabsNavigator} />
      <Stack.Screen name="Restaurant" component={RestaurantDetailScreen} />
    </Stack.Navigator>
  );
};

export const AppNavigator = (props: NavigationProps) => {
  const { navigationTheme } = useAppTheme();

  // useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer theme={navigationTheme} {...props}>
      <ErrorBoundary catchErrors={Config.catchErrors}>
        <AppStack />
      </ErrorBoundary>
    </NavigationContainer>
  );
};
