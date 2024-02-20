function getUserInfo(ctx) {
    const { body, header } = ctx.request
    console.log(body)
    console.log(header)
    // console.log(ctx.request)
    const { name, age } = body
    const { role } = header
    if (!body || !name || !age) {
        ctx.status = 404
        ctx.body = {
            code: 404,
            msg: 'name与age不能为空'
        }
    } else {
        if (!(role && role === 'admin')) {
            ctx.status = 401
            ctx.body = {
                code: 401,
                msg: 'unauthorized post'
            }
        } else {
            ctx.body = {
                code: 200,
                data: {...body},
                msg: '上传成功'
            }
        }
    }
}

module.exports = {
    getUserInfo
}