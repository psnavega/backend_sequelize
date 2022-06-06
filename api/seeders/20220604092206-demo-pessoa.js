'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pessoas', [
      {
        nome: 'Patrick',
        ativo: true,
        email: 'patrick@navega.com',
        role: 'DEV',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Tati',
        ativo: true,
        email: 'tati@beca.com',
        role: 'contadora',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Beta',
        ativo: true,
        email: 'bet@siv.com',
        role: 'bancaria',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Joao Paulo',
        ativo: true,
        email: 'joao@paulo.com',
        role: 'DEV',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Rafa',
        ativo: true,
        email: 'rafa@assad.com',
        role: 'atleta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Amanda',
        ativo: true,
        email: 'Amanda@Lubrano.com',
        role: 'DEV',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Bruno',
        ativo: true,
        email: 'bruno@alonso.com',
        role: 'Infra',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Cayetanna',
        ativo: true,
        email: 'cayetanna@navega.com',
        role: 'DEV',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Pessoas', null, {});
   
  }
};
