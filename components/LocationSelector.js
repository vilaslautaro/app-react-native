import { useEffect, useState } from "react";
import { Alert, Button, Text, View } from "react-native";
import * as Location from "expo-location";
import { MapPreview } from "./MapPreview";
import { useNavigation, useRoute } from "@react-navigation/native";

export const LocationSelector = (props) => {
  const [pickedLocation, setPickedLocation] = useState(false);
  const route = useRoute();
  const navigation = useNavigation();

  const verifyPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permisos insuficientes",
        "Necesita dar permisos de la localizacion para usar la aplicacion",
        [{ text: "Ok" }]
      );

      return false;
    }

    return true;
  };

  const handleGetLocation = async () => {
    const isLocationOk = await verifyPermissions();
    if (!isLocationOk) return;

    const location = await Location.getCurrentPositionAsync({
      timeout: 5000,
    });

    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });

    props.onLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };

  const handlePickOnMap = async () => {
    const isLocationOk = await verifyPermissions();
    if (!isLocationOk) return;

    navigation.navigate("Map");
  };

  const mapLocation = route?.params?.mapLocation;

  useEffect(() => {
    if (mapLocation) {
      setPickedLocation(mapLocation);
      props.onLocation(mapLocation);
    }
  }, [mapLocation]);

  return (
    <View>
      <View>
        {pickedLocation ? (
          <MapPreview location={pickedLocation}>
            <Text>Ubicacion en proceso...</Text>
          </MapPreview>
        ) : (
          <Text>Ubicacion pendiente</Text>
        )}
      </View>
      <Button title="Obtener ubicacion actual" onPress={handleGetLocation} />
      <Button
        title="Elegir ubicacion desde el mapa"
        onPress={handlePickOnMap}
      />
    </View>
  );
};
