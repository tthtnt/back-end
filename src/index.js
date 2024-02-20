const Koa = require('koa')
const KoaBody = require('koa-body')
const path = require('path')
const app = new Koa()
const helmet = require('koa-helmet')
const statics = require('koa-static')

const router = require('./routes/routes')
// 处理header
app.use(helmet())
// 处理body
app.use(KoaBody())
// 处理静态文件
app.use(statics(path.join(__dirname, '../public')))
app.use(router())

app.listen(3001)