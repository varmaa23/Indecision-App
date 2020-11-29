import React from "react";

const Action = (props) => {

    const buttonStyle = {
        "backgroundColor": "#9301ED",
        "width": "500px",
        "height": "75px",        
        "margin": "0 auto",
        "boxShadow": "0px 5px #63029F",
        "font": "36px inherit",
        "color": "white",
        "font-size": "36px",
        "font-weight": "bold",
        "display": "flex",
        "justifyContent": "center",
        "align-content": "center",
        "padding": '15px',
        "border": "0px #9301ED"
    }

    return(
        <div>
                <button 
                    style = {buttonStyle}
                    onClick={props.handlePick}
                    disabled={props.hasOptions}>What should I do?
                </button>
        </div>
    )
  }

export default Action;