const express = require('express');

const App = express();

App.get('/', (req, res)=>
    {
        res.send('<h1> Minha Lista de Tarefas </h1>')
    });

App.listen(3000, ()=>
    {
        console.log('O servidor foi iniciado!');
    })