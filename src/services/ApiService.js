import { Alert } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { EndPoints } from 'config/constants';
import { AxiosInstance } from './AxiosInstance';

//Get Image List
export const requestImageList = async payload => {
  const isNetworkAvailable = await (await NetInfo.fetch()).isConnected;

  if (!isNetworkAvailable) {
    Alert.alert('NO INTERNET', 'Please check your internet connection');
    return;
  }

  return AxiosInstance.get(
    `${EndPoints.IMAGE_LIST}?page=${payload.page}&limit=${payload.limit}`,
  ).then(res => {
    const response = {
      data: res,
      page: payload.page,
      hasNextPage: res.length > 0 ? true : false,
    };
    return response;
  });
};
