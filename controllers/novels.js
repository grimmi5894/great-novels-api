const models = require('../models')

const getAllNovels = async (request, response) => {
  const novels = await models.novels.findAll({
    include: [
      { model: models.authors },
      { model: models.genres }
    ]
  })

  return response.send(novels)
}

const getNovelByIdentifier = async (request, response) => {
  const { identifier } = request.params

  const novel = await models.novels.findOne({
    where: {
      [models.Op.or]: [
        { id: { [models.Op.like]: `%${identifier}%` } },
        { title: { [models.Op.like]: `%${identifier}%` } }]
    },
    include: [
      { model: models.authors },
      { model: models.genres }
    ]
  })

  return novel
    ? response.send(novel)
    : response.sendStatus(404)
}

module.exports = { getAllNovels, getNovelByIdentifier }
