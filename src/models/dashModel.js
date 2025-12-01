var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function enviar(id, guerreiro, mago, sabio, artesao, arqueiro, lanceiro) {
    console.log("ACESSEI O DASHBOARD MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function enviar():", id, guerreiro, mago, sabio, artesao, arqueiro, lanceiro);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO Resultados (fkusuario, guerreiro, mago, sabio, artesao, arqueiro, lanceiro) VALUES ('${id}', '${guerreiro}', '${mago}', '${sabio}', '${artesao}', '${arqueiro}', '${lanceiro}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function receber(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", guerreiro, mago, artesao, sabio, arqueiro, lanceiro)
    var instrucaoSql = `
    SELECT * FROM resultados WHERE fkUsuario = '${id}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    enviar,
    receber

};