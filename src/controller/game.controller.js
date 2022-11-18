const service = require('../service/game.service')

const create = async (req,res) => {
  await service.create(req.body)
  res.status(201).send('game created successfully')
}

const getAll = async(req, res) => {
  const response = await service.getAll()
  res.send(response)
}

const getTeam = async (req, res) => { 
  const team = req.params.team
  res.send(await service.getTeam(team))
}

const getDate = async (req, res) => {
  const date = req.params.date
  res.send(await service.getDate(date))
}

const update = async (req, res) => {
  const gameId = parseInt(req.params.id, 10)
  await service.update(gameId, req.body)
  res.status(200).send('Match updated successfully!!!')
}

const remove = async (req, res) => {
  const gameId = req.params.id
  await service.remove(gameId)
  res.status(200).send('Match removed successfully')
}


module.exports = {
  create,
  getAll,
  getTeam,
  getDate,
  update,
  remove
}