import { View } from 'react-native';

import Screen from '@/components/Screen';
import { Text } from '@/components/Text';

interface IHomeScreenProps {}

const HomeScreen: React.FC<IHomeScreenProps> = () => {
  return (
    <Screen safeAreaEdges={['top', 'bottom']}>
      <View>
        <Text>Home screen</Text>
      </View>
    </Screen>
  );
};

export default HomeScreen;
