import React from "react"
import ReactAux from "../../reactAux/ReactAux";
import "./Layout.css"

const Layout = (props) => (
    <ReactAux>
        <div>Toolbar, Sidedrawer,Backdrop</div>
    <main className="Content">
        {props.children}
    </main>
    </ReactAux>
    )
    

    export default Layout;