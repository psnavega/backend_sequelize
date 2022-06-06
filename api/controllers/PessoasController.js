const db = require('../models');

class PessoasController{
    static async GetPessoas(req, res) {
        try{
            const pessoas = await db.Pessoas.findAll();
            return res.status(200).json(pessoas)    
        } catch(error) {
            return res.status(500).send({error: error.message})
        }
    }

    static async GetPessoa(req, res) {
        const id = req.params.id;
        try{
            const pessoa = await db.Pessoas.findAll({where: {id: id}});
            return res.status(200).json(pessoa)    
        } catch(error) {
            return res.status(500).send({error: error.message})
        }
    }

    static async PostPessoa(req, res) {
        const data = req.body
        try{
            const newUser = await db.Pessoas.create(data);
            return res.status(200).json(data);
        } catch(error) {
            return res.status(500).send({error: error.message})
        }
    }

    static async PostPessoa(req, res) {
        const data = req.body
        try{
            const newUser = await db.Pessoas.create(data);
            return res.status(200).json(data);
        } catch(error) {
            return res.status(500).send({error: error.message})
        }
    }

    static async PatchPessoa(req, res) {
        const data = req.body
        const id = req.params.id
        try{
            const updateUser = await db.Pessoas.update(data, {where: {id: id}});
            return res.status(200).send(updateUser)
        } catch(e) {
            return res.status(500).send({error: e.message})
        }
    }

    static async PatchPessoa(req, res) {
        const data = req.body
        const id = req.params.id
        try{
            const updateUser = await db.Pessoas.update(data, {where: {id: id}});
            return res.status(200).send(updateUser)
        } catch(e) {
            return res.status(500).send({error: e.message})
        }
    }

    static async deletePessoa(req, res) {
        const id = req.params.id
        try{
            const destroyerUser = await db.Pessoas.destroy({where: {id: id}});
            return res.status(200).send(destroyerUser);
        } catch(e) {
            return res.status(500).send({error: e.message})
        }
    }

    static async buscaMatricula(req, res) {
        const {estudanteId, matriculaId } = req.params
        try{
            const matricula = await db.Matriculas.findAll({
                where: {
                    id: matriculaId,
                    estudante_id: estudanteId 
                }
            });
            return res.status(200).json(matricula);
        } catch(e) {
            return res.status(500).send({erro: e.message})
        }
    }

    static async insereMatricula(req, res) {
        try{
            const { estudanteId } = req.params;
            const novaMatricula = {...req.body, estudanteId: Number(estudanteId)} // não entendi
            const matriculaInserida = await db.Matriculas.create(novaMatricula);
            return res.status(200).json(matriculaInserida);
        } catch(e) {
            return res.status(500).json({error: e.message})
        }
    }
    
    static async PatchMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        const novasInfos = req.body
        try{
            const updateUser = await db.Matriculas.update(novasInfos, 
                {where: 
                    {
                        estudante_id: Number(estudanteId),
                        id: Number(matriculaId)
                    }, 
                }
            );
            return res.status(200).send(updateUser)
        } catch(e) {
            return res.status(500).send({error: e.message})
        }
    }

    static async deleteMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        try{
            const destroyMatricula = await db.Matriculas.destroy({where: {id: Number(matriculaId), estudante_id: Number(estudanteId)}});
            return res.status(200).send("Excluido com sucesso");
        } catch(e) {
            return res.status(500).send({error: e.message})
        }
    }
    
}

module.exports = PessoasController;