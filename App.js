import { useState } from "react";
import { Screen } from "./App.styles";
import { CustomForm } from "./components/CustomForm";
import { ListContainer } from "./components/ListContainer";
import { ModalConfirm } from "./components/Modal";

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [itemSelected, setItemSelected] = useState(false);

  const deleteItem = (id) => {
    const filterItemList = itemList.filter((item) => item.id !== id);
    setItemList(filterItemList);
    setItemSelected(false);
    setShowModal(!showModal);
  };

  const onHandlerModal = (id) => {
    const itemSelectedId = itemList.filter((item) => item.id === id);
    setItemSelected(itemSelectedId);
    setShowModal(!showModal);
  };

  const cancelar = () => {
    setShowModal(!showModal);
  };

  return (
    <Screen>
      <ModalConfirm
        showModal={showModal}
        deleteItem={deleteItem}
        itemSelected={itemSelected}
        cancelar={cancelar}
      />
      <CustomForm
        textItem={textItem}
        setItemList={setItemList}
        setTextItem={setTextItem}
        itemList={itemList}
      />
      <ListContainer itemList={itemList} onHandlerModal={onHandlerModal} />
    </Screen>
  );
}
