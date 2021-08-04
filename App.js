/**
 * Photo Gallery
 * https://github.com/chamika90
 */

import React, {useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {persistStore} from 'redux-persist';
import SplashScreen from 'react-native-splash-screen';
import Toast from 'react-native-toast-message';

import AppNavigator from './src/navigation';
import configureStore from './src/store/configureStore';
import toastConfig from 'config/toastConfig';
import {theme} from './src/config/theme';

const {colors} = theme;
const {store} = configureStore();

const App = () => {
  const persister = persistStore(store);

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2500);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <View style={styles.loaderContainer}>
            <ActivityIndicator
              size={'large'}
              color={colors.primaryLoaderColor}
            />
          </View>
        }
        persistor={persister}>
        <AppNavigator />
        <Toast
          position="top"
          topOffset={50}
          config={toastConfig}
          ref={ref => Toast.setRef(ref)}
        />
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryImageBackgroundColor,
  },
});
export default App;
