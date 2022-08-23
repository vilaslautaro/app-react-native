import { Image, Text, View } from "react-native";

export const MapPreview = (props) => {
  const mapPreviewUrl = props.location
    ? `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lng}
    &key=AIzaSyDgridjFUHOfH7_swt5loK0gkUjofhXt4g&signature=YOUR_SIGNATURE`
    : "";
  return (
    <View>
      {props.location ? (
        <Image
          source={{ uri: mapPreviewUrl }}
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        props.children
      )}
      <Text></Text>
    </View>
  );
};
