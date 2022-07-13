import { Form, Input } from "../App.styles";
import { Button, View } from "react-native";

export const CustomForm = ({
  setTextItem,
  setItemList,
  textItem,
  itemList,
}) => {
  const handleName = (text) => {
    setTextItem(text);
  };

  const onHandleAddItem = () => {
    if (textItem.length > 0) {
      setItemList([...itemList, { id: Math.random(), value: textItem }]);
      setTextItem("");
    } else {
      alert('Para agregar un elemento por favor ingrese un nombre')
    }
  };

  const resetItemList = () => {
    setItemList([]);
  };

  return (
    <View>
      <Form>
        <Input
          placeholder="Ingresa un nombre"
          type="text"
          value={textItem}
          onChangeText={handleName}
        />
        <Button title="Add" onPress={() => onHandleAddItem()} />
      </Form>
      <Button title="Borrar lista" onPress={resetItemList} />
    </View>
  );
};
