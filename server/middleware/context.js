import {stores} from '../../client/stores/stores';

export default async (ctx, next) => {
    //合并store
    ctx.stores = stores({
        common: {
            hostname: ctx.headers.host
        }
    });
    await next()
}
