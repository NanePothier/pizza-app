import classes from './CancelButton.module.css';

const CancelButton = (props) => {
  return (
    <button
      className={classes.cancel}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.btnTitle}
    </button>
  );
};

export default CancelButton;
