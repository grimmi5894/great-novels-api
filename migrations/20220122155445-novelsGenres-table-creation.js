'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('novelsGenres', {
      novelId: { type: Sequelize.INTEGER, references: { model: 'novels', key: 'id' } },
      genreId: { type: Sequelize.INTEGER, references: { model: 'genres', key: 'id' } },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW()') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()') },
      deletedAt: { type: Sequelize.DATE }
    })
  },

  async down(queryInterface) {
    return queryInterface.dropTable('novelsGenres')
  }
}
