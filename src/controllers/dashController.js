var DashModel = require("../models/Model");


function enviar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var id = req.body.IDServer;
    var guerreiro = req.body.guerreiroServer;
    var mago = req.body.magoServer;
    var artesao = req.body.artesaoServer;
    var sabio = req.body.sabioServer;
    var arqueiro = req.body.arqueiroServer;
    var lanceiro = req.body.lanceiroServer;


    // Faça as validações dos valores
    if (guerreiro == undefined) {
        res.status(400).send("O Guerreiro está undefined!");
    } else if (mago == undefined) {
        res.status(400).send("O Mago está undefined");
    } else if (artesao == undefined) {
        res.status(400).send("O Artesão está undefined");
    } else if (sabio == undefined) {
        res.status(400).send("O Sabio está undefined");
    } else if (arqueiro == undefined) {
        res.status(400).send("O Arqueiro está undefined");
    } else if (lanceiro == undefined) {
        res.status(400).send("O Lanceiro está undefined");
    }

    {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        DashModel.receber(id, Guerreiro, mago, artesao, sabio, arqueiro, lanceiro)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}




function receber(req, res) {
    var id = req.body.IDServer;
    

    if (Id == undefined) {
        res.status(400).send("Seu Id está undefined!");
    }else {

        DashModel.receber(id)
            .then(
                function (resultadoreceber) {
                    console.log(`\nResultados encontrados: ${resultadoreceber.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoreceber)}`); // transforma JSON em String

                    if (resultadoreceber.length == 1) {
                        console.log(resultadoreceber);

                        res.json({
                        });
                    } else {
                        res.status(204).json({ guerreiro: [], mago: [],artesao: [], sabio: [], arqueiro: [], lanceiro: [] });
                    }
                })
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}



module.exports = {
    enviar,
    receber
}