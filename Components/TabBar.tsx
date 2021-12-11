import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as React from 'react';
import Text from './Text';

type TabsProps = {
    color?: 'accent' | 'primary' | 'error';
    uncheckedColor?: string;
    screens?: any;
    value: number;
    setValue: (index: number) => void;
    renderProps?: any;
};
export type Props = TabsProps;

const TabBar = (props: Props) => {
    const {
        color = '#000000',
        uncheckedColor,
        screens,
        value,
        setValue,
        renderProps,
    } = props;

    const defaultTextColor = '#000000';
    const inputRange = renderProps.navigationState.routes.map(
        (x: any, i: number) => i,
    );
    return (
        <View style={styles.tabBar}>
            {renderProps.navigationState.routes.map(
                (route: { key: string; title: string }, i: number) => {
                    const currentColor = inputRange.map((inputIndex: number) =>
                        inputIndex === i ? color : defaultTextColor,
                    );
                    const borderBottom = inputRange.map(
                        (inputIndex: number) => inputIndex === i,
                    );
                    return (
                        <TouchableOpacity
                            key={route.key}
                            style={[
                                styles.tabItem,
                                {
                                    borderBottomColor: borderBottom[value]
                                        ? (color && color) || '#234512'
                                        : uncheckedColor || defaultTextColor,
                                },
                            ]}
                            onPress={() => setValue(i)}
                        >
                            <Text variant="subTitle" style={{ color: currentColor[value] }}>
                                {route.title}
                            </Text>
                        </TouchableOpacity>
                    );
                },
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBar: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        flexDirection: 'row',
        borderBottomWidth: 2,
        backgroundColor: 'transparent',
    },
    notificationIcon: {
        paddingBottom: 14,
    },
});

export default TabBar;
