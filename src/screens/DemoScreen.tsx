import { useAppTheme } from '@/theme/context';
import React from 'react';
import { Text, View } from 'react-native';

function DemoScreen() {
  const { themed } = useAppTheme();
  return (
    <View>
      <Text
        style={themed(({ typography }) => ({
          fontFamily: typography.primary.normal,
        }))}
      >
        Demo screen
      </Text>
    </View>
  );
}

export default DemoScreen;
