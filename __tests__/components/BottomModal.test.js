import 'react-native';
import React from 'react';
import {View, Text} from 'react-native';
import {render} from '@testing-library/react-native';

import BottomModal from 'components/BottomModal';

describe('BottomModal', () => {
  it('should match snapshot', async () => {
    const {toJSON} = render(
      <BottomModal
        isVisible={true}
        children={
          <View>
            <Text>title</Text>
          </View>
        }
        onClose={() => {
          console.log('on close modal');
        }}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('should display text as title', async () => {
    const {getAllByText} = render(
      <BottomModal
        isVisible={true}
        children={
          <View>
            <Text>title</Text>
          </View>
        }
        onClose={() => {
          console.log('on close modal');
        }}
      />,
    );

    expect(getAllByText('title').length).toBe(1);
  });
});
