import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    marginVertical:20,
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 19,
    marginRight: 11,
  },
  text: {
    color: colors.white,
    paddingVertical: 20,
    fontWeight: '300',
  },
});
