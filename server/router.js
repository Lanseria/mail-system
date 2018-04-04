const Router = require('koa-router')
const prefix = require('../config')
const mailController = require('./mailController')
const router = new Router({ prefix })

router.get('/common', mailController.common)

exports = module.exports = router
