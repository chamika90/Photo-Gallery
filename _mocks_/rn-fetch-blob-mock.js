// import {NativeModules} from 'react-native';

// let RNFetchBlob = NativeModules.RNFetchBlob; //jest.mock('rn-fetch-blob');

// RNFetchBlob.fetch = jest.fn();
// RNFetchBlob.wrap = jest.fn();

// export default {RNFetchBlob};

// const existsMock = jest.fn();
// existsMock.mockReturnValueOnce({then: jest.fn()});

// export default {
//   DocumentDir: () => {},
//   ImageCache: {
//     get: {
//       clear: () => {},
//     },
//   },
//   fs: {
//     exists: existsMock,
//     dirs: {
//       MainBundleDir: () => RNFetchBlob.DocumentDir,
//       CacheDir: () => RNFetchBlob.CacheDir,
//       DocumentDir: () => RNFetchBlob.DocumentDir,
//     },
//   },
// };
