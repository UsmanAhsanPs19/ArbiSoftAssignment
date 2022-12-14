import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 8;

export default StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    width: '90%',
    height: INPUT_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: BORDER_RADIUS,
  },
  containerDisabled: {
    backgroundColor: colors.lightGray,
  },
  buttonContainer: {
    height: INPUT_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 20,
    paddingHorizontal: 16,
    color: colors.primaryBlue,
    fontFamily:'Roboto-Regular'
  },
  separator: {
    height: INPUT_HEIGHT,
    width: StyleSheet.hairlineWidth,
    backgroundColor: colors.border,
  },
  input: {
    flex: 1,
    height: INPUT_HEIGHT,
    borderTopRightRadius: BORDER_RADIUS,
    paddingHorizontal: 8,
    color: colors.inputText,
    fontSize: 18,
    fontFamily:'Roboto-Regular'
  },
});
