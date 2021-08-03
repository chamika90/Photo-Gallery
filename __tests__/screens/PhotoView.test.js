import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import PhotoView from 'screens/PhotoView';

jest.mock(
  'rn-fetch-blob',
  () => {
    const mRNFetchBlob = {
      fetch: jest.fn(),
    };
    return mRNFetchBlob;
  },
  {virtual: true},
);

describe('PhotoView', () => {
  const mockedParams = {
    route: {
      params: {
        item: {
          author: 'Alejandro Escamilla',
          download_url: 'https://picsum.photos/id/1/5616/3744',
          height: 3744,
          id: '1',
          url: 'https://unsplash.com/photos/LNRyGwIJr5c',
          width: 5616,
        },
      },
    },
    navigation: '',
  };

  it('should match snapshot', async () => {
    const {toJSON} = render(<PhotoView {...mockedParams} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
