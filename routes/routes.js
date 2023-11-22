
const {Food} = require('../schemas/food.schema.js')

async function getFoods(req, res, next){
    console.log("getting foods.")
    const foods = await Food.find()
    res.status(200).json(foods)
    next()
}
async function addFood(req, res, next){
    const foodAdded = await new Food({name: req.body.name, kcal: req.body.kcal})
    await foodAdded.save()
    res.status(200).json(foodAdded)
    next()
}
async function removeFood(req, res, next){
    //by name
    const deletedFood = await Food.deleteOne({name: req.body.name})
    res.status(200).json(deletedFood)
    next()
}
async function editFood(req, res, next){
    //for now it only edits the name
    const updatedFood = await Food.updateOne({name: req.body.name}, 
        {name: req.body._name, kcal: req.body._kcal})
    res.status(200).json(updatedFood)
    next()
}
async function getFood(req, res, next){
    const foundFood = await Food.findOne({name: req.body.name})
    res.status(200).json(foundFood)
    next()
}
function reqs(req, res, next){
    console.log(req.body)
    next()
}

module.exports = {getFoods, addFood, removeFood, editFood, getFood, reqs}
