import React, { useEffect, useState } from "react";
const TableContext = React.createContext({
  items: [],
  addItem: item => {},
  removeItem: id => {}
});
export const TableContextProvider = props => {
  const [itemState, setItemState] = useState([]);
  const getData = () => {
    fetch("https://crudcrud.com/api/c62d62d6feb54fc396544a504bfcb013/items")
      .then(res => {
        if (!res.ok) {
          throw new Error("somethingwrong");
        }

        return res.json();
      })
      .then(data => {
        if (data.length > 0) {
          setItemState(data);
        }
      })
      .catch(err => setItemState([]));
  };
  useEffect(() => {
    getData();
  }, []);
  const addItemHandler = async newItem => {
    const res = await fetch(
      "https://crudcrud.com/api/c62d62d6feb54fc396544a504bfcb013/items",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newItem)
      }
    );
    const data = await res.json();
    if (data) {
      getData();
    }
  };
  const removeItemHandler = id => {
    const removeData = itemState.filter(item => item.id !== id);
    setItemState(removeData);
  };

  const contextValue = {
    items: itemState,
    addItem: addItemHandler,
    removeItem: removeItemHandler
  };
  return (
    <TableContext.Provider value={contextValue}>
      {props.children}
    </TableContext.Provider>
  );
};
export default TableContext;
