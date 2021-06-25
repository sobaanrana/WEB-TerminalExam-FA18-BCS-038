var express = require('express');
var router = express.Router();
var Match = require('../models/match');
const auth = require('../middlewares/auth');


//Creating New Match
router.post('/new', auth, async (req, res) => {

    let match = await Match.create(req.body);
    
    await match.save();

    res.status(201).json({
        success: true,
        match
            
    })
})

//Getting all the matches
router.get('/' , async (req, res, next) => {
  
  let match = await Match.find();
  
  res.status(200).json({
    success: true,
    match
   })

    
        
});

//Getting a single match
router.get('/:id', async (req, res, next) => {

    const match = await Match.findById(req.params.id);
    
    if(!match) {
        return res.status(404).json({
            success: false,
            message: 'Match not found! Invalid match ID.'
        })
    }
  

    res.status(200).json({
        success: true,
        //len: req.params.id.length,
        match
    })

})

//Updating a match
router.put('/update/:id', auth, async (req, res, next) => {
    if (req.params.id.length!=24) {
        return res.status(404).json({
            success: false,
            message: 'Match not found! Enter match ID.'
        })
    }

    let match = await Match.findById(req.params.id);
    
    if(!match) {
        return res.status(404).json({
            success: false,
            message: 'Match not found! Invalid match ID.'
        })
    }

    match = await Match.findByIdAndUpdate(req.params.id, req.body, { //avoiding some warnings
        new: true, //to avoid warnings
        runValidators: true,
        //useFindAndModify:fasle
    })

    res.status(200).json({
        success: true,
        match
    })
  })

//Deleting match 
router.delete('/delete/:id', auth, async (req, res, next) => {
    if (req.params.id.length!=24) {
        return res.status(404).json({
            success: false,
            message: 'Match not found! Enter match ID.'
        })
    }

    let match = await Match.findById(req.params.id);
    
    if(!match) {
        return res.status(404).json({
            success: false,
            message: 'Match not found! Invalid match ID.'
        })
    }

    await match.remove();


    res.status(200).json({
        success: true,
        message: 'Match is deleted'
    })

})
module.exports = router;
