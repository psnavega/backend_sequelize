const db = require('../models');

class NiveisController{
    static async GetNiveis(req, res) {
        try{
            const pessoas = await db.Niveis.findAll();
            return res.status(200).json(pessoas)    
        } catch(error) {
            return res.status(500).send({error: error.message})
        }
    }

    static async GetNivel(req, res) {
        const id = req.params.id;
        try{
            const pessoa = await db.Niveis.findAll({where: {id: id}});
            return res.status(200).json(pessoa)    
        } catch(error) {
            return res.status(500).send({error: error.message})
        }
    }

    static async PostNivel(req, res) {
        const data = req.body
        try{
            const newUser = await db.Niveis.create(data);
            return res.status(200).json(data);
        } catch(error) {
            return res.status(500).send({error: error.message})
        }
    }

    static async PostNivel(req, res) {
        const data = req.body
        try{
            const newUser = await db.Niveis.create(data);
            return res.status(200).json(data);
        } catch(error) {
            return res.status(500).send({error: error.message})
        }
    }

    static async PatchNivel(req, res) {
        const data = req.body
        const id = req.params.id
        try{
            const updateUser = await db.Niveis.update(data, {where: {id: id}});
            return res.status(200).send(updateUser)
        } catch(e) {
            return res.status(500).send({error: e.message})
        }
    }

    static async PatchNivel(req, res) {
        const data = req.body
        const id = req.params.id
        try{
            const updateUser = await db.Niveis.update(data, {where: {id: id}});
            return res.status(200).send(updateUser)
        } catch(e) {
            return res.status(500).send({error: e.message})
        }
    }

    static async deleteNivel(req, res) {
        const id = req.params.id
        try{
            const destroyerUser = await db.Niveis.destroy({where: {id: id}});
            return res.status(200).send(destroyerUser);
        } catch(e) {
            return res.status(500).send({error: e.message})
        }
    }
}

module.exports = NiveisController;