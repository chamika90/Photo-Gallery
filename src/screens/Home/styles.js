import { StyleSheet } from 'react-native';
import { theme } from 'config/theme';

const { colors } = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.primaryImageBackgroundColor,
  },
  imageListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    margin: 5,
    borderRadius: 10,
  },
  image: {
    borderRadius: 10,
    width: 150,
    height: 150,
    backgroundColor: colors.secondaryImageBackgroundColor,
  },
  emptyListContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyListMessage: {
    color: colors.secondaryImageBackgroundColor,
  },
});

export default styles;
