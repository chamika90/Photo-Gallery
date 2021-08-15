import React, { useState } from 'react';
import {
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  Alert,
  Share,
} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import FastImage from 'react-native-fast-image';
import CameraRoll from '@react-native-community/cameraroll';
import RNFetchBlob from 'rn-fetch-blob';
import Toast from 'react-native-toast-message';
import { ProgressBar } from 'react-native-paper';

import styles from './styles';
import Res from 'resources';
import { theme } from 'config/theme';
import DetailView from './DetailView';

const { colors } = theme;
const { Images } = Res;

const ActionButton = ({ icon, onButtonPress }) => {
  return (
    <TouchableOpacity
      style={styles.downloadIconContainer}
      onPress={() => onButtonPress()}>
      <Image style={styles.downloadIcon} source={icon} />
    </TouchableOpacity>
  );
};

/*
 * Photo View Screen
 */
const PhotoView = ({ route }) => {
  const { item } = route.params;

  const aspectRatio = item.height / item.width;
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const imageHeight = aspectRatio * (screenWidth - 20);

  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isDetailModalVisible, setDetailModalStatus] = useState(false);
  const checkPermissionsAndroid = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Permission',
          message: 'Your permission is required to save images to your device',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      }
      Alert.alert(
        'Save remote Image',
        'Please Grant Permission to save Image',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false },
      );
    } catch (err) {
      Alert.alert(
        'Save remote Image',
        'Failed to save Image: ' + err.message,
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false },
      );
    }
  };

  const handleDownload = async () => {
    // check storage permission for android devices
    if (Platform.OS === 'android') {
      const granted = await checkPermissionsAndroid();
      if (!granted) {
        return;
      }
    }

    setLoading(true);
    setProgress(0);

    RNFetchBlob.config({
      fileCache: true,
      appendExt: 'png',
    })
      .fetch('GET', item.download_url)
      .progress((received, total) => {
        setProgress(received / total);
      })
      .then(res => {
        CameraRoll.save(res.data, 'photo')
          .then(res => {
            setLoading(false);
            setProgress(100);
            Toast.show({
              text1: 'Downloaded',
              type: 'success',
            });
          })
          .catch(err => {
            setLoading(false);
            setProgress(0);
            console.log(err);
            Toast.show({
              text1: 'Download Failed',
              type: 'error',
            });
          });
      })
      .catch(error => {
        console.log(error);

        Toast.show({
          text1: 'Download Failed',
          type: 'error',
        });
      });
  };

  const handlePhotoSharing = async () => {
    try {
      const shareOptions = {
        message: item.download_url,
      };
      await Share.share(shareOptions);
    } catch (error) {
      Toast.show({
        text1: 'Failed to share image. Please try again.',
        type: 'error',
      });
    }
  };

  return (
    <>
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
        <View style={styles.bottomToolBar}>
          {loading ? (
            <View style={styles.progressBarContainer}>
              <ProgressBar
                color={colors.progressBarColor}
                progress={progress}
              />
            </View>
          ) : null}
          <View style={styles.actionButtonContainer}>
            <ActionButton
              icon={Images.icons.ic_details}
              onButtonPress={() => setDetailModalStatus(true)}
            />

            <ActionButton
              icon={Images.icons.ic_share}
              onButtonPress={() => handlePhotoSharing()}
            />

            <ActionButton
              icon={Images.icons.ic_download}
              onButtonPress={() => handleDownload()}
            />
          </View>
        </View>
      </View>
      <DetailView
        isVisible={isDetailModalVisible}
        item={item}
        onClose={() => {
          setDetailModalStatus(false);
        }}
        onDownloadPress={() => {
          setDetailModalStatus(false);
          handleDownload();
        }}
      />
    </>
  );
};

export default PhotoView;
