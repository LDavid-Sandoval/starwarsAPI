const express = require('express');
const router = express.Router();
const Starship = require('../models/starships')

router.get('/', async (req, res) => {
    const starships  = await Starship.find();
    console.log(starships);
    res.json(starships);
});

router.get('/:id', async (req, res) => {
    starship  = await Starship.findById(req.params.id);
    res.json(starship);
});

router.post('/', async (req, res) => {
    const { name, model, manufacturer, max_atmosphering_speed } = req.body;
    const starship = new Starship( {name, model, manufacturer, max_atmosphering_speed });
    await starship.save();
    console.log(starship);
    res.json({ status: 'Starship Save'});
});

router.put('/:id', async (req,res) => { 
    const { name, model, manufacturer, max_atmosphering_speed }= req.body;
    const newStarship = { name, model, manufacturer, max_atmosphering_speed } ;
    await Starship.findByIdAndUpdate(req.params.id, newStarship);
    console.log(newStarship);
    res.json({ status: 'Starship Update'});
})

router.delete('/:id', async (req,res) => { 
    await Starship.findByIdAndRemove(req.params.id);
    res.json({ status: 'Starship eliminada'});
})
module.exports = router;