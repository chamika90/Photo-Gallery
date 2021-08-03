import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {render} from '@testing-library/react-native';

import Home from 'screens/Home';

describe('Home', () => {
  const initialState = {
    galleryReducer: {
      photoList: [
        {
          author: 'Alejandro Escamilla',
          download_url: 'https://picsum.photos/id/1/5616/3744',
          height: 3744,
          id: '1',
          url: 'https://unsplash.com/photos/LNRyGwIJr5c',
          width: 5616,
        },
        {
          author: 'Paul Jarvis',
          download_url: 'https://picsum.photos/id/10/2500/1667',
          height: 1667,
          id: '10',
          url: 'https://unsplash.com/photos/6J--NXulQCs',
          width: 2500,
        },
        {
          author: 'Tina Rataj',
          download_url: 'https://picsum.photos/id/100/2500/1656',
          height: 1656,
          id: '100',
          url: 'https://unsplash.com/photos/pwaaqfoMibI',
          width: 2500,
        },
      ],
      page: 0,
      hasNextPage: true,
    },
  };
  const mockStore = configureStore();
  let store;

  it('should match snapshot', async () => {
    store = mockStore(initialState);
    const {toJSON} = render(
      <Provider store={store}>
        <Home />,
      </Provider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
