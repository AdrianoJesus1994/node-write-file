const express = require('express');
const bodyParser = require('body-parser');
const dataService = require('./dataService');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', async (req, res) => {
    const data = await dataService.redyData();
    return res.send(data);
});

app.post('/', async (req, res) => {
    const { body: data } = req;
    const dataActual = await dataService.redyData();
    dataActual.push(data);
    const retorno = await dataService.saveData(dataActual);
    return res.send(retorno);
});

app.listen(5000);
