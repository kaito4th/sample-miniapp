import type { StyleProp, ViewStyle, TextStyle } from 'react-native';
export type testDataIn = {
  type: 'type a' | 'type b' | 'type c';
  points: string | number;
};

export type TestScreenOneDataIn = {
  points: string | number;
  text: string;
  listContainerStyle: StyleProp<ViewStyle>;
  overlayStyle: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
};
