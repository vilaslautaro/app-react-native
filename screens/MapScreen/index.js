import { Ionicons } from "@expo/vector-icons";
import { useLayoutEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";

export const MapScreen = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState(false);
  const initialRegion = {
    latitude: -37.4219023,
    longitude: -58.38200195568156,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const handleSelectLocation = (event) => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  };

  const handleSaveLocation = () => {
    if (selectedLocation) {
      navigation.navigate("Nuevo", { mapLocation: selectedLocation });
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        <TouchableOpacity onPress={handleSaveLocation}>
          <Ionicons name="md-save-outline" color="black" size={22} />
        </TouchableOpacity>;
      },
    });
  }, [navigation, handleSaveLocation]);

  return (
    <MapView
      initialRegion={initialRegion}
      style={{ flex: 1 }}
      onPress={handleSelectLocation}
    >
      {selectedLocation && (
        <Marker
          title="Ubicacion seleccionada"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
};
