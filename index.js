const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

router.get('/', ctx => {
    console.log(ctx.request)
    ctx.body = 'hello world'
})

router.get('/api', ctx => {
    console.log(ctx.request)
    ctx.body = 'hello Api'
})

router.get('/async', async (ctx) => {
    let result = await new Promise((resolve) => {
        setTimeout(function () {
            resolve('Hello world 2s later')
        }, 2000)
    })
    ctx.body = result
})

// 1.request method responed
// 2. api url function router
// 3. ctx async
app.use(router.routes())
.use(router.allowedMethods())

app.listen(3001)