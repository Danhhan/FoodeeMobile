import { View } from 'react-native';

import { HeaderWithBackButton } from '@/components/Header';
import Screen from '@/components/Screen';
import { Text } from '@/components/Text';
import { AppStackScreenProps } from '@/navigators/navigationTypes';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';

interface IRestaurantDetailScreenProps
  extends AppStackScreenProps<'Restaurant'> {}

const RestaurantDetailScreen = ({
  navigation,
}: IRestaurantDetailScreenProps) => {
  const {
    theme: { colors },
  } = useAppTheme();

  return (
    <Screen safeAreaEdges={['top']}>
      <View style={$styles.container}>
        <HeaderWithBackButton onPress={() => navigation.goBack()} />
        <View>
          <Text>Restaurant Detail Screen</Text>
        </View>
      </View>
    </Screen>
  );
};

export default RestaurantDetailScreen;
