import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {theme} from 'config/theme';

const {colors} = theme;

/*
 * Toast component
 */
const Toast = ({text1, settings}) => {
  return (
    <View style={[styles.container, {backgroundColor: settings.color}]}>
      <Text style={styles.message}>{text1}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 26,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  message: {
    color: colors.primaryTextColor,
  },
});

export default Toast;
