const models = require('../models')

const getAllAuthors = async (request, response) => {
  const authors = await models.authors.findAll()

  return response.send(authors)
}

const getAuthorByIdentifier = async (request, response) => {
  const { identifier } = request.params

  const author = await models.authors.findOne({
    where: {
      [models.Op.or]: [
        { id: { [models.Op.like]: `%${identifier}%` } },
        { nameLast: { [models.Op.like]: `%${identifier}%` } }]
    },
    include: [{
      model: models.novels,
      include: [{ model: models.genres }]
    }]
  })

  return author
    ? response.send(author)
    : response.sendStatus(404)
}

module.exports = { getAllAuthors, getAuthorByIdentifier }
