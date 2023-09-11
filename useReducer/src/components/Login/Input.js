
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
const Input = (props) => {
  return (
    <div>
      <div
        className={`${classes.control} ${props.emailState.isValid === false
          ? classes.invalid
          : ""}`}
      >
        <label htmlFor="email">E-Mail</label>
        <input
          type="email"
          id="email"
          value={props.emailState.value}
          onChange={props.emailChangeHandler}
          onBlur={props.validateEmailHandler}
        />
      </div>
      <div
        className={`${classes.control} ${props.passwordState.isValid === false
          ? classes.invalid
          : ""}`}
      >
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={props.passwordState.value}
          onChange={props.passwordChangeHandler}
          onBlur={props.validatePasswordHandler}
        />
      </div>
      <div className={classes.actions}>
        <Button type="submit" className={classes.btn} disabled={!props.formIsValid}>
          Login
        </Button>
      </div>
    </div>
  );
};
export default Input;
