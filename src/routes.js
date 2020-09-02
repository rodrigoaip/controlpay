const express = require('express');
const routes = express.Router();

const CallBack = require('./controllers/callBackController') 

routes.get('/', (request, response) => {
    return response.send('🚀 Servidor ControlPay online!');
} );

routes.post('/callback', CallBack.create);
routes.post('/search/:intencaoVendaId', CallBack.search);

module.exports = routes;