import React from 'react';
import {View, Dimensions} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import FastImage from 'react-native-fast-image';

import styles from './styles';

/*
 * Photo View Screen
 */
const PhotoView = ({route}) => {
  const {item} = route.params;

  const aspectRatio = item.height / item.width;
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const imageHeight = aspectRatio * (screenWidth - 20);

  return (
    <View style={styles.container}>
      <ImageZoom
        cropWidth={screenWidth}
        cropHeight={screenHeight}
        imageWidth={screenWidth}
        imageHeight={imageHeight}>
        <FastImage
          style={[
            styles.imageView,
            {
              width: screenWidth - 20,
              height: imageHeight,
            },
          ]}
          source={{
            uri: item.download_url,
            cache: FastImage.cacheControl.immutable,
            priority: FastImage.priority.normal,
          }}
        />
      </ImageZoom>
    </View>
  );
};

export default PhotoView;
