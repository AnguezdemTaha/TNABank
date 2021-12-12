import { View as DefaultView } from 'react-native';
import * as React from 'react';
import Colors from '../Constants/Colors';

type ViewProps = DefaultView['props'];

export default (props: ViewProps) => {
  const { style, ...otherProps } = props;
  const backgroundColor = Colors.white;

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
};
