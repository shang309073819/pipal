export default async function (ctx, next) {
    try {
        await next();
    } catch (error) {
        if (error.constructor.name === 'Exception') {
            console.error(error.message)
            return ctx.throw(400, error.message)
        }
        console.error(error);
        return ctx.throw(400, error.toString());
    }
}
