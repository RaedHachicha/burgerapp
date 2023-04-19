
import React from "react";
import './Burger.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredient'

const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(igKey=> {

        return [...Array(props.ingredients[igKey])].map((_,i)=> {
            console.log(props.ingredients[igKey])
            return <BurgerIngredient key={igKey+i} type={igKey}></BurgerIngredient>
        })
    }).reduce((arr,el)=> {
        return arr.concat(el)
    },[])
    console.log(transformedIngredients)

    if (transformedIngredients.length===0){
        transformedIngredients = <div>Please start adding ingredients!</div>
    }
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    )
}

export default Burger