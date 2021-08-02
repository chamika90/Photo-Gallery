import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Toast = ({text1, settings}) => {
  console.log('messaggeeg ==>', text1);
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
    color: 'white',
  },
});

export default Toast;
