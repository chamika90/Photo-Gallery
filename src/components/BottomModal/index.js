import React from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';

import styles from './styles';

/*
 * Bottom Modal component
 */
const BottomModal = ({isVisible, children, onClose}) => {
  return (
    <Modal
      isVisible={isVisible}
      style={styles.bottomModal}
      onBackdropPress={() => {
        onClose();
      }}
      onBackButtonPress={onClose}>
      <View style={styles.content}>
        <View style={styles.childrenWrapper}>{children}</View>
      </View>
    </Modal>
  );
};

export default BottomModal;
