const axios = require('axios');
const connection = require('../database/connection');
const { search } = require('../routes');

module.exports = {
    async create(request, response) {
       const {cpfCnpj, intencaoVendaId, intencaoVendaReferencia, pedidoId, pedidoReferencia} = request.query; 

       const [id] = await connection('vendas')
            .returning('id')
            .insert({
                cpfCnpj, 
                intencaoVendaId, 
                intencaoVendaReferencia, 
                pedidoId, 
                pedidoReferencia
            });

        console.log(id);

        return response.json({ id });       
       
    },

    async search(request, response) {
        const { intencaoVendaId } = request.query;


        const dados = await connection('vendas')
            .where('intencaoVendaId', intencaoVendaId)
            .select('*');


        return response.json(dados);

    }


}