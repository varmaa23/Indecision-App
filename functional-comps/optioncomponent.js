import React from "react";


const OptionComponent = (props) => {
    const optionStyle = {
        "color": "white",
        "textAlign":"left",
        "font": "inherit",
        "fontSize": "25px",
        "fontWeight": "500",
        "float": "left",
        "borderColor": "2px white"
    }

    const buttonStyle = {
        "backgroundColor": "#545173",
        "border": "0px #545173",
        "color": "#A5AFD7",
        "font": "inherit",
        "fontSize": "25px", 
        "fontWeight": "500",
        "margin-right": "0"
    }

    const divStyle = {
        "margin-top": "40px",
        "padding": "10px"
    }

    return(
        <div style = {divStyle}>
            <li style = {optionStyle}>{props.text}</li>
            <button style = {buttonStyle} onClick={() => {props.handleDeleteOption(props.text)}}>Remove</button>  
        </div> 
    )
  }

export default OptionComponent;