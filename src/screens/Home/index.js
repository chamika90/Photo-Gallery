import React, {useEffect, useState, useCallback} from 'react';
import {
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import {requestImageList} from 'services/ApiService';
import {theme} from 'config/theme';
import styles from './styles';

const {colors} = theme;

const PhotoCard = ({photo, onSelectPhoto}) => {
  return (
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={() => onSelectPhoto(photo)}>
      <Image source={{uri: photo.download_url}} style={styles.image} />
    </TouchableOpacity>
  );
};

const Home = ({navigation}) => {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    getImageList();
  }, [getImageList]);

  const getImageList = useCallback(async () => {
    const response = await requestImageList();
    setImageList([...response]);
  }, []);

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

      <ScrollView contentContainerStyle={styles.imageListContainer}>
        {renderImageList(imageList)}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
