import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import AddProperties from "../screens/AddProperties";
import Home from "../screens/Home";
import Places from "../screens/Places";
import { MapScreen } from "../screens/MapScreen";
import { colors } from "../constants/colors";

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
          name="Propiedades"
          component={Places}
          options={() => ({
            title: "Propiedades",
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="home" color={color} size={26} />
            ),
          })}
        />
        <Tabs.Screen
          name="Map"
          component={MapScreen}
          options={() => ({
            title: "Map",
            tabBarButton: () => null,
          })}
        />
      </Tabs.Navigator>
    </>
  );
};

export default ShopTabNavigator;
