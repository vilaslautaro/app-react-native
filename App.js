import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Screen } from "./App.styles";
import ShopNavigator from "./navigation/ShopNavigator";

export default function App() {
  const [loaded] = useFonts({
    OSBold: require("./assets/fonts/OpenSans-Bold.ttf"),
    OSSemiBold: require("./assets/fonts/OpenSans-SemiBold.ttf"),
    OSMedium: require("./assets/fonts/OpenSans-Medium.ttf"),
    OSRegular: require("./assets/fonts/OpenSans-Regular.ttf"),
    OSLight: require("./assets/fonts/OpenSans-Light.ttf"),
  });

  if (!loaded) return <AppLoading />;

  return <ShopNavigator />;
}
