import * as React from 'react';
import {
  TextInput as DefaultTextInput,
} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type TextInputProps = {
    color?: any;
    fullWidth?: boolean;
    leftIcon?: {
        name: React.ComponentProps<typeof MaterialIcons>['name'];
        color?: string;
    };
};
export type Props = React.ComponentProps<typeof DefaultTextInput> &
    TextInputProps;

const TextInput: React.FC<Props> = (props: Props) => {
  const {
    color = '#222222',

    style,

    dense = true,

    mode = 'flat',

    textAlign = 'left',

    fullWidth,
    leftIcon,
    ...otherProps
  } = props;

  return (
        <View
            style={[styles.textInput, style, fullWidth && styles.fullWidth]}
        >
            <View style={[styles.container]}>
                <DefaultTextInput
                    mode={mode}
                    underlineColor={color}
                    selectionColor="#456789"
                    dense={dense}
                    style={[{ textAlign }]}
                    left={
                        leftIcon?.name && (
                            <DefaultTextInput.Icon
                                name={() => (
                                    <MaterialIcons
                                        name={leftIcon.name}
                                        size={24}
                                        color={leftIcon?.color ? leftIcon?.color : '#000000'}
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
  textInput: {
    maxWidth: 360,
    minWidth: 50,
  },
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
