import "./Table.css";
import TableContext from "../store/TableContext";
import CartContext from "../store/CartContext";
import { useContext } from "react";
const Table = props => {
  const TableCtx = useContext(TableContext);
  const CartCtx = useContext(CartContext)
  const QuantityHandler = (obj) =>{
            CartCtx.addItem(obj);
  }
  return (
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Quantity</th>
      </tr>
      </thead>
      <tbody>
      {TableCtx.items &&
        TableCtx.items.map(item =>
          <tr key={item._id}>
            <td>
              {item.name}
            </td>
            <td>
              {item.des}
            </td>
            <td>
              Rs.{item.price}
            </td>
            <td>
              <button onClick={()=>QuantityHandler({count:1,...item})}>Buy 1</button>
              <button onClick={()=>QuantityHandler({count:2,...item})}>Buy 2</button>
              <button onClick={()=>QuantityHandler({count:3,...item})}>Buy 3</button>
            </td>
          </tr>

        )}
        </tbody>
    </table>
  );
};
export default Table;
