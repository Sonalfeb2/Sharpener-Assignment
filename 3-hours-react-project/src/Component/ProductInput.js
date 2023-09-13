import { useRef, useState, useEffect } from "react";
const ProductInput = props => {
  const [showPopUp, setShowPopUp] = useState({ open: false, message: "" });
  const productInputIdRef = useRef();
  const productInputPriceRef = useRef();
  const productInputNameRef = useRef();

  const submitHandler = () => {
    const id = productInputIdRef.current.value;
    const productPrice = productInputPriceRef.current.value;
    const productName = productInputNameRef.current.value;
    if (
      id.trim().length === 0 ||
      productPrice.trim().length === 0 ||
      productName.trim().length === 0
    ) {
      setShowPopUp({
        open: true,
        message: "Please fill all inputs"
      });
    } else if (productPrice <= 0 || id < 0) {
      setShowPopUp({
        open: true,
        message: "Negative value not allowed"
      });
    } else if (props.productArr.includes(id)) {
      setShowPopUp({
        open: true,
        message: "This Id Already Exist ,Try Different One"
      });
    } else {
      localStorage.setItem(
        id,
        JSON.stringify({ p_price: productPrice, p_name: productName })
      );
      props.addProduct(id);

      productInputIdRef.current.value = "";
      productInputPriceRef.current.value = "";
      productInputNameRef.current.value = "";
    }
  };
  useEffect(
    () => {
      const timer = setTimeout(() => {
        setShowPopUp({
          open: false,
          message: ""
        });
      }, 5000);
      return () => clearTimeout(timer);
    },
    [showPopUp]
  );
  return (
    <div>
      {showPopUp.open &&
        <p style={{backgroundColor:'blue', textAlign:'center', color:'white'}}>
          {showPopUp.message}
        </p>}
      <label htmlFor="product_id">Product Id:</label>
      <input type="number" ref={productInputIdRef} />
      <label htmlFor="product_price">Product Price:</label>
      <input type="number" ref={productInputPriceRef} />
      <label htmlFor="product_name">Product Name:</label>
      <input type="text" ref={productInputNameRef} />
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
};
export default ProductInput;
