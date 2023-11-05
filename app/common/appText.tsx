import {StyleSheet, Text, TextStyle} from 'react-native';

export const AppText = ({
  text,
  size,
  color,
  fontWeight,
}: {
  text: string;
  size?: number;
  color?: string;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
}): JSX.Element => {
  return (
    <Text style={{fontSize: size, color: color, fontWeight: fontWeight}}>
      {text}
    </Text>
  );
};
