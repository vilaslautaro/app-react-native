import { Modal, Button } from "react-native";
import { ContainerButtons, ContainerModal, TextModal } from "./Modal.styles";

export const ModalConfirm = ({
  showModal,
  itemSelected,
  deleteItem,
  cancelar,
}) => {
  return (
    <>
      {itemSelected && (
        <Modal animationType="slide" transparent={true} visible={showModal}>
          <ContainerModal>
            <TextModal>Confirmas eliminar a {itemSelected[0].value}?</TextModal>
            <ContainerButtons>
              <Button
                onPress={() => deleteItem(itemSelected[0].id)}
                title="confirmar"
              />
            </ContainerButtons>
            <ContainerButtons>
              <Button onPress={() => cancelar()} title="Cancelar" />
            </ContainerButtons>
          </ContainerModal>
        </Modal>
      )}
    </>
  );
};
