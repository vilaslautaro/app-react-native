import { useState } from "react";
import { Alert, Image, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { ButtonPrimary, TextBtnPrimary } from "../styles";

export const ImageSelector = (props) => {
  const [pickedUri, setPickedUri] = useState(false);

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permisos insuficientes",
        "Necesita dar permisos de la camara para usar la aplicacion",
        [{ text: "Ok" }]
      );
      return false;
    }

    return true;
  };

  const handlerTakeImage = async () => {
    const isCameraOk = await verifyPermissions();
    if (!isCameraOk) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.8,
    });

    setPickedUri(image.uri);
    props.onImage(image.uri);
  };

  return (
    <View>
      {!pickedUri ? (
        <Text>No hay imagen</Text>
      ) : (
        <Image
          style={{
            width: "80%",
            height: "20%",
          }}
          source={{ uri: pickedUri }}
        />
      )}
      <ButtonPrimary onPress={handlerTakeImage}>
        <TextBtnPrimary>Subir foto</TextBtnPrimary>
      </ButtonPrimary>
    </View>
  );
};
