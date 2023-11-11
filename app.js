const express = require('express');
const checklistRouter = require('./src/routes/checkList')
require('./config/database');

const app = express();

app.use(express.json()); 
app.use('/checklists', checklistRouter);

app.listen(3000, ()=>
    {
        console.log('O servidor foi iniciado!');
    })