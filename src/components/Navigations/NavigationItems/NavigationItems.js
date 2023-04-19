import React from "react";
import './NavigationItems.css'
import NavigationItem from "./_NavigationItem/NavigationItem";
const NavigationItems = (props)=> (
    <ul className="NavigationItems">
        <NavigationItem link='/' active={true}>Burger Builder</NavigationItem>
        <NavigationItem link='/' >Checkout</NavigationItem>

    </ul>
)
export default NavigationItems