import {StyleSheet} from 'react-native';
import {theme} from 'config/theme';

const {colors} = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.primaryImageBackgroundColor,
  },
  imageListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  imageContainer: {
    margin: 5,
  },
  image: {
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
