module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.jsx', '.js', '.ios.js', '.android.js', '.json'],
        root: ['./src'],
      },
    ],
  ],
};
