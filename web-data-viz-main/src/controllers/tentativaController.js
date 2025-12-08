var tentativaModel = require("../models/tentativaModel");

function registrarTentativa(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var qtdAcertos = req.body.certas;
    var qtdErros= req.body.erradas;
    var fkUsuario = req.body.fkUsuarioServer;
    var idTentativa = req.body.idTentativa;
    var fkQuiz = req.body.fkQuiz;

    // Faça as validações dos valores
    if (qtdAcertos == undefined) {
        res.status(400).send("Seus acertos estão undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("Sua fkUsuario está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        tentativaModel.registrarTentativa(idTentativa, fkUsuario, fkQuiz, qtdAcertos, qtdErros)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o registro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    registrarTentativa
}