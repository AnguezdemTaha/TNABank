import { StyleSheet } from 'react-native';
import Colors from '../../../Constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
  },
  userName: {
    color: Colors.secondary,
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  accountList: {
    width: '100%',
    alignItems: 'center',
  },
  loginView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  InputAccount: {
    marginBottom: 12,
  },
  scrollContainer: {
    width: '80%',
  },
  transferButton: {
    marginBottom: 40,
  },

  accountView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 10,
    width: '100%',
  },
  accountInfos: {},
  transferDate: {
    fontSize: 14,
    color: '#345654',
  },
  accountNum: {
    color: Colors.black,
    fontSize: 14,
    marginLeft: 8,
  },
  accountSold: {
    color: Colors.black,
  },
});

export default styles;
