import React, {useEffect, useCallback} from 'react';
import {
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';

import {getGalleryImages} from 'redux/actions/photoGalleryActions';
import {theme} from 'config/theme';
import styles from './styles';

const {colors} = theme;

// Photo Card Component
const PhotoCard = ({photo, onSelectPhoto}) => {
  return (
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={() => onSelectPhoto(photo)}>
      <FastImage
        style={styles.image}
        source={{
          uri: photo.download_url,
          cache: FastImage.cacheControl.immutable,
          priority: FastImage.priority.normal,
        }}
      />
    </TouchableOpacity>
  );
};

/*
 * Home Screen
 */
const Home = ({navigation}) => {
  const pageSize = 12;
  const dispatch = useDispatch();
  const imageList = useSelector(state => state.galleryReducer.photoList);
  const page = useSelector(state => state.galleryReducer.page);
  const hasNextPage = useSelector(state => state.galleryReducer.hasNextPage);

  useEffect(() => {
    if (!imageList) {
      getImageList();
    }
  }, [imageList, getImageList]);

  const getImageList = useCallback(() => {
    const payload = {
      page: page + 1,
      limit: pageSize,
    };
    dispatch(getGalleryImages(payload));
  }, [dispatch, page]);

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  const handlePhotoSelect = photo => {
    navigation.navigate('PhotoView', {
      item: photo,
      itemList: imageList,
    });
  };

  const renderImageList = images => {
    return images.map(image => {
      return (
        <PhotoCard
          key={image.id}
          photo={image}
          onSelectPhoto={photo => {
            handlePhotoSelect(photo);
          }}
        />
      );
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.primaryHeaderBackgroundColor}
        barStyle="dark-content"
      />

      <ScrollView
        contentContainerStyle={styles.imageListContainer}
        onScroll={({nativeEvent}) => {
          if (isCloseToBottom(nativeEvent)) {
            if (hasNextPage) {
              getImageList();
            }
          }
        }}>
        {(imageList && renderImageList(imageList)) || (
          <View style={styles.emptyListContainer}>
            <Text>No Images Found</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
