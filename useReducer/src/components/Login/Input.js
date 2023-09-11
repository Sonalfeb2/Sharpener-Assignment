import React, { useRef, useImperativeHandle } from "react";
import classes from "./Login.module.css";
const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  const activate = () => {
    inputRef.current.focus();
  };
  useImperativeHandle(ref, () => {
    return {
      focus: activate
    };
  });
  return (
    <div>
      <div
        className={`${classes.control} ${props.value.isValid === false
          ? classes.invalid
          : ""}`}
      >
        <label htmlFor={props.type}>
          {props.type}
        </label>
        <input
          type={props.type}
          id={props.id}
          value={props.value.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
          ref={inputRef}
        />
      </div>
    </div>
  );
});
export default Input;
