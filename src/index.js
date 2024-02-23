import Koa from 'koa'
import KoaBody from 'koa-body'
import path from 'path'
import helmet from 'koa-helmet'
import statics from 'koa-static'
import router from './routes/routes'

const app = new Koa()
// 处理header
app.use(helmet())
// 处理body
app.use(KoaBody())
// 处理静态文件
app.use(statics(path.join(__dirname, '../public')))
app.use(router())

console.log("listen success 3001")
app.listen(3001)