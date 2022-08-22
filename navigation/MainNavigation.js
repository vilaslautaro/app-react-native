import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import SearchNavigator from "./SearchNavigator";
import ShopTabNavigator from "./ShopTabNavigator";

const MainNavigation = () => {
  const user = true;
  const route = "searched";
  return (
    <NavigationContainer>
      {user ? (
        <>{route !== "search" ? <ShopTabNavigator /> : <SearchNavigator />}</>
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
};

export default MainNavigation;
