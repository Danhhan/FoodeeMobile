import {
  TextStyle,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';

import { Icon } from '@/components/Icon';
import { Text } from '@/components/Text';
import SearchField from '@/components/TextField/SearchField';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';

import { LocationItem } from './LocationItem';

export const Addresses = () => {
  const { themed } = useAppTheme();
  return (
    <>
      <View style={themed($row)}>
        <Text weight="bold" size="md">
          Time preference
        </Text>
        <LocationItem
          name="Deliver now"
          txtBtn="Schedule"
          icon="clock"
          btnType="button"
        />
      </View>
      <View style={themed($row)}>
        <SearchField />
        <Text
          style={themed(({ spacing }) => ({ marginTop: spacing.md }))}
          weight="bold"
          size="md"
        >
          Nearby
        </Text>
        <LocationItem
          name="San Francisco Bay Area"
          txtBtn="Enable"
          icon="location"
          btnType="button"
        />
      </View>
      <View>
        <Text style={$styles.container} weight="bold" size="md">
          Recent location
        </Text>
        <View style={themed([$recentItem, $activeRecent])}>
          <View style={themed($locationContent)}>
            <Icon icon="map" size={20} />
            <View>
              <Text>San Francisco Bay Area</Text>
              <Text weight="medium" style={themed($addressDetails)}>
                123 Main St
              </Text>
            </View>
          </View>
          <TouchableWithoutFeedback>
            <Icon containerStyle={themed($editIcon)} icon="edit" size={20} />
          </TouchableWithoutFeedback>
        </View>
        <View style={themed($recentItem)}>
          <View style={themed($locationContent)}>
            <Icon icon="map" size={20} />
            <View>
              <Text>San Francisco Bay Area</Text>
              <Text weight="medium" style={themed($addressDetails)}>
                123 Main St
              </Text>
            </View>
          </View>
          <TouchableWithoutFeedback>
            <Icon containerStyle={themed($editIcon)} icon="edit" size={20} />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </>
  );
};

const $recentItem: ThemedStyle<ViewStyle> = ({ colors }) => ({
  ...$styles.container,
  ...$styles.row,
  ...$styles.rowHCenter,
  ...$styles.justifyContentBetween,
  paddingVertical: 32,
  borderBottomWidth: 1,
  borderColor: colors.palette.gray500,
});

const $row: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
  ...$styles.container,
  borderBottomWidth: 1,
  borderColor: colors.palette.gray500,
  paddingBottom: spacing.md,
  marginBottom: spacing.md,
});

const $activeRecent: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.palette.gray500,
});

const $editIcon: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginRight: spacing.md,
});

const $locationContent: ThemedStyle<ViewStyle> = () => ({
  ...$styles.row,
  ...$styles.rowHCenter,
  gap: 22,
});
const $addressDetails: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.palette.gray800,
});
