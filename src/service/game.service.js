const { Op } = require('sequelize')
const { game } = require('../model/index')

const create = async data => {
  await game.create(data)
}
const getAll = async() => {
  return await game.findAll()
}
const getTeam = async team => {
  return await game.findAll({
      where: {
          [Op.or]: [
              {team_a: team},
              {team_b: team}
          ]
      }
  })
}
const getDate = async day => {
  return await game.findAll({
    where:{
      match_day: day
    }
  })
}
const update = async(gameId, data) => {
  return await game.update(data, {
    where: {
      id: gameId
    }
  })
}
const remove = async gameId => {
  return await game.destroy({
    where: {
      id: gameId
    }
  })
}


module.exports = {
  create,
  getAll,
  getTeam,
  getDate,
  update,
  remove
}