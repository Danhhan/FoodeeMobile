import { ComponentProps } from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
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
  EditProfile: undefined;
  DisplayName: undefined;
  Email: undefined;
  ChangePassword: undefined;
};

export type TabsParamList = {
  Home: undefined;
  Browse: undefined;
  Baskets: undefined;
  Account: NavigatorScreenParams<AccountStackParamList>;
};

export type AccountStackParamList = AppStackParamList & {
  Account: undefined;
  Profile: undefined;
};

export type AccountStackScreenProps<T extends keyof AccountStackParamList> =
  NativeStackScreenProps<AccountStackParamList, T>;

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;

export interface NavigationProps
  extends Partial<
    ComponentProps<typeof NavigationContainer<AppStackParamList>>
  > {}
