import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const imageWidth = Dimensions.get('window').width / 2;

const imageSizes = {
  smallContainerSize: imageWidth / 3,
  smallImageSize: imageWidth / 4,
  largeContainerSize: imageWidth,
  largeImageSize: imageWidth / 3,
};

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: imageSizes.largeContainerSize,
    height: imageSizes.largeContainerSize,
  },
  logo: {
    width: imageSizes.largeImageSize,
    tintColor: colors.primaryBlue,
  },
  text: {
    color: colors.white,
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 15,
    fontWeight: '600',
  },
});
