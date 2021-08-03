import React from 'react';
import {View, Text} from 'react-native';

import BottomModal from 'components/BottomModal';
import styles from './styles';

const DetailRow = ({title, value}) => {
  return (
    <View style={styles.detailContainer}>
      <Text style={styles.detailTitle}>{title}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  );
};

const DetailView = ({isVisible, item, onClose}) => {
  return (
    <BottomModal isVisible={isVisible} onClose={() => onClose()}>
      <View>
        <DetailRow title={'Author'} value={item.author} />
        <DetailRow title={'Url'} value={item.url} />
        <DetailRow title={'Download Url'} value={item.download_url} />
      </View>
    </BottomModal>
  );
};

export default DetailView;
