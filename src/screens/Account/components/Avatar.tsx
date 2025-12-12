import { Image, ImageStyle } from 'react-native';

type Sizes = keyof typeof $sizeStyles;

interface AvatarProps {
  size: Sizes;
}

export const Avatar = ({ size }: AvatarProps) => {
  return (
    <Image
      style={[$avatar, $sizeStyles[size]]}
      source={require('@/assets/images/default-avatar.png')}
      resizeMode="contain"
    />
  );
};

const $avatar: ImageStyle = {
  borderRadius: 100,
};

const $sizeStyles = {
  sm: { width: 66, height: 66 } satisfies ImageStyle,
  md: { width: 84, height: 84 } satisfies ImageStyle,
  lg: { width: 112, height: 112 } satisfies ImageStyle,
};
