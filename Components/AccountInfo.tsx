import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Text from './Text';
import Colors from '../Constants/Colors';
import View from './View';

type AccountProps = {
  userName: string;
  account: any;
  index?: number;
  setValue?: any;
};
export type AccountInfosProps = AccountProps & React.ComponentProps<typeof View>;

const AccountInfo: React.FC<AccountInfosProps> = (props: AccountInfosProps) => {
  const { style, account, index, userName, setValue, ...otherProps } = props;
  console.log('account :', account);
  return (
    <TouchableOpacity
      style={styles.accountView}
      activeOpacity={0.2}
      onPress={() => {
        setValue(account);
      }}
      key={index}
    >
      <View style={styles.accountInfos}>
        <Text textAlign="left" style={styles.accountUserName}>
          Monsieur {userName.toUpperCase()}
        </Text>
        <Text style={styles.accountNum}> {account.accountNumber} </Text>
      </View>
      <Text style={styles.accountSold}> {account.sold} MAD </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  accountView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: Colors.green,
    borderBottomWidth: 1,
    backgroundColor: Colors.white,
    marginBottom: 10,
  },
  accountInfos: {},
  accountUserName: {
    color: Colors.secondary,
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  accountNum: {
    color: Colors.black,
    fontSize: 14,
    marginLeft: 8,
    alignSelf: 'flex-start',
  },
  accountSold: {
    color: Colors.black,
    fontSize: 14,
  },
});
export default AccountInfo;
