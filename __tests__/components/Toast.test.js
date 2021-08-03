import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import Toast from 'components/Toast';

describe('Toast', () => {
  it('should match snapshot', async () => {
    const {toJSON} = render(
      <Toast text1={'Downloaded'} settings={{color: 'green'}} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('should display text as Downloaded', async () => {
    const {getAllByText} = render(
      <Toast text1={'Downloaded'} settings={{color: 'green'}} />,
    );

    expect(getAllByText('Downloaded').length).toBe(1);
  });
});
