const mongoose = require('mongoose');
const yup = require('yup');
const {Schema} = mongoose;
const animalSchema = new Schema({
    name: {//tak tozhe mozhno var 1
        type: String,
        required: true,
    },
    //var 2
    name: yup.string(). required(),
    count_legs: yup.number(),
    birthday: yup.date(),
});
const Animal = mongoose.model('Animal', animalSchema);
module.exports = Animal;