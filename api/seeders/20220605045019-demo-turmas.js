'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Turmas', [
    {
      data_inicio: new Date(),
      docente_id: 3,
      nivel_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      data_inicio: new Date(),
      docente_id: 1,
      nivel_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      data_inicio: new Date(),
      docente_id: 2,
      nivel_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      data_inicio: new Date(),
      docente_id: 2,
      nivel_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Turmas', null, {});
     
  }
};
