import { StyleSheet } from 'react-native';
import { colors } from 'constants/Colors';

export default StyleSheet.create({
  inputText: {
    width: '100%',
    height: 50,
    marginTop: 20,
    paddingHorizontal: 30,
    borderRadius: 15,
    backgroundColor: colors.white,
    // fontSize: 20,
    color: colors.orange,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  eyeIcon: {
    height: 30,
    width: 30,
  },
  input: {
    fontSize: 20,
    color: colors.orange,
  },
});
