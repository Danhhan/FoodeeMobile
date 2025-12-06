import { Image, ImageStyle, TextStyle, View } from 'react-native';

import { Text } from '@/components/Text';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';
import { EAuthMethod } from '@/types/auth';

import { AuthMethod } from './AuthMethod';

interface AuthMethodSectionProps {
  onMethodSelect: (method: EAuthMethod) => void;
}
export const AuthMethodSection = ({
  onMethodSelect,
}: AuthMethodSectionProps) => {
  const { themed } = useAppTheme();
  return (
    <>
      <Image
        style={themed($bannerImage)}
        source={require('@/assets/images/auth-banner.png')}
        resizeMode="cover"
      />
      <View style={$styles.container}>
        <Text weight="bold" size="xl" style={themed($heading)}>
          Welcome to Uber eats
        </Text>
        <AuthMethod
          title="Email"
          icon={require('@/assets/icons/email.png')}
          onPress={() => onMethodSelect(EAuthMethod.email)}
        />
        <AuthMethod
          title="Google"
          icon={require('@/assets/icons/google.png')}
          onPress={() => {}}
        />
        <AuthMethod
          title="Apple"
          icon={require('@/assets/icons/apple.png')}
          onPress={() => {}}
        />
        <Text size="xxs" style={themed($termsText)}>
          By proceeding, you consent to get calls, Whatsapp or SMS messages,
          including by automated means, from uber and its affiliates to the
          number provided.
        </Text>
      </View>
    </>
  );
};

const $heading: ThemedStyle<TextStyle> = ({ spacing }) => ({
  marginVertical: spacing.md,
});

const $termsText: ThemedStyle<TextStyle> = ({ spacing }) => ({
  marginTop: spacing.xl,
});

const $bannerImage: ThemedStyle<ImageStyle> = () => ({
  height: 200,
  width: '100%',
});
