import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const OptionModel = props => {
  return (
    <Modal
      className="modal"
      isOpen={!!props.selectedOption}
      contentLabel="Selected Option"
      closeTimeoutMS={4000}
    >
      <h3 className="modal__title">Selected Option</h3>
      {props.selectedOption && (
        <p className="modal__body">{props.selectedOption}</p>
      )}
      <button className="button" onClick={props.handleSelectedOption}>
        Okay
      </button>
    </Modal>
  );
};

export default OptionModel;
