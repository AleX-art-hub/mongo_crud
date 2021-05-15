const {Animal} = require('./../models');
module.exports.createAnimal = async(req, res, next) => {
    const {body} = req;
    const animalInstance = new Animal(body);
    //console.log('new animal was created:')
    try {
        const createAnimal = await animalInstance.save();
        if(createdAnimal){
            return res.status(201).send({data: createAnimal});
        }
        res.status(400).send('Bad request');
    } catch(err){
        next(err);
    }
}
module.exports.getAnimal = async(req, res, next) => {
    const {params: {animalId}} = req;
    try {
        const foundAnimal = await Animal.findById(animalId);
        return res.status(201).send({data: foundAnimal});
    } catch (err){
        next(err);
    }
};


module.exports.getAllAnimal = async(req, res, next) => {
    try {
        const foundAnimals = await Animal.find();
        return res.status(201).send({data: foundAnimals});
    } catch (err){
        next(err);
    }
};
module.exports.updateAnimal = async (req, res, next) => {
    const {body, params: {animalId}} = req;
    try{
        const updateAnimal = await Animal.findByIdAndUpdate(animalId, body);
        console.log('update animal', updateAnimal);
        if(updateAnimal){
            return res.status(200).send({data: updateAnimal});
        }
        res.status(400).send('Bad request');
    } catch (err){
        next(err);
    }
};

module.exports.deleteAnimal = async (req, res, next) => {
    const {params: {animalId}} = req;
    try{
        const foundAnimal = await Animal.findByIdAndDelete(animalId);
        if(foundAnimal){
            return res.status(201).send({data: foundAnimal});
        }
        res.status(404).send('Animal not found');
    } catch (err){
        next(err);
    }
};