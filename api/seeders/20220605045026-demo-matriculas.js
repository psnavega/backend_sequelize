'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('Matriculas', [
      {
        status: "confirmado",
        estudante_id: 1,
        turma_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
      status: "confirmado",
      estudante_id: 4,
      turma_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      status: "confirmado",
      estudante_id: 5,
      turma_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      status: "confirmado",
      estudante_id: 6,
      turma_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      status: "confirmado",
      estudante_id: 6,
      turma_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      status: "confirmado",
      estudante_id: 7,
      turma_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      status: "confirmado",
      estudante_id: 7,
      turma_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      status: "confirmado",
      estudante_id: 2,
      turma_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      status: "confirmado",
      createdAt: new Date(),
      estudante_id: 8,
      turma_id: 2,
      updatedAt: new Date()
    },
    {
      status: "confirmado",
      createdAt: new Date(),
      estudante_id: 2,
      turma_id: 1,
      updatedAt: new Date()
    },
    {
      status: "confirmado",
      createdAt: new Date(),
      estudante_id: 3,
      turma_id: 2,
      updatedAt: new Date()
    },
    {
      status: "confirmado",
      createdAt: new Date(),
      estudante_id: 6,
      turma_id: 3,
      updatedAt: new Date()
    },
  ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Matriculas', null, {});
  }
};
