import { StyleSheet } from 'react-native';
import { theme } from 'config/theme';
import { isiOS } from 'helper/utils';

const { colors } = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryImageBackgroundColor,
  },
  imageView: {
    margin: 10,
    backgroundColor: colors.secondaryImageBackgroundColor,
  },
  actionButtonContainer: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bottomToolBar: {
    position: 'absolute',
    bottom: isiOS ? 30 : 0,
    left: 0,
    height: 60,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  downloadIconContainer: {
    marginHorizontal: 10,
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  downloadIcon: {
    width: 25,
    height: 25,
    tintColor: 'white',
  },
  progressBarContainer: {
    height: 10,
    width: '100%',
    justifyContent: 'flex-end',
  },
});

export default styles;
