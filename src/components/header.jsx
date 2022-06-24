import React from "react"
import Icon from "./icon"
import "../styles/header.css"
import Toggle from "./toggle"
function Header() {
  return (
    <div className="header">
      <div className="inner-header">

        <h1 className="title">
            Lyrics Hub
        </h1>
        <Icon 
            src="https://cdn.lordicon.com/mmspidej.json"
            trigger="loop"
            delay="2000"
            colors="primary:#3080e8,secondary:#104891"
            stroke="70"
            style={{width: "60px", height: "60px"}}
        />
      </div>
        
        <Toggle />
        
    </div>
  
  )
}

export default Header