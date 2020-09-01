
exports.up = function(knex) {
    return knex.schema.createTable('vendas', function (table) {
        table.increments();

        table.string('cpfCnpj').notNullable();
        table.string('intencaoVendaId').notNullable();
        table.string('intencaoVendaReferencia').notNullable();
        table.string('pedidoId').notNullable();
        table.string('pedidoReferencia').notNullable();


      }); 
};

exports.down = function(knex) {
    return knex.schema.dropTable('vendas');  
};
