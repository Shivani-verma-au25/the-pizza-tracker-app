import { Pizza } from "../models/pizza.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// add pizza controller

export const addPizza = asyncHandler(async (req , res) =>{
    const {pizzaName,image,description,prices,category} =  req.body;
    // validate fields/
    if ([pizzaName ,image , description ,prices, category].some((field) => !field || field === "" )) {
        return res.status(404).json({
            success : false,
            message : "All Feilds are required!"
        })
    }

    if(!prices?.regular || !prices?.medium || !prices?.large){
        return res.status(301).json({
            success : false,
            message : "Prices and Size should not be empty."
        })
    }

    const existingPizza = await Pizza.findOne({pizzaName : pizzaName})
    if (existingPizza) {
        return res.status(300).json({
            success :false,
            message : `${existingPizza.pizzaName} is Already Exist.`
        })
    }

    //TODO :- image upload is pending

    const pizza = await Pizza.create({
        pizzaName,
        prices,
        description,
        category,
        image
    })
    // check pizza is created or not

    const createdPizza = await Pizza.findById(pizza._id);
    if (!createdPizza) {
        return res.status(400).json({
            success : false,
            message :"Pizza is not created yet!"
        })
    }

    // send response 
    return res.status(200).json({
        success: true,
        message : `${createdPizza.pizzaName} is Added !`,
        createdPizza
    }) 
    
})

// get all pizza
export const getAllPizzas = asyncHandler( async (req ,res) =>{
    const allPizzza = await Pizza.find();
    if (!allPizzza) {
        return res.status(400).json({
            success :false,
            message : "There is no Pizza !"
        })
    }

    return res.status(200).json({
        success :true,
        message : "All pizza's",
        allPizzza
    })
})

