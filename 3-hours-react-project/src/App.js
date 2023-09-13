import { useState } from "react";
import ProductInput from "./Component/ProductInput";
import TotalPrice from "./Component/TotalPrice";
import ProductList from "./Component/ProductList";
function App() {
  const arrKeys = [];
  for (var key in localStorage) {
    if (Number(key)) {
      arrKeys.push(key);
    }
  }
  const [productKeys, setProductKeys] = useState(arrKeys);

  const deleteProductHandler = deleteId => {
    localStorage.removeItem(deleteId);
    const filter = productKeys.filter(key => key !== deleteId);
    setProductKeys(filter);
  };
  const addProductHandler = newId => {
    setProductKeys(key => [...key, newId]);
  };
  return (
    <div>
      <ProductInput   productArr={productKeys} addProduct={addProductHandler} />
      <ProductList
        productArr={productKeys}
        deleteProduct={deleteProductHandler}
      />
      <TotalPrice productArr={productKeys} />
    </div>
  );
}

export default App;
