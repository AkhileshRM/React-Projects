import React from 'react'

export default function Die(props) {

const customStyles = {
backgroundColor : props.isHeld? "#59E391" : "White"
    }

  return (
    <div className="die-face" style={customStyles} onClick={props.holdDice}>
      <h2 className="die-value">{props.value}</h2>
    </div>
  )
}
