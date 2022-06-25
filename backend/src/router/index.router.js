import express from 'express';

const router = express.Router();



router.get('/', (req,res)=>{
    res.json('Hola mundo')
})

router.get('/:id', (req,res)=>{
    const id = req.params.id;
    res.send(`<h2>Bienvenido usuario: ${id}</h2>`)
})


export default router