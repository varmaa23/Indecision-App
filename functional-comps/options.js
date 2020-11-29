import React from "react";
import OptionComponent from "./optioncomponent"

const Options = (props) => {

    const h1style = {
        "font-size": "25px",
        "textAlign": "left",
        "border": "1px #353348",
        "backgroundColor": " #3C4251",
        "padding": "20px",
        "margin": "-10px",
        "color": "#A5AFD7",
        "font-weight": 'bold'
    }

    const pStyle = {
        "font": "15px inherit",
        "color": "#A5AFD7",
        "padding": "15px",
        "margin-left":"-20px",
        "font-weight": "500"
    }

    return(
        <div>
            <h1 style={h1style}>Your Options</h1>
            <ol>
                {props.options.length === 0 && <p style={pStyle}>Please add an option to get started!</p>}
                {props.options.map((option) => 
                    <OptionComponent 
                        key={option} 
                        text={option}
                        handleDeleteOption={props.handleDeleteOption}/>)}
            </ol>
        </div>
    )
  }

export default Options;