import classes from './ConfirmButton.module.css';

const ConfirmButton = (props) => {
  return (
    <button
      className={classes.confirm}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.btnTitle}
    </button>
  );
};

export default ConfirmButton;
