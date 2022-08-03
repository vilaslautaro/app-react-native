import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import Home from "../screens/Home";
import Search from "../screens/Search";
import { colors } from "../constants/colors";

const SearchNavigator = () => {
  const Tabs = createBottomTabNavigator();
  const { primary, bg, button, buttonActive } = colors();

  return (
    <Tabs.Navigator
      initialRouteName="Comprar"
      activeColor={buttonActive}
      inactiveColor={button}
      barStyle={{ backgroundColor: bg, paddingBottom: 5 }}
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? primary : "white",
        },
        headerTintColor: Platform.OS === "android" ? "white" : primary,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen
        name="Inicio"
        component={Home}
        options={{
          title: "Inicio",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="Comprar"
        component={Search}
        options={{
          title: "Comprar",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="hand-point-up" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="Alquilar"
        component={Search}
        options={{
          title: "Alquilar",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="hand-point-up" color={color} size={26} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default SearchNavigator;
