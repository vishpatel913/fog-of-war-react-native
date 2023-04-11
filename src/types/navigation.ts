import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type StackParamList = {
  Home: undefined;
  Auth: undefined;
};

export type StackNavigateProps = NativeStackNavigationProp<StackParamList>;
