import React from 'react'

function Icon(props) {
  return (
    <div onClick={props.onclick}>
    <lord-icon
        src={props.src}
        trigger={props.trigger}
        delay={props.delay}
        colors={props.colors}
        stroke= {props.stroke}
        style={props.style}
        >
    </lord-icon>
    </div>
  )
}

export default Icon