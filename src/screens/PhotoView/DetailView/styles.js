import {StyleSheet} from 'react-native';

import {theme} from 'config/theme';

const {colors} = theme;

const styles = StyleSheet.create({
  detailContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  detailTitle: {
    flex: 2,
    fontWeight: 'bold',
  },
  detailValue: {flex: 3},
  downloadButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
    marginHorizontal: 30,
  },
  downloadText: {
    color: colors.primaryButtonTextColor,
    fontWeight: 'bold',
  },
  linkText: {
    flex: 3,
    color: colors.primaryLinkColor,
    padding: 5,
    textDecorationLine: 'underline',
  },
});

export default styles;
