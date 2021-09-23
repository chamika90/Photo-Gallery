import React, { useEffect, useCallback } from 'react';
import {
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import FastImage from 'react-native-fast-image';

import { getGalleryImages } from 'redux/actions/photoGalleryActions';
import { theme } from 'config/theme';
import styles from './styles';

const { colors } = theme;

//EmptyList Component
const EmptyList = () => {
  return (
    <View style={styles.emptyListContainer} testID="emptyView">
      <Text style={styles.emptyListMessage}>No Images Found</Text>
    </View>
  );
};

// Photo Card Component
const PhotoCard = ({ photo, onSelectPhoto }) => {
  console.log('photo card');
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
const Home = ({ navigation }) => {
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

  const handlePhotoSelect = photo => {
    navigation.navigate('PhotoView', {
      item: photo,
      itemList: imageList,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.primaryHeaderBackgroundColor}
        barStyle="light-content"
      />

      <FlatList
        testID="photoList"
        contentContainerStyle={styles.imageListContainer}
        numColumns={2}
        data={imageList}
        renderItem={({ item, index, separators }) => (
          <PhotoCard
            testID="photoCard"
            key={item.id}
            photo={item}
            onSelectPhoto={photo => {
              handlePhotoSelect(photo);
            }}
          />
        )}
        ListEmptyComponent={<EmptyList />}
        onEndReached={() => {
          if (hasNextPage) {
            getImageList();
          }
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
