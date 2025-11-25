import { useRef } from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Icon } from '@/components/Icon';
import Screen from '@/components/Screen';
import { AppStackScreenProps } from '@/navigators/navigationTypes';

interface IRestaurantDetailScreenProps
  extends AppStackScreenProps<'Restaurant'> {}

const RestaurantDetailScreen = ({
  navigation,
}: IRestaurantDetailScreenProps) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  /** ----- SMALL NAME (in header) ----- */
  const smallNameOpacity = scrollY.interpolate({
    inputRange: [80, 140], // scroll từ 80 → 140
    outputRange: [0, 1], // opacity từ 0 → 1
    extrapolate: 'clamp',
  });

  return (
    <Screen safeAreaEdges={['top']}>
      <View style={styles.container}>
        {/* TOP HEADER */}
        <View style={styles.topHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              containerStyle={{ alignItems: 'center' }}
              icon="back"
              size={24}
            />
          </TouchableOpacity>

          {/* ONLY FADE IN TITLE */}
          <Animated.Text
            style={[styles.smallHeaderName, { opacity: smallNameOpacity }]}
          >
            The Coffee House
          </Animated.Text>
        </View>

        {/* CONTENT */}
        <Animated.ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true },
          )}
        >
          {/* BIG PROFILE SECTION (không animation) */}
          <View style={styles.bigSection}>
            <Image
              source={{ uri: 'https://i.imgur.com/3YcQYxO.png' }}
              style={styles.avatar}
            />
            <Text style={styles.bigName}>The Coffee House</Text>
          </View>

          {/* MAIN CONTENT */}
          <View style={{ height: 1200, backgroundColor: '#f5f5f5' }} />
        </Animated.ScrollView>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  smallHeaderName: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 12,
  },
  bigSection: {
    alignItems: 'center',
    paddingTop: 100,
    paddingBottom: 20,
    backgroundColor: 'white',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 120,
    marginBottom: 10,
  },
  bigName: {
    fontSize: 32,
    fontWeight: '700',
  },
});

export default RestaurantDetailScreen;
