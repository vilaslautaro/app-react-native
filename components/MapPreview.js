import { Image, Text, View } from "react-native";
import { GOOGLE_MAP_API_KEY } from "@env";

export const MapPreview = (props) => {
  const mapPreviewUrl = props.location
    ? `https://maps.googleapis.com/maps/api/staticmap?center=${props?.location.lat},${props?.location.lng}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C${props?.location.lat},${props?.location.lng}&key=${GOOGLE_MAP_API_KEY}`
    : "";
  return (
    <View>
      {props.location ? (
        <Image
          source={{ uri: mapPreviewUrl }}
          style={{ width: "80%", height: "40%"}}
        />
      ) : (
        props.children
      )}
    </View>
  );
};
