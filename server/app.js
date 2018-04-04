const Koa = require('koa');
const jsonp = require('koa-jsonp');
const router = require('./router');
const config = require('./config');

const { port } = config

const app = new Koa()

app.use(jsonp())
app.use(router.routes()).use(router.allowedMethods())

module.exports = app.listen(port, function() {
  console.log(`app is listening at port ${port}\n邮件服务开启`)
})
