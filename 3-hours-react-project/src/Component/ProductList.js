const ProductList = props => {
   if( props.productArr.length===0){
    return <h1>No Product Found in the list.</h1>
   }

  return (
    <ul>
      {props.productArr.map(key => {
        var object = JSON.parse(localStorage.getItem(key));
        return (
          <li key={key}>
            Product Name : {object.p_name} Product Price: {object.p_price}
            <button onClick={()=>props.deleteProduct(key)}>Delete Product</button>
          </li>
        );
      })}
    </ul>
  );
};
export default ProductList;
