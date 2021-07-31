/**
 * Photo Gallery
 * https://github.com/chamika90
 */

import React, {useEffect} from 'react';

import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './src/navigation';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2500);
  }, []);

  return <AppNavigator />;
};

export default App;
