import {StyleSheet} from 'react-native';
import {theme} from 'config/theme';

const {colors} = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryImageBackgroundColor,
  },
  imageView: {
    margin: 10,
  },
});

export default styles;
