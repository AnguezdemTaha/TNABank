import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { MaterialIcons, Ionicons, AntDesign } from '@expo/vector-icons';
import Text from './Text';
import Colors from '../Constants/Colors';

type AccountProps = {
  userName: string;
  sold: NavigationStackProp;
};
export type AccountInfosProps = AccountProps & React.ComponentProps<typeof View>;

const ProfileHeader: React.FC<AccountInfosProps> = (props: AccountInfosProps) => {
  const { style, userName, ...otherProps } = props;

  return (
    <View style={styles.titleView}>
      <MaterialIcons name="face" size={60} color="black" />
      <View>
        <Text style={styles.userName} variant="title">
          {userName.toUpperCase()}
        </Text>

        <View style={styles.email}>
          <AntDesign name="mail" size={24} color="black" />
          <Text style={styles.text} variant="paragraph">
            Exemple@exemple.exemple
          </Text>
        </View>
        <View style={styles.phone}>
          <AntDesign name="phone" size={24} color="black" />
          <Text style={styles.text} variant="paragraph">
            +212666666666
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  titleView: {
    width: '90%',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.secondary,
    marginVertical: 20,
  },
  userName: {
    color: Colors.secondary,
    fontSize: 16,
    fontStyle: 'italic',
  },
  text: {
    color: Colors.black,
  },
  email: {
    flexDirection: 'row',
  },
  phone: {
    flexDirection: 'row',
  },
});
export default ProfileHeader;
