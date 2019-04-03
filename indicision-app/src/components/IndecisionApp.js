import React from "react";
import AddOptions from "./AddOptions";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModel from "./OptionModel";

export default class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleSingleDeleteOptions = this.handleSingleDeleteOptions.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePic = this.handlePic.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleSelectedOption = this.handleSelectedOption.bind(this);

    this.state = {
      options: [],
      selectedOption: undefined
    };
  }

  //Life cycles componentDidMount: When component first time render
  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem("option"));

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {}
  }

  //Life cycles componentDidUpdate: When component state change this lifecycle method gets called
  componentDidUpdate() {
    const data = JSON.stringify(this.state.options);
    localStorage.setItem("option", data);
    // console.log("Saving the data");
  }

  handleSingleDeleteOptions(optionToRemove) {
    this.setState(prevState => {
      return {
        options: prevState.options.filter(option => {
          return optionToRemove !== option;
        })
      };
    });
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] })); //new syntax for removing individual options
  }

  handleSelectedOption() {
    this.setState(() => {
      return {
        selectedOption: undefined
      };
    });
  }

  handleAddOption(option) {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Already Exists..";
    }
    this.setState(prevState => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }

  handlePic() {
    //  alert("action pic");
    const pic = Math.floor(Math.random() * this.state.options.length);
    //  alert(this.state.options[pic]);
    const option = this.state.options[pic];
    this.setState(() => {
      return {
        selectedOption: option
      };
    });
  }

  render() {
    const title = "Indecision App";
    const subtitle = "Let's make decision with Indecision App";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePic={this.handlePic}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleSingleDeleteOptions={this.handleSingleDeleteOptions}
              handleDeleteOptions={this.handleDeleteOptions}
            />
            <AddOptions handleAddOptionAll={this.handleAddOption} />
          </div>
          <OptionModel
            selectedOption={this.state.selectedOption}
            handleSelectedOption={this.handleSelectedOption}
          />
        </div>
      </div>
    );
  }
}
