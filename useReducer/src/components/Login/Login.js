import React, { useState, useEffect, useReducer } from "react";

import classes from "./Login.module.css";
import Card from "../UI/Card/Card";
import Input from "./Input.js";
const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = props => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null
  });

  useEffect(() => {
    console.log("EFFECT RUNNING");

    return () => {
      console.log("EFFECT CLEANUP");
    };
  }, []);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(
    () => {
      const identifier = setTimeout(() => {
        console.log("Checking form validity!");
        setFormIsValid(emailIsValid && passwordIsValid);
      }, 500);

      return () => {
        console.log("CLEANUP");
        clearTimeout(identifier);
      };
    },
    [emailIsValid, passwordIsValid]
  );

  const emailChangeHandler = event => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = event => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = event => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          emailState={emailState}
          passwordState={passwordState}
          emailChangeHandler={emailChangeHandler}
          validateEmailHandler={validateEmailHandler}
          passwordChangeHandler={passwordChangeHandler}
          validatePasswordHandler={validatePasswordHandler}
          formIsValid={formIsValid}
        />
      </form>
    </Card>
  );
};

export default Login;
