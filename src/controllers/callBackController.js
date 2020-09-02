const connection = require('../database/connection');
const { search } = require('../routes');

module.exports = {
    async create(request, response) {
       const {cpfCnpj, intencaoVendaId, intencaoVendaReferencia, pedidoId, pedidoReferencia} = request.query; 
       
       const { b } = request.body;

        console.log(request.query);

        console.log( b );

        

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
        const { pedidoReferencia } = request.params;

        const dados = await connection('vendas')
            .where('pedidoReferencia', pedidoReferencia)
            .select('*');

        return response.json(dados);

    }


}