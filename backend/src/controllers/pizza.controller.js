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


// update pizza 
export const updatePizza = asyncHandler( async (req ,res) => {
    const {pizzaName , image ,category ,prices , description} = req.body;
    const {pizzaId} =  req.params;
    console.log(pizzaId);

    // find and update pizza
    const pizza = await Pizza.findByIdAndUpdate(
        pizzaId,
        {
            pizzaName,
            category,
            prices,
            description,
            image
        },
        {new : true}
    )
    
    // check pizza is update or not 
    const updatedPizza = await Pizza.findById(pizza._id);
    if(!updatePizza){
        return res.status(400).json({
            success : false,
            message : "Pizza is not updated yet! Try again"
        })
    }

    return res.status(201).json({
        success : true ,
        message : "Pizza has updated Now!",
        updatedPizza
    })

})

// delet pizza controller
export const deletePizaa = asyncHandler( async (req, res) =>{
    const {id} = req.params;
    if (!id) {
        return res.status(303).json({
            success : false,
            message : "ID should be avalible"
        })
    }

    const deletedPizza = await Pizza.findByIdAndDelete(
        id,
        {new : true}
    )
    if (!deletedPizza) {
        return res.status(400).json({
            success : false,
            message : "Pizza not found!"
        })
    }

    return res.status(200).json({
        success :true,
        message : `Pizza has deleted.`,
        
    })
})

// toggle pizza controller pending
// TODO 

