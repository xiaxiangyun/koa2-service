const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const convert = require('koa-convert')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa-cors')
const router = require('./routes/index')

// error handler
onerror(app)

app.use(convert.compose(
  // koaBody({ multipart: true }),
  bodyparser,
  json(),
  logger(),
  cors(),
))

// middlewares
// app.use(bodyparser({
//   enableTypes: ['json', 'form', 'text']
// }))
// app.use(json())
// app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(router.routes(), router.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

module.exports = app