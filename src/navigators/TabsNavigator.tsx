import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';

import { Icon, IconTypes } from '@/components/Icon';
import HomeScreen from '@/screens/Home';
import { useAppTheme } from '@/theme/context';

import { TabsParamList } from './navigationTypes';

const Tab = createBottomTabNavigator<TabsParamList>();

const renderTabIcon = ({
  route,
  color,
  size,
}: {
  route: RouteProp<TabsParamList, keyof TabsParamList>;
  color: string;
  size: number;
}) => {
  let iconName: IconTypes;

  switch (route.name) {
    case 'Home':
      iconName = 'home';
      break;
    case 'Account':
      iconName = 'user';
      break;
    case 'Notification':
      iconName = 'user';
      break;
    default:
      iconName = 'home';
  }

  return <Icon icon={iconName} size={size} color={color} />;
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
        tabBarInactiveTintColor: colors.palette.neutral700,
        tabBarIcon: ({ color, size }) => renderTabIcon({ route, color, size }),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export { TabsNavigator };
