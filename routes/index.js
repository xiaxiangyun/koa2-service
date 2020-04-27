const Router = require('koa-router')
const article = require('./article')

const router = new Router({
  prefix: '/api'
})

router.use('/article', article.routes(), article.allowedMethods())

module.exports = router