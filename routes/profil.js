const express=require('express')
const route=express.Router()
const db=require('../models')


route.post('/createprofil', (req,res,next)=>{
    db.Profil.create(req.body)
    .then((response)=>{
        res.status(200).send(response)
    })
    .catch((err)=>{
        res.status(400).send(err)
    })
})

route.get('/profil/:id',(req,res,next)=>{
    db.Profil.findOne({where:{id:req.params.id}})
    .then((response)=>{
        res.status(200).send(response)
    })
    .catch((err)=>{
        res.status(400).send(err)
    })
})

route.get('/profils',(req,res,next)=>{
    db.Profil.findAll()
    .then((response)=>{
        res.status(200).send(response)
    })
    .catch((err)=>{
        res.status(400).send(err)
    })
})

route.patch('/profil/:id',(req,res,next)=>{
    db.Profil.update(req.body,{where:{id:req.params.id}})
    .then((response)=>{
        res.status(200).send(response)
    })
    .catch((err)=>{
        res.status(400).send(err)
    })
})

route.delete('/delete/:id',(req,res,next)=>{
    db.Profil.destroy({where:{id:req.params.id}})
    .then((response)=>{
        res.status(200).send(response)
    })
    .catch((err)=>{
        res.status(400).send(err)
    })
})

module.exports=route




