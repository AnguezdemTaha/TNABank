import React from 'react';
import { StyleSheet, Pressable, PressableProps, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { NavigationStackProp } from 'react-navigation-stack';
import Text from './Text';
import Colors from '../Constants/Colors';

type HeaderTitleProps = {
  title?: string;
  colorOnPress?: string;
  navigation: NavigationStackProp;
  withBack?: boolean;
};
export type HeaderProps = PressableProps & HeaderTitleProps & React.ComponentProps<typeof Text>;

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { style, title, colorOnPress, onPress, navigation, withBack, ...otherProps } = props;

  return (
    <View style={[styles.container, style]}>
      {withBack && (
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? colorOnPress : '#F4F555',
            },
            styles.pressable,
          ]}
          onPress={() => {
            navigation.goBack();
          }}
          {...otherProps}
        >
          <AntDesign name="left" size={28} color="#000000" />
        </Pressable>
      )}
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      <AntDesign style={styles.setting} name="setting" size={24} color="black" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    marginBottom: 10,
    backgroundColor: Colors.white,
    borderBottomColor: Colors.primary,
  },
  pressable: {
    borderRadius: 8,
    backgroundColor: 'transparent',
  },
  linkText: {
    paddingHorizontal: 10,
  },
  logo: {
    flex: 0.2,
    width: 50,
    maxHeight: 30,
    resizeMode: 'stretch',
  },
  setting: {
    alignSelf: 'flex-end',
  },
});
export default Header;
