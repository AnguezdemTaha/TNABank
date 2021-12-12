import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginView: {
    flex: 0.8,
    alignItems: 'center',
    alignContent: 'center',
    maxHeight: 600,
    justifyContent: 'space-around',
  },
  logo: {
    minHeight: 150,
    width: 260,
    resizeMode: 'contain',
  },
  loginInput: {
    width: '90%',
    alignItems: 'center',
    maxWidth: 400,
  },
  errorView: {
    flex: 0.2,
    width: '100%',
    alignItems: 'center',
  },
  accountInput: {
    marginBottom: 12,
  },
  helperText: {
    fontSize: 15,
    alignSelf: 'center',
    marginBottom: 18,
  },
});

export default styles;
