const knex = require('../database')

module.exports = {
    async index(req, res){
        const results = await(knex.raw(`
        SELECT FParVdFatvd AS Fatura, FParVdNumero AS Parcela, FFatVdDataEmissa AS Emissao, FParVdDataVencto AS Vencimento,
        FParVdValor AS Valor, FParVdValorPago AS Pago, FParVdJaQuitada AS Quitado,
        FDuplinumero AS Boleto, FDupliVencimen AS VencimentoBoleto, FDupliEstadoBc AS Baixado,
        FFatVdCliente AS CodCliente, FClienNome AS Cliente
        FROM scc_parvd, scc_fatvd, scc_clien, scc_dupli
        WHERE FFatVdNumero = FParVdFatvd
        AND FFatVdCliente = FClienCodigo
        AND FDupliParcela = FParVdNumero
        AND FParVdJaQuitada = 0
        AND FParVdDataVencto > '2020-01-01'
        AND FFatVdNumero = FDupliFatvd
        `))
        return res.json(results)
    }
}