import { ComponentProps } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// App Stack Navigator types
export type AppStackParamList = {
  Onboarding: undefined;
  Auth: undefined;
  Home: undefined;
  Account: undefined;
  Notification: undefined;
  Tabs: undefined;
  Restaurant: { restaurantId: string };
  Food: { foodId: string };
  ChangeAddress: undefined;
};

export type TabsParamList = {
  Home: undefined;
  Account: undefined;
  Browse: undefined;
  Baskets: undefined;
};

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;

export interface NavigationProps
  extends Partial<
    ComponentProps<typeof NavigationContainer<AppStackParamList>>
  > {}
