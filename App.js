import { ContainerMain, Screen } from "./App.styles";
import NavBar from "./components/ui/NavBar";
import Home from "./pages/Home";

export default function App() {
  return (
    <Screen>
      <NavBar title={"Alquileres"} />
      <ContainerMain>
        <Home />
      </ContainerMain>
    </Screen>
  );
}
