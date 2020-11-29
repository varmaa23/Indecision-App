import React from "react";

const Header = (props) => {

    const headerStyle = {
        "textAlign": "center",
        "border": "8px solid #111019",
        "backgroundColor": "#111019",
        "font": "inherit bold",
        "fontSize": "48px",
        "color": "white",
        "margin": "0"
    }
    const subStyle = {
        "textAlign": "center",
        "border": "8px solid #111019",
        "backgroundColor": "#111019",
        "font": "inherit bold",
        "font-size": "20px",
        "color": "#A5AFD7",
        "padding": "20px",
        "margin-top": "-35px",
        "font-weight": "400"
    }

    return(
        <div>
            <h1 style={headerStyle}>{props.title}</h1>
            <h2 style={subStyle}>{props.subtitle}</h2>
        </div>
    )
}

Header.defaultProps = {
    title: "Indecision App"
}

export default Header;

