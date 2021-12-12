import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as DefaultButton } from 'react-native-paper';

const Button = (props: any) => {
  const { style, color, mode = 'contained', fullWidth, ...otherProps } = props;

  const styles = React.useMemo(() => stylesFunction(color), [color]);

  return (
    <DefaultButton
      mode={mode}
      color={color}
      style={[styles.button, style, fullWidth && [styles.fullWidth, styles.paddingVertical]]}
      uppercase={false}
      {...otherProps}
    />
  );
};

const stylesFunction = (color: string) =>
  StyleSheet.create({
    paddingVertical: {
      paddingVertical: 2,
    },
    button: {
      fontSize: 2,
      borderColor: color,
    },
    fullWidth: {
      width: '100%',
    },
  });

export default Button;
