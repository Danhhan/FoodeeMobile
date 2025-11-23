import { Image, ImageStyle, View, ViewStyle } from 'react-native';

import { Button } from '@/components/Button';
import { Text } from '@/components/Text';
import { useAppTheme } from '@/theme/context';
import { ThemedStyle } from '@/theme/types';

interface AuthSocialProps {
  mode: 'signIn' | 'signUp';
  onPressButtonEmail: () => void;
}
const AuthSocial = ({ mode, onPressButtonEmail }: AuthSocialProps) => {
  const {
    theme: { colors },
    themed,
  } = useAppTheme();

  const TextMode = mode === 'signIn' ? 'Sign In' : 'Sign Up';

  return (
    <View style={themed($buttonContainer)}>
      <Button
        preset="default"
        text={`${TextMode} with email`}
        onPress={onPressButtonEmail}
      />
      <Button preset="default">
        <View style={themed($socialIconContainer)}>
          <Image
            style={themed($socialIcon)}
            source={require('@/assets/icons/facebook.png')}
          />
          <Text color={colors.palette.neutral900} weight="bold">
            {`${TextMode} with Facebook`}
          </Text>
        </View>
      </Button>
      <Button preset="default">
        <View style={themed($socialIconContainer)}>
          <Image
            style={themed($socialIcon)}
            source={require('@/assets/icons/google.png')}
          />
          <Text color={colors.palette.neutral900} weight="bold">
            {`${TextMode} with Google`}
          </Text>
        </View>
      </Button>
      <Button preset="default">
        <View style={themed($socialIconContainer)}>
          <Image
            style={themed($socialIcon)}
            source={require('@/assets/icons/apple.png')}
          />
          <Text color={colors.palette.neutral900} weight="bold">
            {`${TextMode} with Apple`}
          </Text>
        </View>
      </Button>
    </View>
  );
};

const $buttonContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginTop: spacing.xxl,
  gap: spacing.sm,
});

const $socialIcon: ThemedStyle<ImageStyle> = () => ({
  width: 20,
  height: 20,
});

const $socialIconContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: spacing.sm,
});

export default AuthSocial;
