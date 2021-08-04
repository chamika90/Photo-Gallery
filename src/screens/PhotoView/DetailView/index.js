import React from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';

import BottomModal from 'components/BottomModal';
import styles from './styles';

const DetailRow = ({title, value}) => {
  return (
    <View style={styles.detailContainer}>
      <Text style={styles.detailTitle}>{title}</Text>
      {(title === 'Web' && (
        <Text
          style={styles.linkText}
          onPress={() => {
            Linking.openURL(value);
          }}>
          {value}
        </Text>
      )) || <Text style={styles.detailValue}>{value}</Text>}
    </View>
  );
};

const DetailView = ({isVisible, item, onClose, onDownloadPress}) => {
  return (
    <BottomModal isVisible={isVisible} onClose={() => onClose()}>
      <View>
        <DetailRow title={'Author'} value={item.author} />
        <DetailRow title={'Web'} value={item.url} />
        <TouchableOpacity
          style={styles.downloadButton}
          onPress={() => onDownloadPress()}>
          <Text style={styles.downloadText}>Download</Text>
        </TouchableOpacity>
      </View>
    </BottomModal>
  );
};

export default DetailView;
