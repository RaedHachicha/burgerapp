import { Component } from "react";
import React from "react";
import ReactAux from "../../reactAux/ReactAux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";


const INGREDIENT_PRICES = {
    salad: 0.4,
    cheese: 0.3,
    bacon: 0.7,
    meat: 1.4
}
class BurgerBuilder extends Component {

    state = {
      ingredients:{  salad:0,
        bacon:0,
        cheese:0,
        meat:0},
    totalPrice: 3,
    pruchasable: false
    }

    render() {
        const disabledInfo = {...this.state.ingredients}
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <ReactAux>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls pruchasable ={this.state.pruchasable} price={this.state.totalPrice} disabled={disabledInfo} ingredientAdded = {this.addIngredientHandler} ingredientRemoved = {this.removeIngredientHandler}></BuildControls>
            </ReactAux>
        )
    }

    addIngredientHandler = (type) => {
        let updatecount = this.state.ingredients[type]+1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatecount
        const priceDeduction = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice =  oldPrice + priceDeduction
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        console.log('PRICE;',this.state.totalPrice)
        this.updatePruchaseState(updatedIngredients)
}

removeIngredientHandler = (type)=> {
    if (this.state.ingredients[type] === 0){
        console.log("Reached 0 CAN NOT BE REMOVED")
    }
    else {
        let updatecount = this.state.ingredients[type]-1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatecount
        const priceDeduction = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice =  oldPrice - priceDeduction
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        console.log('PRICE;',this.state.totalPrice)
        this.updatePruchaseState(updatedIngredients)

    }
}
    updatePruchaseState(ingredients){
        const sum = Object.keys(ingredients).map(
            igKey => {
                return ingredients[igKey]
            }
        ).reduce((sum,el)=> {
            return sum+el;
        },0)
        this.setState({pruchasable: sum >0})
    }



}

export default BurgerBuilder