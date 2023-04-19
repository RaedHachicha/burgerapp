import React from "react"
import './Toolbar.css'
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"


const Toolbar = (props) => (
    <header className="Toolbar">
        <div>MENU</div>
        <Logo></Logo>
        <nav>
            <NavigationItems></NavigationItems>
        </nav>
    </header>
)

export default Toolbar

//EP 30 TO BE WATCHED!