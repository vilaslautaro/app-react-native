import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import AuthNavigator from "./AuthNavigator";
import ShopTabNavigator from "./ShopTabNavigator";

const MainNavigation = () => {
  const { userIsLogged } = useSelector((state) => state.login);
  
  return (
    <NavigationContainer>
      {userIsLogged ? <ShopTabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigation;
