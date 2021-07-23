const Belt = require('../models/belt.model')
// made const name same as name in model

module.exports.test = (req, res) => {
    res.json({
        message: "TEST MESSAGE FOR BELT"
    })
}

module.exports.getAll = (req, res) => {
    Belt.find()
        .then(allBelts => res.json({ allBelts }))
        .catch(err => res.json({ err }))
}

module.exports.create = (req, res) => {
    Belt.create(req.body)
        .then(newBelt => res.json({ newBelt }))
        .catch(err => {
            res.status(400).json(err)
            console.log(err)
        })
}

module.exports.getOne = (req, res) => {
    Belt.findOne({_id:req.params.id})
        .then(oneBelt => res.json({belt:oneBelt}))
        .catch(err => res.json({err}))
}

module.exports.update = (req,res) => {
    Belt.findOneAndUpdate({_id:req.params.id},req.body, {new:true,runValidators:true})
        .then(updated => res.json({belt: updated}))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteOne = (req,res) => {
    Belt.deleteOne({_id:req.params.id})
        .then(deleted => res.json(deleted))
        .catch(err => response.json(err))
}