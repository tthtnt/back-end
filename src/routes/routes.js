const combineRoutes = require('koa-combine-routers')

const aroutes = require('./aRouter')
const broutes = require('./bRouter')
const userRoutes = require('./user')

module.exports = combineRoutes(
    aroutes,
    broutes,
    userRoutes
)