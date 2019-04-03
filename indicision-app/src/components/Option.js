import React from "react";

const Option = props => {
  return (
    <div className="option">
      <p className="option__text">
        {props.count}. {props.optionText}
      </p>
      &nbsp;&nbsp;
      <button
        className="button button--link"
        onClick={e => {
          props.handleSingleDeleteOptions(props.optionText);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default Option;
