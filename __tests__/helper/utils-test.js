import {isiOS} from 'helper/utils';

jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'android',
  select: () => null,
}));

describe('Test util functions', () => {
  it('Check platform as android', () => {
    const input = isiOS;
    const output = false;
    expect(input).toEqual(output);
  });
});
