const Koa = require('koa')
const Router = require('koa-router')
const cors = require('@koa/cors')
const KoaBody = require('koa-body')
const json = require('koa-json')
const app = new Koa()
const router = new Router()
/**
 * koa的一些中间件
 * 路由: koa-router koa-body
 * 协议解析: koa-body
 * 跨域处理: @koa/cors
 */

/**
 * router prefix 前缀作用
 */

router.prefix('/api')

router.get('/', ctx => {
    console.log(ctx.request)
    ctx.body = 'hello world'
})

router.get('/api', ctx => {
    // 获取get请求中的params
    const params = ctx.request.query
    console.log(params)
    console.log(params.name, params.age)
    console.log(ctx.request)
    ctx.body = {
        name: params.name,
        age: params.age
    }
})

router.get('/async', async (ctx) => {
    let result = await new Promise((resolve) => {
        setTimeout(function () {
            resolve('Hello world 2s later')
        }, 2000)
    })
    ctx.body = result
})

router.post('/post', async (ctx) => {
    let { body } = ctx.request
    console.log(body)
    console.log('body: ',ctx.request)
    ctx.body = {
        ...body
    }
})

// 先处理body
app.use(KoaBody())
// 再处理跨域
app.use(cors())
// 使用koa-json
app.use(json({pretty: false, param: 'pretty'}))

// 1.request method responed
// 2. api url function router
// 3. ctx async
app.use(router.routes())
.use(router.allowedMethods())

app.listen(3001)