import React from "react"
import ReactAux from "../../reactAux/ReactAux";
import "./Layout.css"
import Toolbar from "../Navigations/Toolbar/Toolbar";

const Layout = (props) => (
    <ReactAux>
        <Toolbar></Toolbar>
    <main className="Content">
        {props.children}
    </main>
    </ReactAux>
    )
    

    export default Layout;