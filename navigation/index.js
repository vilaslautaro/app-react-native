import { NavigationContainer } from "@react-navigation/native";
import SearchNavigator from "./SearchNavigator";
import ShopTabNavigator from "./ShopTabNavigator";

const MainNavigation = () => {
  const route = "searched"

  return (
    <NavigationContainer>
      {route !== "search" ? <ShopTabNavigator /> : <SearchNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigation;
