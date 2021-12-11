import React, { useMemo, useEffect, useContext, useState } from 'react';
import {Image, StatusBar, TouchableOpacity, View} from 'react-native';
import { StyleSheet } from 'react-native';
import { Button as DefaultButton } from 'react-native-paper';

const Button = (props: any) => {
    const {
        style,
        color = '#006C67',
        mode = 'contained',
        fullWidth,
        ...otherProps
    } = props;

    const styles = React.useMemo(() => stylesFunction(color), [
        color,
    ]);

    return (
        <DefaultButton
            mode={mode}
            color={color}
            style={[
                styles.button,
                style,
                fullWidth && [styles.fullWidth, styles.paddingVertical],
            ]}
            uppercase={false}
            {...otherProps}
        />
    );
};

const stylesFunction = (color: string) =>
    StyleSheet.create({
        roundness: {
            borderRadius: 50,
        },
        paddingVertical: {
            paddingVertical: 2,
        },
        button: {
            fontSize: 2,
            maxWidth: 360,
            borderColor: color,
        },
        shadow: {
            shadowColor: '#000000',
            shadowOffset: {
                width: 2,
                height: 3,
            },
            shadowOpacity: 0.2,
            shadowRadius: 5.46,
            elevation: 4,
        },
        fullWidth: {
            width: '100%',
        },
    });

export default Button;
