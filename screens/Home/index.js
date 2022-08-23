import { useEffect } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/actions/products.actions";
import { ListContainer } from "./components/ListContainer";
import { Screen } from "../../App.styles";

const Home = () => {
  const { dataProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Screen>
      {dataProducts.length > 0 ? (
        <ListContainer itemList={dataProducts} />
      ) : (
        <View>
          <Text>No se encontraron productos</Text>
        </View>
      )}
    </Screen>
  );
};

export default Home;
