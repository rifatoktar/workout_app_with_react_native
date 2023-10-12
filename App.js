import { Appearance } from 'react-native';
import { ThemeContext } from './context/theme_context';
import { useState, useEffect } from 'react';
import AppNavigator from './src/components/app_navigator';
import { storeData, getData } from './config/asyncStorage';
import * as SplashScreen from "expo-splash-screen";
import AppLoading from 'expo-app-loading';
import useFonts from './hooks/useFonts';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [theme, setTheme] = useState({ mode: 'dark' });

  const updateTheme = (newTheme) => {
    let mode;
    if (!newTheme) {
      mode = theme.mode === 'dark' ? 'light' : 'dark';
      newTheme = { mode, system: false };
    } else {
      if (newTheme.system) {
        const systemColorScheme = Appearance.getColorScheme();
        mode = systemColorScheme === 'dark' ? 'dark' : 'light';

        newTheme = { ...newTheme, mode };
      } else {
        newTheme = { ...newTheme, system: false };
      }
    }
    setTheme(newTheme);
    storeData("newsFeedTheme", newTheme);
  };

  if (theme.system) {
    Appearance.addChangeListener(({ colorScheme }) => {
      updateTheme({ system: true, mode: colorScheme });
    });
  }

  const fetchStoredTheme = async () => {
    try {
      const themeData = await getData("newFeedTheme");

      if (themeData) {
        updateTheme(themeData);
      }

    } catch ({ message }) {
      alert(message);
    } finally {
      await setTimeout(() => SplashScreen.hideAsync(), 1000);
    }
  };

  useEffect(() => {
    fetchStoredTheme();
  }, []);

  const [IsReady, SetIsReady] = useState(false);
  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => { }}
      />
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <AppNavigator />
    </ThemeContext.Provider>
  );
}