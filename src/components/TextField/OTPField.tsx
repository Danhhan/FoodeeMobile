import { useEffect, useRef } from 'react';
import {
  KeyboardTypeOptions,
  StyleProp,
  // eslint-disable-next-line no-restricted-imports
  TextInput,
  View,
  ViewStyle,
} from 'react-native';

import { TextField } from '@/components/TextField';
import { useAppTheme } from '@/theme/context';
import { ThemedStyle } from '@/theme/types';

interface OTPFieldProps {
  values: string[];
  onChange: (values: string[]) => void;
  length?: number;
  containerStyle?: StyleProp<ViewStyle>;
  keyboardType?: KeyboardTypeOptions | undefined;
  status?: 'error';
}

const DEFAULT_LENGTH = 4;

export const OTPField = (props: OTPFieldProps) => {
  const inputRefs = useRef<TextInput[]>([]);
  const { themed } = useAppTheme();
  const {
    onChange,
    length = DEFAULT_LENGTH,
    values,
    containerStyle,
    keyboardType = 'numeric',
  } = props;

  const onChangeOtp = (value: string, index: number) => {
    const newValues = [...values];
    newValues[index] = value;
    onChange(newValues);
    if (value && index < values.length - 1) {
      inputRefs.current[index + 1].focus();
    }
    if (index === values.length - 1 && value) {
      inputRefs.current[index].blur();
    }
  };

  const onKeyPress = (event: any, index: number) => {
    if (event.nativeEvent.key === 'Backspace' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    if (!values[0]) {
      inputRefs.current[0].focus();
    }
  }, [values]);

  return (
    <View style={[themed($container), containerStyle]}>
      {Array.from({ length }).map((_, index) => (
        <TextField
          ref={ref => {
            if (ref) inputRefs.current[index] = ref;
          }}
          key={index}
          containerStyle={themed($containerField)}
          style={themed($inputField)}
          maxLength={1}
          keyboardType={keyboardType}
          autoCapitalize="none"
          value={values[index]}
          onChangeText={newVal => {
            onChangeOtp(newVal, index);
          }}
          onKeyPress={event => onKeyPress(event, index)}
          status={props.status}
        />
      ))}
    </View>
  );
};

const $container: ThemedStyle<ViewStyle> = () => ({
  flexDirection: 'row',
  gap: 8,
});

const $containerField: ThemedStyle<ViewStyle> = () => ({
  height: 50,
  width: 50,
});

const $inputField: ThemedStyle<ViewStyle> = () => ({
  paddingLeft: 7,
});
