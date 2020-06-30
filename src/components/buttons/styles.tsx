import { StyleSheet } from 'react-native';
import { colors } from 'constants/Colors';

const styles = StyleSheet.create({
  baseButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    height: 50,
  },
  baseButtonText: {
    fontFamily: 'Raleway-Bold',
    fontSize: 20,
  },
});

export default StyleSheet.create({
  buttonContainer: {
    ...styles.baseButton,
    backgroundColor: colors.orange,
  },
  buttonContainer2: {
    ...styles.baseButton,
    backgroundColor: colors.white,
    borderColor: colors.orange,
    borderWidth: 1,
  },
  buttonTextWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    ...styles.baseButtonText,
    color: colors.white,
  },
  buttonText2: {
    ...styles.baseButtonText,
    color: colors.orange,
  },
  buttonIconContainer: {
    height: 50,
    width: 50,
    backgroundColor: colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    margin: 10,
  },
  iconStyle: {
    height: 30,
    width: 30,
  },
});
