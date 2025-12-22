import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Icon, IconTypes } from '@/components/Icon';
import { AccountScreen } from '@/screens/Account';
import { ProfileScreen } from '@/screens/Account/Profile';
import { BasketsScreen } from '@/screens/Baskets';
import HomeScreen from '@/screens/Home';
import { useAppTheme } from '@/theme/context';

import { AccountStackParamList, TabsParamList } from './navigationTypes';

const Tab = createBottomTabNavigator<TabsParamList>();

const Stack = createNativeStackNavigator<AccountStackParamList>();

export const AccountStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

const renderTabIcon = ({
  route,
  color,
}: {
  route: RouteProp<TabsParamList, keyof TabsParamList>;
  color: string;
}) => {
  let iconName: IconTypes;

  switch (route.name) {
    case 'Home':
      iconName = 'home';
      break;
    case 'Account':
      iconName = 'account';
      break;
    case 'Browse':
      iconName = 'browse';
      break;
    case 'Baskets':
      iconName = 'basket';
      break;
    default:
      iconName = 'home';
  }

  return <Icon icon={iconName} size={18} color={color} />;
};

const TabsNavigator = () => {
  const {
    theme: { colors },
  } = useAppTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.palette.black500,
        tabBarInactiveTintColor: colors.palette.white700,
        tabBarIcon: ({ color }) => renderTabIcon({ route, color }),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Browse" component={HomeScreen} />
      <Tab.Screen name="Baskets" component={BasketsScreen} />
      <Tab.Screen name="Account" component={AccountStackNavigator} />
    </Tab.Navigator>
  );
};

export { TabsNavigator };
