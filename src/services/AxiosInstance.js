import axios from 'axios';
import {Alert} from 'react-native';

import {HTTPStatusCode} from 'config/constants';

const BASE_URL = 'https://picsum.photos';

export const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

AxiosInstance.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    handleError(error);
  },
);

const handleError = error => {
  if (error.response.status === HTTPStatusCode.INTERNAL_SERVER_ERROR) {
    Alert.alert(
      'INTERNAL SERVER ERROR',
      'Request may not be completed. Please give some inputs and try again!',
    );
  } else {
    Alert.alert('NETWORK ERROR', 'Sorry! An error has occurred');
  }
};
