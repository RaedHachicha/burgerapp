
import React from "react";
import './Model.css'
import Backdrop from "../Backdrop/Backdrop";
import ReactAux from "../../../reactAux/ReactAux";

const Modal = (props) => (
  <ReactAux>
    <Backdrop show={props.show} clicked = {props.modelClosed}></Backdrop>
      <div className="Modal" style={{
        transform: props.show? 'translateY(0)' : 'translateY(-100vh)', opacity: props.show? '1':'0'
    }}>
        {props.children}
    </div>
  </ReactAux>
)
export default Modal