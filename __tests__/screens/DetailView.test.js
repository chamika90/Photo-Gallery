import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import DetailView from 'screens/PhotoView/DetailView';

describe('DetailView', () => {
  it('should match snapshot', async () => {
    const {toJSON} = render(
      <DetailView
        isVisible={true}
        item={{
          author: 'Alejandro Escamilla',
          download_url: 'https://picsum.photos/id/1/5616/3744',
          height: 3744,
          id: '1',
          url: 'https://unsplash.com/photos/LNRyGwIJr5c',
          width: 5616,
        }}
        onClose={() => {
          console.log('on close modal');
        }}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
