import React from "react"
import './BuildControls.css'
import BuildControl from "./_BuildControl/BuildControl"

const controls = [
    {label:"Salad",type:'salad'},
    {label:"Bacon",type:'bacon'},
    {label:"Cheese",type:'cheese'},
    {label:"Meat",type:'meat'}

]

const BuildControls = (props) => (
    <div className="BuildControls">
    <p>Current Price: <strong>{props.price.toFixed(2)}$</strong></p>
        {controls.map(ctrl => (<BuildControl disabled={props.disabled[ctrl.type]} removed={()=> props.ingredientRemoved(ctrl.type)} added={()=> props.ingredientAdded(ctrl.type)} key={ctrl.label} label={ctrl.label}></BuildControl>))}
    <button onClick={props.ordered} className="OrderButton" disabled={!props.pruchasable}>ORDER NOW</button>
    </div>
)

export default BuildControls