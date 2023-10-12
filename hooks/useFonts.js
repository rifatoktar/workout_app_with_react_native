import * as Font from "expo-font";
 
export default useFonts = async () =>
  await Font.loadAsync({
    'LexendDeca-Medium': require('../assets/fonts/LexendDeca-Medium.ttf'),
    'LexendDeca-SemiBold': require('../assets/fonts/LexendDeca-SemiBold.ttf')
  });