import "./Form.css";
import { useContext, useRef } from "react";
import TableContext from "../store/TableContext";
const Form = props => {
  const TableCtx = useContext(TableContext);
  const nameInputRef = useRef();
  const desInputRef = useRef();
  const priceInputRef = useRef();
  const formHandler = e => {
    e.preventDefault();
    const obj = {
      name: nameInputRef.current.value,
      des: desInputRef.current.value,
      price: priceInputRef.current.value
    };
    TableCtx.addItem(obj);
    nameInputRef.current.value = "";
    desInputRef.current.value = "";
    priceInputRef.current.value = "";
  };
  return (
    <div>
      <form onSubmit={formHandler}>
        <label>Name</label>
        <input type="text" ref={nameInputRef} />
        <label>Description</label>
        <input type="text" ref={desInputRef} />
        <label>Price</label>
        <input type="text" ref={priceInputRef} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default Form;
