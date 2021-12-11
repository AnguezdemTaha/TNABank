import { Text as DefaultText, StyleSheet } from 'react-native';
import * as React from 'react';

type TextStyleProps = {
    variant?: 'title' | 'subTitle' | 'paragraph';
    textAlign?: 'left' | 'right' | 'center' | 'auto' | 'justify';
    capitalize?: boolean;
};

enum TextSize {
    title = 20,
    subTitle = 16,
    paragraph = 14,
}

type TextProps = DefaultText['props'];
export type Props = TextProps & TextStyleProps;

const Text: React.FC<Props> = (props: Props) => {
    const {
        style,
        variant,
        textAlign,
        capitalize,
        ...otherProps
    } = props;

    const styles = React.useMemo(
        () => stylesSheet({ textAlign, variant, capitalize }),
        [textAlign, variant],
    );

    return (
        <DefaultText
            style={[styles.text, style]}
            {...otherProps}
        />
    );
};

const stylesSheet = (style: TextStyleProps) =>
    StyleSheet.create({
        text: {
            textAlign: style?.textAlign || 'center',
            fontSize: (style?.variant && TextSize[style.variant]) || 14,
            fontWeight: style?.variant === 'title' ? '700' : 'normal',
            textTransform: style?.capitalize ? 'capitalize' : 'none',
        },
    });

export default Text;
