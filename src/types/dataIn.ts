import type { StyleProp, ViewStyle, TextStyle } from 'react-native';

export type TestScreenOneDataIn = {
  type: 'type a' | 'type b';
  points: string | number;
  text: string;
  listContainerStyle?: StyleProp<ViewStyle>;
  overlayStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};
