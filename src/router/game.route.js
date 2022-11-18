const express = require('express');
const router = express.Router()
const controller = require('../controller/game.controller')

router.post('/', controller.create);
router.get('/', controller.getAll)
router.get('/team/:team', controller.getTeam)
router.get('/date/:date', controller.getDate)
router.put('/:id', controller.update)
router.delete('/:id', controller.remove)

module.exports = router
