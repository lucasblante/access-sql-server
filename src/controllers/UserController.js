const knex = require('../database')

module.exports = {
    async index(req, res){
        const results = await knex('scc_opera')
        return res.json(results)
    }
}