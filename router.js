const {Router} = require('express');
const animalRouter = require('./routers/animalRouter');
const router = new Router();
//nyt  /api/animal
router.use('/animals', animalRouter);
module.exports = router;