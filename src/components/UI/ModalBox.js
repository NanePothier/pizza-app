import classes from './ModalBox.module.css';

const ModalBox = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

export default ModalBox;