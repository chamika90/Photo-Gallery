let colorConvert = jest.mock(
  '@testing-library/jest-native/node_modules/color-convert',
);

colorConvert.Array.forEach = jest.fn();

export default {colorConvert};
