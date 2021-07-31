import React from 'react';
import {View, Image, Dimensions} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

import styles from './styles';

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
        <Image
          source={{uri: item.download_url}}
          style={[
            styles.imageView,
            {
              width: screenWidth - 20,
              height: imageHeight,
            },
          ]}
        />
      </ImageZoom>
    </View>
  );
};

export default PhotoView;
