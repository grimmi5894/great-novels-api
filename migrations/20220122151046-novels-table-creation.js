'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('novels', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      title: { type: Sequelize.STRING },
      authorId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'authors',
          },
          key: 'id'
        }
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW()') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()') },
      deletedAt: { type: Sequelize.DATE }
    })
  },

  async down(queryInterface) {
    return queryInterface.dropTable('novels')
  }
}
