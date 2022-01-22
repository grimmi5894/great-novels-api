'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('authors', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      nameFirst: { type: Sequelize.STRING },
      nameLast: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW()') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()') },
      deletedAt: { type: Sequelize.DATE }
    })
  },

  async down(queryInterface) {
    return queryInterface.dropTable('authors')
  }
}
