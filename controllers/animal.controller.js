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
    
};


module.exports.getAllAnimal = async(req, res, next) => {};
