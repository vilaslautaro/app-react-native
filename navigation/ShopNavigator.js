import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { colors } from "../constants/colors";
import AddProperties from "../screens/AddProperties";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Favorites from "../screens/Favorites";

const ShopNavigator = () => {
  const Tab = createMaterialBottomTabNavigator();
  const { bg, button, buttonActive } = colors();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor={buttonActive}
        inactiveColor={button}
        barStyle={{ backgroundColor: bg, paddingBottom: 5 }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: "Propiedades",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            title: "Buscar",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="magnify" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Publish"
          component={AddProperties}
          options={{
            title: "Publicar",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="plus" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Favoritos"
          component={Favorites}
          options={{
            title: "Favoritos",
            tabBarBadge: 1,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="heart" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default ShopNavigator;
