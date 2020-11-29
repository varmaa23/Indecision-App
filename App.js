import React from 'react';
import Header from "./functional-comps/header";
import Action from "./functional-comps/action";
import RemoveAll from "./functional-comps/remove-all";
import Options from "./functional-comps/options";
import AddOption from "./addoption";
import OptionModal from "./functional-comps/option-modal"
import "./styles.scss"
import './App.css';

class App extends React.Component {
  constructor(props) {
      super(props)
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
      this.handlePick = this.handlePick.bind(this)
      this.handleAddOption = this.handleAddOption.bind(this)
      this.handleDeleteOption = this.handleDeleteOption.bind(this)
      this.handleModal = this.handleModal.bind(this)
      this.state = {
          options: [],
          selected: undefined
      }
  }

  componentDidMount () {
      try {
          const json = localStorage.getItem("options")
          const options = JSON.parse(json)

          if(options){
              this.setState(() => ({ options: options }))
          }
      } catch (e) {
          // Do nothing 
      }
  }

  componentDidUpdate (prevProps, prevState) {
      if(prevState.options.length !== this.state.options.length){
          const json = JSON.stringify(this.state.options)
          localStorage.setItem("options", json)
      }
  }

  handlePick() {
      const num = Math.floor(Math.random() * this.state.options.length)
      console.log(num)
      const option = this.state.options[num]

      this.setState(() => ({ selected: option }))
  }

  handleDeleteOption(optionSingle) {
      this.setState((prevState) => ({
          options: prevState.options.filter((option) => optionSingle !== option)
      }))
  }

  handleDeleteOptions() {
      this.setState(() => ({options: [] }))
  }

  handleAddOption(option) {
      if(!option) {
          return "Enter valid value to add item"
      } else if (this.state.options.indexOf(option) > -1) {
          return "Item has already been added."
      } else {
          this.setState((prevState) => ({options: prevState.options.concat([option])}))
      }
  }

  handleModal() {
      this.setState(() => ({ selected: undefined }))
  }

  render() {
      const subtitle = "Put your life in the hands of a computer."

      return(
          <div className = "Body">
            <div className = "Header">
                <Header 
                subtitle = {subtitle}/>
            </div>
              <Action 
                  hasOptions = {this.state.options.length === 0}
                  handlePick = {this.handlePick}/>
            <div className="Options">
                <Options 
                options = {this.state.options}
                handleDeleteOption = {this.handleDeleteOption}/>
                <AddOption 
                    handleAddOption = {this.handleAddOption}/>
            </div>
              <RemoveAll handleDeleteOptions = {this.handleDeleteOptions}/>
              <OptionModal 
                selected = {this.state.selected}
                handleModal = {this.handleModal}/>
          </div>
      );
  }
}

App.defaultProps = {
  options: []
}

export default App;
