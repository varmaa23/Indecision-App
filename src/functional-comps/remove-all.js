import React from "react";

const RemoveAll = (props) => {

  const buttonStyle = {
    "backgroundColor": "#111019",
    "color": "#A5AFD7",
    "margin-top": "20px",
    "width": "100px",
    "height": "40px",
    "fontSize": "15px",
    "boxShadow": "0px 5px #545173",
    "border": "10px"
  }

    return(
        <button 
        style = {buttonStyle}
        onClick = {props.handleDeleteOptions}>Remove All</button>
    )
  }

export default RemoveAll;