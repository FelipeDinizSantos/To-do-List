const path = require('path');
const express = require('express');
const checklistRouter = require('./src/routes/checkList');
const rootRouter = require('./src/routes/index');
require('./config/database');

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public'))); // Define aonde os arquivos estaticos estarão

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use('/', rootRouter);
app.use('/checklists', checklistRouter);

app.listen(3000, ()=>
    {
        console.log('O servidor foi iniciado!');
    })