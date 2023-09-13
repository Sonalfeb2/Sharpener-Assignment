const TotalPrice = props => {
 
  let count = 0;
  props.productArr.forEach(value => {
    let localStoragePrice = Number(
      JSON.parse(localStorage.getItem(value)).p_price
    );
    count = count + localStoragePrice;
  });

  return (
    <div>
      {props.productArr.length!==0 &&
        <p>
          Total Price of all Products is - {count}{" "}
        </p>}
    </div>
  );
};
export default TotalPrice;
