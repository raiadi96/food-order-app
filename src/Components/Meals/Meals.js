import MealSummary from "./MealSummary";
import AvailableMeals from "./AvailableMeals";
import React from "react";
const Meals = props =>{
    return <React.Fragment>
        <MealSummary/>
        <AvailableMeals/>
    </React.Fragment>  
};

export default Meals;