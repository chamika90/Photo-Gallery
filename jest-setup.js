import 'react-native';
import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';

jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);

jest.mock('rn-fetch-blob', () => require('./_mocks_/rn-fetch-blob-mock.js'));
jest.mock('axios', () => require('./_mocks_/axios-mock.js'));
