import {checkAuthorized} from '../routes/account'
//检测是否登录中间件
export default async function (ctx, next) {
    try {
        const auth = await checkAuthorized(ctx)
        if (auth) await next()
    } catch (error) {

        console.error(error)
        if (ctx.headers['user-agent'].includes('node-fetch')) {
            ctx.authorized = false
            ctx.token = null
            await next()
        } else {
            ctx.redirect('/page/login')
            ctx.status = 401
        }
    }
}
