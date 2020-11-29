import React from "react";
import Modal from "react-modal";

const style = {
    "opacity" :"0"
}

const OptionModal = (props) => (

    <Modal
        style = {style}
        isOpen = {props.selected}
        contentLabel = "Selected Option"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3> Selected Option </h3>
        {props.selected && <p>{props.selected}</p>}
        <button 
            onClick = {props.handleModal}
            className = "button"> Okay </button>
    </Modal>
)

export default OptionModal;