
import classes from './Login.module.css';
const Input = (props) => {
  return (
    <div>
      <div
        className={`${classes.control} ${props.value.isValid === false
          ? classes.invalid
          : ""}`}
      >
        <label htmlFor={props.type}>{props.type}</label>
        <input
          type={props.type}
          id={props.id}
          value={props.value.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </div>
    </div>
  );
};
export default Input;
