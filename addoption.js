import React from "react";

class AddOption extends React.Component{
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
  
    handleAddOption(event) { // we want to keep this function because 
        // there are still things that we want to access (input)
        event.preventDefault()
  
        const option = event.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)
  
        if(error) {
            this.setState(() => ({error: error}))
        } else {
            event.target.elements.option.value = ""
            this.setState(() => ({error: undefined}))
            
        }
    }
  
    render() {

        const inputStyle = {
            "backgroundColor": "#333745",
            "boxShadow": "0px 3px #111019",
            "border": "0px",
            "width": "300px",
            "height": "50px",
            "align": "center",
            "fontSize": "20px",
            "color": "#A5AFD7"
        }

        const buttonStyle = {
            "backgroundColor": "#9301ED",
            "width": "100px",
            "height": "50px",        
            "margin": "0 auto",
            "boxShadow": "0px 5px #63029F",
            "font": "36px inherit",
            "color": "white",
            "font-size": "18px",
            "font-weight": "bold",
            "justifyContent": "center",
            "align-content": "center",
            "padding": '13px',
            "border": '10px #9301ED',
            "margin-left": "15px"
        }

        const formStyle = {
            "text-align": "center"
        }

        const errorStyle = {
            "text-align": "left",
            "color": "white",
            "font-style": "italic"

        }

        return(
            <div style = {formStyle}>
                {this.state.error && <p style = {errorStyle}>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" style={inputStyle}></input>
                    <button style = {buttonStyle}>Submit</button>
                </form>
            </div>
        );
    }
  }

export default AddOption;