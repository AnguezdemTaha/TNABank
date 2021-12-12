import { StyleSheet } from 'react-native';
import Colors from '../../Constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  accountList: {
    flex: 0.7,
    maxHeight: '70%',
    paddingTop: 16,
    paddingBottom: 26,
    width: '80%',
  },
  accountsText: {
    color: Colors.green,
    paddingBottom: 26,
  },
  scrollContainer: {},
  buttonView: {
    width: '90%',
    alignContent: 'center',
    alignItems: 'center',
    flex: 0.2,
    flexDirection: 'column-reverse',
  },
  transferButton: {
    marginBottom: 40,
  },
  accountInfos: {},
});

export default styles;
