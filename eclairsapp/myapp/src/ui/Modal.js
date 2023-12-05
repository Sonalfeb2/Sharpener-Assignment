
import ReactDom from 'react-dom';
import { Fragment } from "react";
import "./Modal.css";
const BackDrop = props => {
  return <div className="backdrop" onClick={props.onClose} />;
};
const Overlay = props => {
  return (
    <div className="modal">
      <div className="content">
        {props.children}
      </div>
    </div>
  );
};

const Modal = props => {
  return (
    <Fragment>
        {ReactDom.createPortal(<BackDrop onClose={props.onClose}/>,document.getElementById('modal_overlay'))}
      {ReactDom.createPortal(<Overlay>{props.children}</Overlay>,document.getElementById('modal_overlay'))}
    </Fragment>
  );
};
export default Modal;
