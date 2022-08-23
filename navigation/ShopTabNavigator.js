import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import AddProperties from "../screens/AddProperties";
import Home from "../screens/Home";
import Favorites from "../screens/Favorites";
import SearchNavigator from "./SearchNavigator";
import { colors } from "../constants/colors";
import { MapScreen } from "../screens/MapScreen";

const ShopTabNavigator = () => {
  const Tabs = createBottomTabNavigator();
  const { bg, button, buttonActive } = colors();
  return (
    <>
      <Tabs.Navigator
        initialRouteName="Inicio"
        activeColor={buttonActive}
        inactiveColor={button}
        barStyle={{ backgroundColor: bg, paddingBottom: 5 }}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="Inicio"
          component={Home}
          options={() => ({
            title: "Inicio",
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="home" color={color} size={26} />
            ),
          })}
        />
        <Tabs.Screen
          name="Buscar"
          component={SearchNavigator}
          options={() => ({
            title: "Buscar",
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="search" color={color} size={26} />
            ),
          })}
        />
        <Tabs.Screen
          name="Publicar"
          component={AddProperties}
          options={() => ({
            title: "Publicar",
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="plus" color={color} size={26} />
            ),
          })}
        />
        <Tabs.Screen
          name="Favoritos"
          component={Favorites}
          options={() => ({
            title: "Favoritos",
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="heart" color={color} size={26} />
            ),
          })}
        />
        <Tabs.Screen
          name="Perfil"
          component={Favorites}
          options={() => ({
            title: "Perfil",
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="user-circle" color={color} size={26} />
            ),
          })}
        />
        <Tabs.Screen
          name="Map"
          component={MapScreen}
          options={() => ({
            title: "Map",
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="user-circle" color={color} size={26} />
            ),
          })}
        />
      </Tabs.Navigator>
    </>
  );
};

export default ShopTabNavigator;
