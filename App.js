import { ContainerMain, Screen } from "./App.styles";
import NavBar from "./components/ui/NavBar";
import Home from "./pages/Home";
import AddHouse from "./pages/AddHouse";
import { useState } from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [loaded] = useFonts({
    OSBold: require("./assets/fonts/OpenSans-Bold.ttf"),
    OSSemiBold: require("./assets/fonts/OpenSans-SemiBold.ttf"),
    OSMedium: require("./assets/fonts/OpenSans-Medium.ttf"),
    OSRegular: require("./assets/fonts/OpenSans-Regular.ttf"),
    OSLight: require("./assets/fonts/OpenSans-Light.ttf"),
  });
  const [createHouse, setCreateHouse] = useState(false);

  const handleCreateHouse = () => {
    setCreateHouse(!createHouse);
  };

  if (!loaded) return <AppLoading />;

  return (
    <Screen>
      <NavBar
        title={"Alquileres"}
        addHouse={handleCreateHouse}
        createHouse={createHouse}
      />
      <ContainerMain>{!createHouse ? <Home /> : <AddHouse />}</ContainerMain>
    </Screen>
  );
}
