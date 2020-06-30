import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '_redux/reducers/index';
import AppNavigator from './src/navigation/AppNavigator';

const store = createStore(rootReducer);

function useFonts(fontMap: string | { [fontFamily: string]: Font.FontSource }) {
  let [fontsLoaded, setFontsLoaded] = useState(false);
  (async () => {
    await Font.loadAsync(fontMap);
    setFontsLoaded(true);
  })();
  return [fontsLoaded];
}

const App: React.FC = () => {
  let [fontLoaded] = useFonts({
    'Raleway-Bold': require('_assets/fonts/Raleway-Bold.ttf'),
    'Raleway-Italic': require('_assets/fonts/Raleway-Italic.ttf'),
    'Raleway-BoldItalic': require('_assets/fonts/Raleway-BoldItalic.ttf'),
    'Raleway-Regular': require('_assets/fonts/Raleway-Regular.ttf'),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
