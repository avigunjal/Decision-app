import React from "react";

export default class AddOptions extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    e.target.elements.option.value = "";
    const error = this.props.handleAddOptionAll(option);
    this.setState(() => {
      return {
        error //same as error:error i.e shorthand property
      };
    });
  }

  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input
            className="add-option__input"
            type="text"
            name="option"
            placeholder="add option here.."
          />
          <button className="button">Submit</button>
        </form>
      </div>
    );
  }
}
