
import Form from "./component/Form";
import Table from "./component/Table";
import { TableContextProvider } from "./store/TableContext";
import { CartContextProvider } from "./store/CartContext";
import Cart from "./component/Cart";
function App() {
  return (
      <TableContextProvider>
        <CartContextProvider>
          <Cart/>
          <Form />
          <Table />
        </CartContextProvider>
      </TableContextProvider>
  );
}

export default App;
