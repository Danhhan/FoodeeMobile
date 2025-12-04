import { useCallback, useEffect, useRef } from 'react';
import {
  FlatList,
  Image,
  ImageStyle,
  Pressable,
  View,
  ViewStyle,
} from 'react-native';

import { FeedbackOverlay } from '@/components/FeedbackOverlay';
import { useAnimatedOverlay } from '@/components/FeedbackOverlay/useAnimatedOverlay';
import { Icon } from '@/components/Icon';
import { Text } from '@/components/Text';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { ThemedStyle } from '@/theme/types';
import { IBanner } from '@/types/store';

const BannerItem = (props: IBanner) => {
  const { title, buttonText, backgroundColor, imageUrl } = props;
  const {
    themed,
    theme: { colors },
  } = useAppTheme();

  const { onPressIn, onPressOut, overlayOpacity } = useAnimatedOverlay();
  return (
    <Pressable
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={[themed($bannerItem), { backgroundColor }]}
    >
      <FeedbackOverlay overlayOpacity={overlayOpacity} />
      <View style={themed($bannerContent)}>
        <Text weight="bold" size="xs" style={themed($bannerTitle)}>
          {title}
        </Text>
        <View style={themed($bannerButton)}>
          <Text size="xxs">
            {buttonText}
            <Icon
              color={colors.palette.black500}
              icon="arrow-right"
              size={12}
            />
          </Text>
        </View>
      </View>
      <Image style={themed($bannerImage)} source={imageUrl} />
    </Pressable>
  );
};

interface BannerListProps {
  banners: IBanner[];
}

export const BannerList = ({ banners }: BannerListProps) => {
  const { themed } = useAppTheme();
  const flatListRef = useRef<FlatList>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoScroll = useCallback(() => {
    let currentIndex = 0;
    intervalRef.current = setInterval(() => {
      currentIndex = (currentIndex + 1) % banners.length;
      flatListRef.current?.scrollToIndex({
        index: currentIndex,
        animated: true,
      });
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (banners.length > 1) {
      startAutoScroll();
    }
    return () => stopAutoScroll();
  }, [banners, startAutoScroll]);

  return (
    <FlatList
      ref={flatListRef}
      data={banners}
      keyExtractor={item => item.id}
      renderItem={({ item }) => {
        const { title, buttonText, backgroundColor, imageUrl } = item;
        return (
          <BannerItem
            id={item.id}
            title={title}
            buttonText={buttonText}
            backgroundColor={backgroundColor}
            imageUrl={imageUrl}
          />
        );
      }}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScrollBeginDrag={stopAutoScroll}
      onScrollEndDrag={startAutoScroll}
      contentContainerStyle={themed($flatListContent)}
    />
  );
};

const $flatListContent: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  gap: spacing.xs,
});

const $bannerItem: ThemedStyle<ViewStyle> = () => ({
  borderRadius: 12,
  overflow: 'hidden',
  ...$styles.row,
  ...$styles.justifyContentBetween,
});
const $bannerContent: ThemedStyle<ViewStyle> = () => ({
  ...$styles.justifyContentBetween,
  paddingVertical: 15,
  paddingLeft: 18,
});
const $bannerTitle: ThemedStyle<ViewStyle> = () => ({
  width: 208,
  maxWidth: 180,
});
const $bannerButton: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.palette.white500,
  minWidth: 104,
  maxWidth: 136,
  height: 24,
  borderRadius: 10,
  ...$styles.center,
});

const $bannerImage: ThemedStyle<ImageStyle> = () => ({
  width: 132,
  height: 160,
});
