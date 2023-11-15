const express = require('express');
const router = express.Router();
const Checklist = require('../models/checklist');

router.post('/', async (req, res) => 
    {
        let {name} = req.body;

        try
        {
            let checklist = await Checklist.create({name});
            res.status(200).json(checklist);
        }
        catch(e)
        {
            console.log(e);
            res.status(422).json({ error: 'Erro interno do servidor' });
        }
    })  
    
router.get('/', async (req, res) =>
    {   
        try
        {
            let checkList = await Checklist.find({});
            res.status(200).json(checkList);
        }
        catch(error)
        {
            res.status(422).json(error);
        }
    })

router.get('/:id', async (req, res)=>
    {
        try
        {
            let checkList = await Checklist.findById(req.params.id);
            res.status(200).json(checkList);
        }
        catch(error)
        {
            res.status(422).json(error);
        }
    })

router.put('/:id', async (req, res)=>
    {
        let {name} = req.body

        try
        {
            let checklist = await Checklist.findByIdAndUpdate(req.params.id, {name}, {new: true}); // atualizando um campo
            res.status(200).json(checklist);
        }
        catch(error)
        {
            res.status(422).json(error);
        }
    })

router.delete('/:id', async (req, res)=>
    {
        try
        {
            let checklist = await Checklist.findByIdAndRemove(req.params.id);
            res.status(200).json(checklist);
        }
        catch(error)
        {
            res.status(422).json(error);
        }
    })

module.exports = router;