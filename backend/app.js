import express from "express";

const app = express();

app.get('/', (req, res, next)=>{
    res.send('hola backendee');
});

app.listen('8080',(req,res)=>{
    console.log('server iniciado');
})