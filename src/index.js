import Koa from 'koa'
import KoaBody from 'koa-body'
import path from 'path'
import helmet from 'koa-helmet'
import statics from 'koa-static'
import router from './routes/routes'
import jsonutil from 'koa-json'
import cors from '@koa/cors'
import compose from 'koa-compose'
import koaBody from 'koa-body'

const app = new Koa()

const middleware = compose([
    koaBody(),
    statics(path.join(__dirname, '../public')),
    cors(),
    jsonutil({pretty: false, param: 'pretty'}),
    helmet()
])

/**
 * 使用koa-compose 集成中间件
 */
app.use(middleware)
app.use(router())

console.log("listen success 3001")
app.listen(3001)