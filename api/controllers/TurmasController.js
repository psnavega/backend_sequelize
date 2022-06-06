const db = require('../models');

class TurmasController{
    static async GetTurmas(req, res) {
        try{
            const pessoas = await db.Turmas.findAll();
            return res.status(200).json(pessoas)    
        } catch(error) {
            return res.status(500).send({error: error.message})
        }
    }

    static async GetTurma(req, res) {
        const id = req.params.id;
        try{
            const pessoa = await db.Turmas.findAll({where: {id: id}});
            return res.status(200).json(pessoa)    
        } catch(error) {
            return res.status(500).send({error: error.message})
        }
    }

    static async PostTurma(req, res) {
        const data = req.body
        try{
            const newUser = await db.Turmas.create(data);
            return res.status(200).json(data);
        } catch(error) {
            return res.status(500).send({error: error.message})
        }
    }

    static async PostTurma(req, res) {
        const data = req.body
        try{
            const newUser = await db.Turmas.create(data);
            return res.status(200).json(data);
        } catch(error) {
            return res.status(500).send({error: error.message})
        }
    }

    static async PatchTurma(req, res) {
        const data = req.body
        const id = req.params.id
        try{
            const updateUser = await db.Turmas.update(data, {where: {id: id}});
            return res.status(200).send(updateUser)
        } catch(e) {
            return res.status(500).send({error: e.message})
        }
    }

    static async PatchTurma(req, res) {
        const data = req.body
        const id = req.params.id
        try{
            const updateUser = await db.Turmas.update(data, {where: {id: id}});
            return res.status(200).send(updateUser)
        } catch(e) {
            return res.status(500).send({error: e.message})
        }
    }

    static async deleteTurma(req, res) {
        const id = req.params.id
        try{
            const destroyerUser = await db.Turmas.destroy({where: {id: id}});
            return res.status(200).send(destroyerUser);
        } catch(e) {
            return res.status(500).send({error: e.message})
        }
    }
}

module.exports = TurmasController;