import * as React from 'react';
import { TextInput as DefaultTextInput } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../Constants/Colors';

type TextInputProps = {
  color?: any;
  fullWidth?: boolean;
  leftIcon?: {
    name: React.ComponentProps<typeof MaterialIcons>['name'];
    color?: string;
  };
};
export type Props = React.ComponentProps<typeof DefaultTextInput> & TextInputProps;

const TextInput: React.FC<Props> = (props: Props) => {
  const {
    color = Colors.primary,
    style,
    dense = true,
    mode = 'flat',
    textAlign = 'left',
    fullWidth,
    leftIcon,
    ...otherProps
  } = props;

  return (
    <View style={[styles.textInput, style, fullWidth && styles.fullWidth]}>
      <View style={[styles.container]}>
        <DefaultTextInput
          mode={mode}
          underlineColor={color}
          selectionColor={Colors.secondary}
          dense={dense}
          style={[{ textAlign }]}
          left={
            leftIcon?.name && (
              <DefaultTextInput.Icon
                name={() => (
                  <MaterialIcons
                    name={leftIcon.name}
                    size={24}
                    color={leftIcon?.color ? leftIcon?.color : Colors.black}
                  />
                )}
              />
            )
          }
          {...otherProps}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {},
  container: {
    justifyContent: 'center',
    width: '100%',
  },
  helperText: {
    alignSelf: 'center',
  },
  fullWidth: {
    width: '100%',
  },
});

export default React.memo(TextInput);
