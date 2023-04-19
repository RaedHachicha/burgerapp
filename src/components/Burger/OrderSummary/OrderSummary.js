import React from "react"
import ReactAux from "../../../reactAux/ReactAux"
import Button from "../../UI/Button/Button"

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        if (props.ingredients[igKey] === 0){
            return null
        }
        else {
        return <li><span style={{textTransform: 'capitalize'}}>{igKey} : {props.ingredients[igKey]}</span></li>

        }
    })
    return (
        <ReactAux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
              {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.finalprice}$</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.cancelref}>CANCEL</Button>
            <Button btnType="Success" clicked={props.successref}>CONTINUE</Button>
        </ReactAux>
    )
}
export default OrderSummary 