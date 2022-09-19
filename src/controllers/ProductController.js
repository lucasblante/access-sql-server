const { json } = require('express')
const knex = require('../database')

module.exports = {
    async index(req, res){
        const results = await knex.raw(`
        SELECT FProduGrupo AS Grupo, FProduCodigo AS Codigo, FProduDescricao AS Nome, FProduPrecoVda01 AS Preco, FGradeEstAtual AS Estoque
        FROM scc_produ, scc_grade
        WHERE FProduGrupo = FGradeGrupo 
        AND FProduCodigo = FGradeProduto
        `)

        return res.json(Object.values(results[0]))
    },

    async productsByGroup(req, res){
        const { grupo } = req.params

        const results = await knex.raw(`
        SELECT FProduGrupo AS Grupo, FProduCodigo AS Codigo, FProduDescricao AS Nome, FProduPrecoVda01 AS Preco, FGradeEstAtual AS Estoque
        FROM scc_produ, scc_grade
        WHERE FProduGrupo = ${grupo} 
        AND FGradeGrupo = ${grupo}
        AND FProduCodigo = FGradeProduto
        `)

        return res.json(Object.values(results[0]))
    },

    async productByCode(req, res){
        const { grupo, codigo } = req.params

        const results = await knex.raw(`
        SELECT FProduGrupo AS Grupo, FProduCodigo AS Codigo, FProduDescricao AS Nome, FProduPrecoVda01 AS Preco, FGradeEstAtual AS Estoque
        FROM scc_produ, scc_grade
        WHERE FProduGrupo = ${grupo} 
        AND FProduCodigo = ${codigo}
        AND FGradeGrupo = ${grupo}
        AND FGradeProduto = ${codigo}
        `)

        return res.json(Object.values(results[0]))
    },
}